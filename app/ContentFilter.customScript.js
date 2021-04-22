var ContentFilter = (function() {


	var ContentFilterBase = new Class({



	});

	var ContentFilter = new ContentFilterBase();


	ContentFilter.ParseNameSection = function(text) {
		return text.split("\n\n").shift().split('Layer Keywords:').shift();
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

	ContentFilter.ParseSourceSectionHtml = function(text) {
		return ContentFilter.ParseSourceSection(text).split("\n").join("<br/>");
	}

	ContentFilter.ParseNotesSection = function(text) {
		if (text.indexOf('Personal Notes:') == -1) {
			return '';
		}

		return text.split('Personal Notes:').pop();
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
			console.error('input filter');
			var chunks = initialText.split("\n\n");
			var section = chunks.shift().split('Layer Keywords:')
			section[0] = text;
			chunks[0] = section.join('Layer Keywords:');
			var formatted = chunks.join("\n\n");
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


			return initialText;

		});

	}



	return ContentFilter;

})();