$(function(){

    $(window).load(function(){




    })

$arr = ['a','b','c','d'];

     $sounds = [];

    $(".btn").click(function(){

        if(   $sounds[$(this).data("number")] == null || $sounds[$(this).data("number")] == ""){

         $sounds[''+$(this).data("number") +''] = document.createElement('audio');
          $sounds[$(this).data("number")].setAttribute('src', 'PunchyKick_JJ.wav');
       }

        $(this).toggleClass("selected");
         $(this).toggleClass("not-selected");

        if($(this).hasClass("selected")){
        //  console.log($(this).data("number"));
            $sounds[$(this).data("number")].currentTime = 0;

         $sounds[$(this).data("number")].play();

       setInterval(function(){
           $sounds[$(this).data("number")].play();
       },$(this).data("trigger"));
//

            console.log("Sound id:" + $(this).data("number"));

            console.log("Size Of Sound Array:" + $sounds.length);
        }else{
            $sounds[$(this).data("number")].currentTime = 0;
             console.log("current time: " +  $sounds[$(this).data("number")].currentTime);
            $sounds[$(this).data("number")].pause();
        }

    });





})
