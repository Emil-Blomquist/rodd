var nav_flags = function (selected_flag)
{
	var flags, ul, active, left;

	ul = $('header nav .flags ul');
	flags = $('header nav .flags li');
	active = $('header nav .flags ul .active');

	if (selected_flag && selected_flag !== 'undefined')
	{
		// new active
		active = selected_flag;

		flags.removeClass('active');
		active.addClass('active');
	}

	left = -active.index()*flags.width();

	// right flag is being showed whan blured
	ul.css('marginLeft', left + 'px');

	// bind functions to scroll event
	if ( ! nav_flags.bound) {
		// prevent more bindings
		nav_flags.bound = true;

		// wont animate which flag is being selected at load
		setTimeout(function ()
		{
			ul.addClass('transition');
		},
		0);

		// what flag is being clicked
		flags.bind('click', function ()
		{
			nav_flags($(this));
		});
	}
}