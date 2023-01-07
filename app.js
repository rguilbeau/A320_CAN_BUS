
$(document).ready(function() {
    var linkMenuCurrentPage = $('[data-id=' + CURRENT_PAGE +']');
    linkMenuCurrentPage.removeClass("link-dark");
    linkMenuCurrentPage.addClass('fw-bolder');
    
    $('#menu-collapse-' + CURRENT_CATEGORY).toggleClass('show');
    $('#menu-collapse-button-'+CURRENT_CATEGORY).attr("aria-expanded","true");
});