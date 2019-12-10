
$( document ).ready(function() {


var b = function($b,speed){


    $b.animate({
        "left": "50%"
    }, speed);
};

$(function(){
    b($("#b"), 5000);
});



var imgs = document.querySelectorAll('.vid1');

for (var i = 0; i < imgs.length; i++) {
  imgs[i].onclick = toggleAnimation;
  imgs[i].style.webkitAnimationPlayState = 'running';
}

function toggleAnimation() {
  var style;
  for (var i = 0; i < imgs.length; i++) {
    style = imgs[i].style;
    if (style.webkitAnimationPlayState === 'running') {
      style.webkitAnimationPlayState = 'paused';
      document.body.className = 'paused';
    } else {
      style.webkitAnimationPlayState = 'running';
      document.body.className = '';
    }
  }
}
.vid1 {
  position: absolute;
  opacity: 0;
}

#vid1{
  -webkit-animation: vid1 4s infinite linear;
}

#pic2 {
  -webkit-animation: pic2 4s infinite linear;
}

@-webkit-keyframes vid1 {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  45% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes pic2 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  55% {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.paused {
  background-color: #ddd;
}
<img id="vid1" class="vid1" src="uber.mp4" type="video/mp4" >">
<img id="pic2" class="pic" src="http://placehold.it/200x200/ff00ff/ffffff">

$('#button_id').on('click', function(){
$('#element_want_to_target').addClass('.animation_class');});


<script src= "https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js">
</script>
});
