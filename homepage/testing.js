$(function() {

    $('area').each(function(){
        var txt=$(this).data('name');
        var coor=$(this).attr('coords');
        var coorA=coor.split(',');
        var left=coorA[0];
        var top=coorA[1];

        var $span=$('<span class="globe_home">'+txt+'</span>');
        $span.css({top: top+'px', left: left+'px', position:'absolute'});
        $span.appendTo('#globe_home');
    })

})
