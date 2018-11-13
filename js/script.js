//Snippets
let snippets = document.querySelectorAll('.container');

[].forEach.call(snippets, function (snippet) {
	snippet.insertAdjacentHTML('beforebegin',
		`
		<button class="btnCopy" id="#btn-${snippet.firstChild.nextSibling.id}" data-clipboard-target="#${snippet.firstChild.nextSibling.id}">
			<img class="clippy" width="13" src="images/clippy.svg" alt="Copy to clipboard">
		</button>
	`);
	snippet.addEventListener('mouseover', showCopyButton.bind(snippet.firstChild.nextSibling.id));
	snippet.addEventListener('mouseleave', hideCopyButton.bind(snippet.firstChild.nextSibling.id));

	document.getElementById(`#btn-${snippet.firstChild.nextSibling.id}`).addEventListener('mouseover', showCopyButton.bind(snippet.firstChild.nextSibling.id));
});

function showCopyButton() {
	document.getElementById(`#btn-${this}`).style.display = 'block';
}

function hideCopyButton() {
	document.getElementById(`#btn-${this}`).style.display = 'none';
}

//Popovers
document.addEventListener('DOMContentLoaded', () => {
	$('.question a').popover();
});

// Tooltips
$('button').tooltip({
	trigger: 'click',
	placement: 'bottom'
});

function setTooltip(btn, message) {
	$(btn).tooltip('hide')
		.attr('data-original-title', message)
		.tooltip('show');
}

function hideTooltip(btn) {
	setTimeout(function () {
		$(btn).tooltip('hide');
	}, 1000);
}

// Clipboard
let btns = document.querySelectorAll('button');
let clipboard = new ClipboardJS(btns);
clipboard.on('success', function (e) {
	setTooltip(e.trigger, 'Copied!');
	hideTooltip(e.trigger);
});

clipboard.on('error', function (e) {
	setTooltip(e.trigger, 'Failed!');
	hideTooltip(e.trigger);
});