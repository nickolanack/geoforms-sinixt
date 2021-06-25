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



	var ContentFilterBase = new Class_({



	});

	var ContentFilter = new ContentFilterBase();

	ContentFilter.CombineSections = function(sections) {


		var text = sections.name +
			"\n\n" +
			(sections.layerKeywords.length == 0 ? '' : ('Layer Keywords: ' + sections.layerKeywords.join(', ') + "\n\n")) +
			sections.source +
			"\n\n" +
			"Personal Notes:\n\n" + sections.notes;
		return text;
	};


	ContentFilter.ParseSections = function(text) {


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
			remainingText=remainingText.split('Layer Keywords:').pop().split('\n\n').slice(1).join('\n\n');
		}

		sections.source = remainingText.split('Personal Notes:').shift().trim();


		if (text.indexOf('Personal Notes:') == -1) {
			return '';
		}

		sections.notes = text.split('Personal Notes:').pop().trim();

		return sections;
	}


	ContentFilter.ParseLayerKeywordsSection = function(text) {
		
		return ContentFilter.ParseSections(text).layerKeywords;

	}

	ContentFilter.ReplaceLayerKeywordsSection = function(text, keywords) {

		if (typeof keywords == "string") {
			keyords = keywords.split(',');
		}

		var sections = ContentFilter.ParseSections(text);
		sections.layerKeywords = keyords.map(function(k) {
			return k.trim();
		});
		return ContentFilter.CombineSections(sections);


	}

	ContentFilter.ParseNameSection = function(text) {
		return ContentFilter.ParseSections(text).name;
	}

	ContentFilter.ReplaceNameSection = function(text, replace) {

		var sections = ContentFilter.ParseSections(text);
		sections.name = replace.trim();
		return ContentFilter.CombineSections(sections);


	}

	ContentFilter.ParseNameSectionHtml = function(text) {
		return ContentFilter.ParseNameSection(text).split("\n").join("<br/>");
	}


	ContentFilter.ParseSourceSection = function(text) {
		return ContentFilter.ParseSections(text).source;
	}

	ContentFilter.ReplaceSourceSection = function(text, replace) {

		var sections = ContentFilter.ParseSections(text);
		sections.source = replace.trim();
		return ContentFilter.CombineSections(sections);

	}



	ContentFilter.ParseSourceSectionHtml = function(text) {
		return ContentFilter.ParseSourceSection(text).split("\n").join("<br/>");
	}

	ContentFilter.ParseNotesSection = function(text) {
		return ContentFilter.ParseSections(text).notes;
	}

	ContentFilter.ReplaceNotesSection = function(text, replace) {

		var sections = ContentFilter.ParseSections(text);
		sections.notes = replace.trim();
		return ContentFilter.CombineSections(sections);

	}

	ContentFilter.ParseNotesSectionHtml = function(text) {
		return ContentFilter.ParseNotesSection(text).split("\n").join("<br/>");
	}



	ContentFilter.AddTextFieldNameFilter = function(textField) {


		var initialText = false

		textField.addInputFilter(function(text) {
			console.error('input filter')

			if (initialText === false) {
				initialText = text;
			}

			return ContentFilter.ParseNameSection(text);
		});
		textField.addOutputFilter(function(text) {
			console.error('output filter');
			return ContentFilter.ReplaceNameSection(initialText, text);
			//return initialText;

		});


	}

	ContentFilter.AddTextFieldSourceFilter = function(textField) {

		var initialText = false

		textField.addInputFilter(function(text) {
			console.error('input filter')

			if (initialText === false) {
				initialText = text;
			}

			return ContentFilter.ParseSourceSection(text);

		});
		textField.addOutputFilter(function(text) {
			console.error('output filter');
			console.log(ContentFilter.ReplaceSourceSection(initialText, text));
			return initialText;

		});

	}
	ContentFilter.AddTextFieldNotesFilter = function(textField) {


		var initialText = false

		textField.addInputFilter(function(text) {
			console.error('input filter')

			if (initialText === false) {
				initialText = text;
			}

			return ContentFilter.ParseNotesSection(text);

		});
		textField.addOutputFilter(function(text) {

			console.error('output filter');
			console.log(ContentFilter.ReplaceNotesSection(initialText, text));
			return initialText;

		});

	}



	return ContentFilter;

})();



if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
	module.exports = ContentFilter;
}