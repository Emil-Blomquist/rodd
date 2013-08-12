var fix_nav = function () {	
	var header_holder, header, offset_top, scroll_top;

	header_holder = $('.header-holder');
	header = $('.header-holder header');
	scroll_top = $(window).scrollTop();

	// bind functions to scroll event
	if ( ! fix_nav.bound) {
		// prevent more bindings
		fix_nav.bound = true;

		$(window).bind('scroll', function ()
		{
			fix_nav();
		});
	}

	// get diff
	if ( ! fix_nav.diff)
	{
		fix_nav.diff = header.offset().top - header_holder.offset().top;
	}

	offset_top = header_holder.offset().top + fix_nav.diff;

	if ( ! header_holder.is('.fixed') && scroll_top > offset_top)
	{
		header_holder.addClass('fixed');
	}
	else if (header_holder.is('.fixed') && scroll_top < offset_top)
	{
		header_holder.removeClass('fixed');
	}
}