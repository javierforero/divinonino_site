var width = null;

var checkWidth =  function () {
  width = $(window).width();
  if(width > 400) {

     $('.main').backstretch("images/band.jpg");
  } else {
     $('.main').backstretch("images/mobile.jpg");
  }

  if(width < 629) {
    $("#ham-image").css("display", "block");
    $(".ham-menu").css("display", "none");
    $("#cross").css("display", "none");
    $("#ham-image").click(function(){
       $("#ham-image").css("display", "none");
       $("#cross").css("display", "block");
       $(".ham-menu").css("display", "block");
    });
    $("#cross").click(function(){
       $("#cross").css("display", "none");
       $("#ham-image").css("display", "block");
       $(".ham-menu").css("display", "none");
    });
  } else {
    $("#cross").css("display", "none");
    $("#ham-image").css("display", "none");
    $(".ham-menu").css("display", "block");
  }
}

$(document).ready(function(){
    animateDiv('#a1');
    animateDiv('#a2');
    animateDiv('#a3');
    animateDiv('#a4');
    animateDiv('#a5');
    checkWidth();
    $(window).on("resize", checkWidth);

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

function animateDiv(classid) {
    var newq =  new_pos(classid);
    var oldq = $(classid).offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $(classid).animate({ top: newq[0], left: newq[1], bottom: newq[2], right: newq[3] }, speed, function(){
      animateDiv(classid);
    });

}

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = .1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;
}
