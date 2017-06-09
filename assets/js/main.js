var $myGroup = $('#capabilitiesGroup');
$myGroup.on('click','.toggleButton', function() {
    $myGroup.find('.collapse.show').collapse('toggle');
});

$('a').smoothScroll();

$('body').scrollspy({ target: '#mainNav' })