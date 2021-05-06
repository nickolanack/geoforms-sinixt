var ContentFilter = (function() {


	var ContentFilterBase = new Class({



	});

	var ContentFilter = new ContentFilterBase();


	ContentFilter.ParseNameSection = function(text) {
		return text.split("\n\n").shift().split('Layer Keywords:').shift();
	}

	ContentFilter.ReplaceNameSection=function(text, replace){

		var chunks = text.split("\n\n");
		var section = chunks[0].split('Layer Keywords:')
		var parts=section[0].split("<");
		parts[0]=replace;
		section[0] = parts.join("<");
		chunks[0] = section.join('Layer Keywords:');
		return chunks.join("\n\n");

	}

	ContentFilter.ParseNameSectionHtml = function(text) {
		return ContentFilter.ParseNameSection(text).split("\n").join("<br/>");
	}


	ContentFilter.ParseSourceSection = function(text) {
		var text = text.split("\n\n").slice(1).join('\n\n');

		if (text.indexOf('Layer Keywords:') >= 0) {
			text.split('Layer Keywords:').pop().split('\n\n').slice(1).join('\n\n');
		}

		return text.split('Personal Notes:').shift();
	}

	ContentFilter.ReplaceSourceSection=function(text, replace){

		

	}



	ContentFilter.ParseSourceSectionHtml = function(text) {
		return ContentFilter.ParseSourceSection(text).split("\n").join("<br/>");
	}

	ContentFilter.ParseNotesSection = function(text) {
		if (text.indexOf('Personal Notes:') == -1) {
			return '';
		}

		return text.split('Personal Notes:').pop();
	}

	ContentFilter.ReplaceNotesSection=function(text, replace){

		

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
			console.log(ContentFilter.ReplaceNameSection(initialText, text));
			return initialText;

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