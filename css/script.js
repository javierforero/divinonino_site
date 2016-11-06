$(function(){

        var checkWidth =  function () {
            width = $(window).width();
            if(width > 400) {
              $('.main').backstretch("images/band.jpg");
            }
            else {
              $('.main').backstretch("images/mobile.jpg");
            }
        }
      checkWidth();
      $(window).resize(checkWidth);



			});
$(document).ready(function(){
    animateDiv('#a1');
    animateDiv('#a2');
    animateDiv('#a3');
    animateDiv('#a4');
    animateDiv('#a5');
    $('#cross').hide();

   $( "#ham" ).click(function() {
     $( ".hamm" ).slideToggle( 300, function() {
       $( "#ham" ).hide();
       $( '#cross' ).show();
    });
   });

  $( '#cross' ).click(function() {
    $( '.hamm' ).slideToggle( 300, function() {
    $( '#cross' ).hide();
    $( '#ham' ).show();
  });
});
});
var new_pos = function makeNewPosition(classid2){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - $(classid2).height();
    var w = $(window).width() - $(classid2).width();

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    var nh2 = Math.floor(Math.random() * h);
    var nw2 = Math.floor(Math.random() * w);

    return [nh, nw, nh2, nw2];

};

function animateDiv(classid){
    var newq =  new_pos(classid);
    var oldq = $(classid).offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $(classid).animate({ top: newq[0], left: newq[1], bottom: newq[2], right: newq[3] }, speed, function(){
      animateDiv(classid);
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = .1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;
}
