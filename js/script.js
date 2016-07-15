$(document).ready(function () {
	$('.question a').popover();

	$('#myTabs a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})
});

