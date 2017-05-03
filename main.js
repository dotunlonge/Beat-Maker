$(function(){
//
//    $(window).load(function(){
//
//
//
//
//    })
//
//$arr = ['a','b','c','d'];
//
//     $sounds = [];
//
//    $(".btn").click(function(){
//
//        if(   $sounds[$(this).data("number")] == null || $sounds[$(this).data("number")] == ""){
//
//         $sounds[''+$(this).data("number") +''] = document.createElement('audio');
//          $sounds[$(this).data("number")].setAttribute('src', 'PunchyKick_JJ.wav');
//       }
//
//        $(this).toggleClass("selected");
//         $(this).toggleClass("not-selected");
//
//        if($(this).hasClass("selected")){
//        //  console.log($(this).data("number"));
//          
//            
//            $curr = $(this).data("number");
//            $currClass =  $(this).hasClass("selected");
//
//       setInterval(function(){
//            if($currClass){
//            console.log($curr);
//           $sounds[$curr].play();
//                
//       }else{
//           $sounds[$curr].pause();
//       }
//       },$(this).data("trigger"));
////
//       console.log("Sound id:" + $(this).data("number"));
//
//            console.log("Size Of Sound Array:" + $sounds.length);
//        }else{
//            $sounds[$(this).data("number")].currentTime = 0;
//             console.log("current time: " +  $sounds[$(this).data("number")].currentTime);
//            $sounds[$(this).data("number")].pause();
//        }
//
//    });
//
//
//
//
//
    
       $sound1 = document.createElement('audio');
         $sound1.setAttribute('src', 'PunchyKick_JJ.wav');

          
       $sound2 = document.createElement('audio');
         $sound2.setAttribute('src', 'PunchyKick_JJ.wav');
    
       $sound3 = document.createElement('audio');
         $sound3.setAttribute('src', 'PunchyKick_JJ.wav');
    
       $sound4 = document.createElement('audio');
         $sound4.setAttribute('src', 'PunchyKick_JJ.wav');
    //60bpm = 1 beat per sec.
    //500 = 120bpm.
    function bpm_calculator($bpm){
        return 60 / $bpm;
    }
   $tempo = bpm_calculator(90);
    
      setInterval(function(){
          $sound1.currentTime = 0;
           $sound2.currentTime = 0;
           $sound3.currentTime = 0;
           $sound4.currentTime = 0;
          
             $sound2.pause();
             $sound3.pause();
             $sound4.pause();
          
          
           $sound1.play();
         
       },$tempo * 1000);
        
       
      setInterval(function(){
           $sound2.currentTime = 0;
           $sound1.currentTime = 0;
           $sound3.currentTime = 0;
           $sound4.currentTime = 0;
          
            $sound1.pause();
             $sound3.pause();
             $sound4.pause();
          
            
           $sound2.play();
           
       },$tempo * 2000);
        
       
      setInterval(function(){
          
          
             $sound3.currentTime = 0;
           $sound2.currentTime = 0;
           $sound1.currentTime = 0;
           $sound4.currentTime = 0;
          
           $sound1.pause();
           $sound2.pause();
           $sound4.pause();
          
           $sound3.play();
           },$tempo * 3000);
        
       
      setInterval(function(){
               $sound4.currentTime = 0;
           $sound2.currentTime = 0;
           $sound3.currentTime = 0;
           $sound1.currentTime = 0;
          
          $sound1.pause();
              $sound2.pause();
              $sound3.pause();
          
            
           $sound4.play();
           },$tempo * 4000);
        
    
})
