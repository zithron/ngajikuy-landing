(function($) {
    $(function() {

        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        $('.collapsible').collapsible();
        $('select').material_select();
        // $('.modal').modal();


        var url = $("#teaser").attr('src');

        $("#teaser").attr('src', '');

        $('.modal').modal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
                $("#teaser").attr('src', url);
            },
            complete: function() { // Callback for Modal close
                $("#teaser").attr('src', '');
            }
        });

        $('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false
});


    }); // end of document ready
})(jQuery); // end of jQuery name space

