
var ContentFilter = (function() {


	if (typeof Class_ == 'undefined') {
		//define locally
		var Class_ = function(def) {

			var c = function() {

			}

			Object.keys(def).forEach(function(name) {
				c.prototype[name] = def[name];
			});

			return c;

		}
	}

	var _docs = {};

	var ContentFilterBase = new Class_({

		addDocuments: function(docs) {
			docs.forEach(function(d) {

				_docs[d.name] = d.description;

			});
		},
		parseDocuments: function(str) {

			var strLower = str.toLowerCase();

			Object.keys(_docs).forEach(function(doc) {
				var start = strLower.indexOf(doc.toLowerCase());
				console.log(doc + ": " + start);
				if (start >= 0) {



					var trailingString = str.substring(start + doc.length);

					var name = doc;
					var insert = _docs[doc];

					const regex = /\s*[p][.]?\s*([0-9]+)/;
					const match = trailingString.match(regex);
					if (match && trailingString.indexOf(match[0]) === 0) {
						var page = match[1];
						name = doc + match[0];
						trailingString = trailingString.substring(match[0].length);
						insert=insert.replace('.pdf','.pdf#page='+page);
						if(insert.indexOf('target="_blank"')===-1){
							insert=insert.replace('<a ', '<a target="_blank" ');
						}

						insert=insert.replace('<a ', '<a download="'+doc+'" ');
					}

					
					
					insert = insert.replace('>link<', '>' + name + '<');
					insert = insert.replace('></a', '>' + name + '</a');
					
					var newString = str.substring(0, start) + insert + trailingString;
					str = newString;

				}
			});

			return str;
		}

	});

	var ContentFilter = new ContentFilterBase();

	ContentFilter.CombineSections = function(sections) {


		var text = (sections.name.trim()) +
			"\n\n" +
			(sections.layerKeywords.length == 0 ? '' : ('Layer Keywords: ' + sections.layerKeywords.join(', ') + "\n\n")) +
			(sections.source.trim()) +
			"\n\n" +
			"Personal Notes:\n\n" + (sections.notes.trim());
		return text;
	};


	ContentFilter.ParseSections = function(text) {


		if (typeof text !== "string") {
			console.trace();
			throw 'Not a string: ' + (typeof text);
		}

		var sections = {
			name: '',
			layerKeywords: [],
			source: '',
			notes: ''
		}


		var blocks = text.split("\n\n");

		sections.name = blocks[0].split('Layer Keywords:').shift().trim();


		if (text.indexOf('Layer Keywords:') > 0) {
			var keywords = text.split('Layer Keywords:').pop().split("\n\n").shift().split(',');

			sections.layerKeywords = keywords.map(function(k) {
				return k.trim();
			});
		}


		var remainingText = blocks.slice(1).join('\n\n');

		if (remainingText.indexOf('Layer Keywords:') >= 0) {
			remainingText = remainingText.split('Layer Keywords:').pop().split('\n\n').slice(1).join('\n\n');
		}

		sections.source = remainingText.split('Personal Notes:').shift().trim();


		if (text.indexOf('Personal Notes:') == -1) {
			return sections;
		}

		sections.notes = text.split('Personal Notes:').pop().trim();

		return sections;
	}


	ContentFilter.ParseLayerKeywordsSection = function(text) {
		return _ParseSection(text, 'layerKeywords');
	};

	ContentFilter.ReplaceLayerKeywordsSection = function(text, keywords) {

		if (typeof keywords == "string") {
			keyords = keywords.split(',');
		}

		var sections = ContentFilter.ParseSections(text);
		sections.layerKeywords = keyords.map(function(k) {
			return k.trim();
		});
		return ContentFilter.CombineSections(sections);


	};

	var _ParseSection = function(text, name) {

		return ContentFilter.ParseSections(text)[name];
	};

	var _ReplaceSection = function(text, replace, name) {

		if (typeof name !== "string") {
			console.trace();
			throw 'Not a string, field name:  ' + name + ': ' + (typeof name);
		}

		if (typeof text !== "string") {
			console.trace();
			throw 'Not a string, replace ' + name + ' - text: ' + (typeof text) + JSON.stringify(text);
		}

		if (typeof replace !== "string") {
			console.trace();
			throw 'Not a string, replace: ' + (typeof replace);
		}

		var sections = ContentFilter.ParseSections(text);
		sections[name] = replace;
		return ContentFilter.CombineSections(sections);

	};


	(['name', 'source', 'notes']).forEach(function(name) {

		var N = (name[0]).toUpperCase() + name.substring(1);


		//console.log(name);


		ContentFilter['Parse' + N + 'Section'] = function(text) {
			//console.log("_ParseSection," + name);
			return _ParseSection(text, name);
		};

		ContentFilter['Replace' + N + 'Section'] = function(text, replace) {
			//console.log("_ReplaceSection," + name);
			return _ReplaceSection(text, replace, name);
		};

		ContentFilter['Parse' + N + 'SectionHtml'] = function(text) {
			//console.log("_ParseSection," + name);
			return ContentFilter.parseDocuments(_ParseSection(text, name).split("\n").join("<br/>"));
		};

		ContentFilter['AddTextField' + N + 'Filter'] = function(textField) {

			_AddTextFieldNameFilter(textField, name);

		};


	});



	var _AddTextFieldNameFilter = function(textField, name) {


		var initialText = false

		textField.options.reverseOutputfilterOrder = true;
		textField.addInputFilter(function(text) {
			console.error('input filter')

			if (initialText === false) {
				initialText = text;
			}

			return _ParseSection(text, name);
		});
		textField.addOutputFilter(function(replace) {
			console.error('output filter');
			return _ReplaceSection(initialText, replace, name);
			//return initialText;

		});


	};



	return ContentFilter;

})();



if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
	module.exports = ContentFilter;
}