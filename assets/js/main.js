$(function(){

      //60bpm = 1 beat per sec.
    //500 = 120bpm.
    function bpm_calculator($bpm){
        return 60 / $bpm;
    }

var $tempo = bpm_calculator($('.tempo').val()) ;

$('.tempo').change(function(){
        $tempo = bpm_calculator($('.tempo').val());
 });


      var $Kick = document.createElement('audio');
       $Kick.setAttribute('src', 'sounds/kicks/PunchyKick_JJ.wav');

      var $Snare = document.createElement('audio');
       $Snare.setAttribute('src', 'sounds/snares/VerbSnClap_JJ.wav');

       var $hat = document.createElement('audio');
       $hat.setAttribute('src', 'sounds/hats/DirtyHihat_JJ.wav');

       var $perc =  document.createElement('audio')
       $perc.setAttribute('src', 'sounds/percs/LeBongoB_JJ.wav');

    $(".kit").change(function(){

          if( $(".kit").val() == 2){
                 $Kick.setAttribute('src', 'sounds/kicks/afrKick.wav');
                 $Snare.setAttribute('src', 'sounds/snares/afrSnare.wav');
                 $hat.setAttribute('src', 'sounds/hats/afrHat.wav');
                 $perc.setAttribute('src', 'sounds/percs/afrPerc.wav');
              console.log("african kit selected");
            }

    })


    function entire_kick_function(){

         setTimeout( function(){
            if( $('.button11').data().val == "on" ){
            $Kick.currentTime = 0;
            $Kick.play();
             console.log("1");
            }
     }, $tempo * 1000 * 1/4);

         setTimeout( function(){
        if( $('.button21').data().val == "on" ){
            $Kick.currentTime = 0;
            $Kick.play();
             console.log("2");
            }
     }, $tempo * 1000 * 2/4);

      setTimeout( function(){

         if( $('.button31').data().val == "on"){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("3");
         }
     }, $tempo * 1000 * 3/4);

    setTimeout( function(){
         if($('.button41').data().val == "on"){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("4");
         }
     }, $tempo * 1000 * 4/4);

     setTimeout( function(){
         if( $('.button51').data().val == "on"){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("5");
         }
     }, $tempo * 1000 * 5/4);

       setTimeout( function(){
         if( $('.button61').data().val == "on"){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("6");
         }
     }, $tempo * 1000 * 6/4);

        setTimeout( function(){
         if( $('.button71').data().val == "on"){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("7");
         }
     }, $tempo * 1000 * 7/4);

       setTimeout( function(){
         if( $('.button81').data().val == "on" ){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("8");
         }
     }, $tempo * 1000 * 8/4);

          setTimeout( function(){
         if( $('.button91').data().val == "on"){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("9");
         }
     }, $tempo * 1000 * 9/4);

         setTimeout( function(){
         if($('.button101').data().val == "on" ){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("10");
         }
     }, $tempo * 1000 * 10/4);

         setTimeout( function(){
         if( $('.button111').data().val == "on" ){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("11");
         }
     }, $tempo * 1000 * 11/4);

         setTimeout( function(){
         if( $('.button121').data().val == "on" ){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("12");
         }
     }, $tempo * 1000 * 12/4);

        setTimeout( function(){
         if( $('.button131').data().val == "on" ){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("13");
         }
     }, $tempo * 1000 * 13/4);

          $tim14 =  setTimeout( function(){
        if( $('.button141').data().val == "on" ){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("14");
         }
     }, $tempo * 1000 * 14/4);

        setTimeout( function(){
      if( $('.button151').data().val == "on"  ){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("15");
         }
     }, $tempo * 1000 * 15/4);

        setTimeout( function(){
      if($('.button161').data().val == "on" ){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("16");
         }
     }, $tempo * 1000 * 16/4);

        $kick_looper = setInterval(function(){

             setTimeout( function(){
            if( $('.button11').data().val == "on" ){
            $Kick.currentTime = 0;
            $Kick.play();
             console.log("1");
            }
     }, $tempo * 1000 * 1/4);

         setTimeout( function(){
        if( $('.button21').data().val == "on" ){
            $Kick.currentTime = 0;
            $Kick.play();
             console.log("2");
            }
     }, $tempo * 1000 * 2/4);

      setTimeout( function(){

         if( $('.button31').data().val == "on"){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("3");
         }
     }, $tempo * 1000 * 3/4);

    setTimeout( function(){
         if($('.button41').data().val == "on"){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("4");
         }
     }, $tempo * 1000 * 4/4);

     setTimeout( function(){
         if( $('.button51').data().val == "on"){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("5");
         }
     }, $tempo * 1000 * 5/4);

       setTimeout( function(){
         if( $('.button61').data().val == "on"){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("6");
         }
     }, $tempo * 1000 * 6/4);

        setTimeout( function(){
         if( $('.button71').data().val == "on"){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("7");
         }
     }, $tempo * 1000 * 7/4);

       setTimeout( function(){
         if( $('.button81').data().val == "on" ){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("8");
         }
     }, $tempo * 1000 * 8/4);

          setTimeout( function(){
         if( $('.button91').data().val == "on"){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("9");
         }
     }, $tempo * 1000 * 9/4);

         setTimeout( function(){
         if($('.button101').data().val == "on" ){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("10");
         }
     }, $tempo * 1000 * 10/4);

         setTimeout( function(){
         if( $('.button111').data().val == "on" ){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("11");
         }
     }, $tempo * 1000 * 11/4);

         setTimeout( function(){
         if( $('.button121').data().val == "on" ){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("12");
         }
     }, $tempo * 1000 * 12/4);

        setTimeout( function(){
         if( $('.button131').data().val == "on" ){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("13");
         }
     }, $tempo * 1000 * 13/4);

          $tim14 =  setTimeout( function(){
        if( $('.button141').data().val == "on" ){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("14");
         }
     }, $tempo * 1000 * 14/4);

        setTimeout( function(){
      if( $('.button151').data().val == "on"  ){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("15");
         }
     }, $tempo * 1000 * 15/4);

        setTimeout( function(){
      if($('.button161').data().val == "on" ){
            $Kick.currentTime = 0;
            $Kick.play();

             console.log("16");
         }
     }, $tempo * 1000 * 16/4);

    }, $tempo * 1000 * 16/4 )

   }
    function entire_snare_function(){

         setTimeout( function(){
            if( $('.button13').data().val == "on" ){
            $Snare.currentTime = 0;
            $Snare.play();
             console.log("1-sn");
            }
     }, $tempo * 1000 * 1/4);

          setTimeout( function(){
            if($('.button23').data().val == "on" ){
            $Snare.currentTime = 0;
            $Snare.play();
             console.log("2-sn");
            }
     }, $tempo * 1000 * 2/4);

      setTimeout( function(){

         if($('.button33').data().val == "on"){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("3-sn");
         }
     }, $tempo * 1000 * 3/4);

         setTimeout( function(){
         if($('.button43').data().val == "on"){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("4-sn");
         }
     }, $tempo * 1000 * 4/4);

        setTimeout( function(){
         if( $('.button53').data().val == "on"){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("5-sn");
         }
     }, $tempo * 1000 * 5/4);

       setTimeout( function(){
         if($('.button63').data().val == "on"){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("6-sn");
         }
     }, $tempo * 1000 * 6/4);

       setTimeout( function(){
         if($('.button73').data().val == "on"){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("7-sn");
         }
     }, $tempo * 1000 * 7/4);

          setTimeout( function(){
         if($('.button83').data().val == "on"){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("8-sn");
         }
     }, $tempo * 1000 * 8/4);

          setTimeout( function(){
         if($('.button93').data().val == "on"){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("9-sn");
         }
     }, $tempo * 1000 * 9/4);

        setTimeout( function(){
         if($('.button103').data().val == "on"){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("10-sn");
         }
     }, $tempo * 1000 * 10/4);


        setTimeout( function(){
         if($('.button113').data().val == "on"  ){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("11-sn");
         }
     }, $tempo * 1000 * 11/4);

          $tim22 =  setTimeout( function(){
         if($('.button123').data().val == "on" ){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("12-sn");
         }
     }, $tempo * 1000 * 12/4);

          $tim23 =  setTimeout( function(){
         if($('.button133').data().val == "on"){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("13-sn");
         }
     }, $tempo * 1000 * 13/4);

          $tim24 =  setTimeout( function(){
        if($('.button143').data().val == "on"){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("14-sn");
         }
     }, $tempo * 1000 * 14/4);

          $tim25 =  setTimeout( function(){
      if($('.button153').data().val == "on"  ){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("15-sn");
         }

     }, $tempo * 1000 * 15/4);

          $tim26 =  setTimeout( function(){
      if($('.button163').data().val == "on"){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("16-sn");
         }
     }, $tempo * 1000 * 16/4);


        $snare_looper = setInterval(function(){

            $tim11 = setTimeout( function(){
            if( $('.button13').data().val == "on" ){
            $Snare.currentTime = 0;
            $Snare.play();
             console.log("1-sn");
            }
     }, $tempo * 1000 * 1/4);

           $tim12 =  setTimeout( function(){
            if($('.button23').data().val == "on" ){
            $Snare.currentTime = 0;
            $Snare.play();
             console.log("2-sn");
            }
     }, $tempo * 1000 * 2/4);

          $tim13 =  setTimeout( function(){

         if($('.button33').data().val == "on"){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("3-sn");
         }
     }, $tempo * 1000 * 3/4);

          $tim14 =  setTimeout( function(){
         if($('.button43').data().val == "on"){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("4-sn");
         }
     }, $tempo * 1000 * 4/4);

          $tim15 =  setTimeout( function(){
         if( $('.button53').data().val == "on"){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("5-sn");
         }
     }, $tempo * 1000 * 5/4);

          $tim16 =  setTimeout( function(){
         if($('.button63').data().val == "on"){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("6-sn");
         }
     }, $tempo * 1000 * 6/4);

          $tim17 =  setTimeout( function(){
         if($('.button73').data().val == "on"){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("7-sn");
         }
     }, $tempo * 1000 * 7/4);

          $tim18 =  setTimeout( function(){
         if($('.button83').data().val == "on"){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("8-sn");
         }
     }, $tempo * 1000 * 8/4);

          $tim19 =  setTimeout( function(){
         if($('.button93').data().val == "on"){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("9-sn");
         }
     }, $tempo * 1000 * 9/4);

          $tim20 =  setTimeout( function(){
         if($('.button103').data().val == "on"){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("10-sn");
         }
     }, $tempo * 1000 * 10/4);

          $tim21 =  setTimeout( function(){
         if($('.button113').data().val == "on"  ){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("11-sn");
         }
     }, $tempo * 1000 * 11/4);

          $tim22 =  setTimeout( function(){
         if($('.button123').data().val == "on" ){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("12-sn");
         }
     }, $tempo * 1000 * 12/4);

          $tim23 =  setTimeout( function(){
         if($('.button133').data().val == "on"){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("13-sn");
         }
     }, $tempo * 1000 * 13/4);

          $tim24 =  setTimeout( function(){
        if($('.button143').data().val == "on"){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("14-sn");
         }
     }, $tempo * 1000 * 14/4);

          $tim25 =  setTimeout( function(){
      if($('.button153').data().val == "on"  ){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("15-sn");
         }

     }, $tempo * 1000 * 15/4);

        $tim26 =  setTimeout( function(){
      if($('.button163').data().val == "on"){
            $Snare.currentTime = 0;
            $Snare.play();

             console.log("16-sn");
         }
     }, $tempo * 1000 * 16/4);

    },  $tempo * 1000 * 16/4);

    }
    function entire_perc_function(){

          $tim14 =  setTimeout( function(){
            if( $('.button14').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();
            }
     }, $tempo * 1000 * 1/4);

          $tim24 =  setTimeout( function(){
            if( $('.button24').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();

            }
     }, $tempo * 1000 * 2/4);

          $tim34 =  setTimeout( function(){

         if($('.button34').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();


         }
     }, $tempo * 1000 * 3/4);

          $tim4 =  setTimeout( function(){
         if( $('.button44').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();


         }
     }, $tempo * 1000 * 4/4);

          $tim5 =  setTimeout( function(){
         if($('.button54').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();


         }
     }, $tempo * 1000 * 5/4);

          $tim6 =  setTimeout( function(){
         if($('.button64').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();


         }
     }, $tempo * 1000 * 6/4);

          $tim7 =  setTimeout( function(){
         if( $('.button74').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();


         }
     }, $tempo * 1000 * 7/4);

          $tim8 =  setTimeout( function(){
         if($('.button84').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();


         }
     }, $tempo * 1000 * 8/4);

          $tim9 =  setTimeout( function(){
         if( $('.button94').data().val == "on"){
            $perc.currentTime = 0;
            $perc.play();

         }
     }, $tempo * 1000 * 9/4);

          $tim10 =  setTimeout( function(){
         if($('.button104').data().val == "on"   ){
            $perc.currentTime = 0;
            $perc.play();


         }
     }, $tempo * 1000 * 10/4);

          $tim11 =  setTimeout( function(){
         if($('.button114').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();


         }
     }, $tempo * 1000 * 11/4);

          $tim12 =  setTimeout( function(){
         if( $('.button124').data().val == "on"){
            $perc.currentTime = 0;
            $perc.play();

         }
     }, $tempo * 1000 * 12/4);

          $tim13 =  setTimeout( function(){
         if( $('.button134').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();

         }
     }, $tempo * 1000 * 13/4);

          $tim14 =  setTimeout( function(){
        if($('.button144').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();


         }
     }, $tempo * 1000 * 14/4);

          $tim15 =  setTimeout( function(){
      if( $('.button154').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();

         }
     }, $tempo * 1000 * 15/4);

          $tim16 =  setTimeout( function(){
      if( $('.button164').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();

         }
     }, $tempo * 1000 * 16/4);

        $perc_looper = setInterval(function(){
             $tim1 =  setTimeout( function(){
            if( $('.button14').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();

            }
     }, $tempo * 1000 * 1/4);

          $tim2 =  setTimeout( function(){
            if( $('.button24').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();

            }
     }, $tempo * 1000 * 2/4);

          $tim3 =  setTimeout( function(){

         if($('.button34').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();


         }
     }, $tempo * 1000 * 3/4);

          $tim4 =  setTimeout( function(){
         if( $('.button44').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();


         }
     }, $tempo * 1000 * 4/4);

          $tim5 =  setTimeout( function(){
         if($('.button54').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();


         }
     }, $tempo * 1000 * 5/4);

          $tim6 =  setTimeout( function(){
         if($('.button64').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();


         }
     }, $tempo * 1000 * 6/4);

          $tim7 =  setTimeout( function(){
         if( $('.button74').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();


         }
     }, $tempo * 1000 * 7/4);

          $tim8 =  setTimeout( function(){
         if($('.button84').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();


         }
     }, $tempo * 1000 * 8/4);

          $tim9 =  setTimeout( function(){
         if( $('.button94').data().val == "on"){
            $perc.currentTime = 0;
            $perc.play();

         }
     }, $tempo * 1000 * 9/4);

          $tim10 =  setTimeout( function(){
         if($('.button104').data().val == "on"   ){
            $perc.currentTime = 0;
            $perc.play();


         }
     }, $tempo * 1000 * 10/4);

          $tim11 =  setTimeout( function(){
         if($('.button114').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();


         }
     }, $tempo * 1000 * 11/4);

          $tim12 =  setTimeout( function(){
         if( $('.button124').data().val == "on"){
            $perc.currentTime = 0;
            $perc.play();

         }
     }, $tempo * 1000 * 12/4);

          $tim13 =  setTimeout( function(){
         if( $('.button134').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();

         }
     }, $tempo * 1000 * 13/4);

          $tim14 =  setTimeout( function(){
        if($('.button144').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();


         }
     }, $tempo * 1000 * 14/4);

          $tim15 =  setTimeout( function(){
      if( $('.button154').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();

         }
     }, $tempo * 1000 * 15/4);

          $tim16 =  setTimeout( function(){
      if( $('.button164').data().val == "on" ){
            $perc.currentTime = 0;
            $perc.play();

         }
     }, $tempo * 1000 * 16/4);

    }, $tempo * 1000 * 16/4 )

   }
    function entire_hat_function(){

          $tim14 =  setTimeout( function(){
            if( $('.button12').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();
            }
     }, $tempo * 1000 * 1/4);

          $tim24 =  setTimeout( function(){
            if( $('.button22').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();

            }
     }, $tempo * 1000 * 2/4);

          $tim34 =  setTimeout( function(){

         if($('.button32').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();


         }
     }, $tempo * 1000 * 3/4);

          $tim4 =  setTimeout( function(){
         if( $('.button42').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();


         }
     }, $tempo * 1000 * 4/4);

          $tim5 =  setTimeout( function(){
         if($('.button52').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();


         }
     }, $tempo * 1000 * 5/4);

          $tim6 =  setTimeout( function(){
         if($('.button62').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();


         }
     }, $tempo * 1000 * 6/4);

          $tim7 =  setTimeout( function(){
         if( $('.button72').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();


         }
     }, $tempo * 1000 * 7/4);

          $tim8 =  setTimeout( function(){
         if($('.button82').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();


         }
     }, $tempo * 1000 * 8/4);

          $tim9 =  setTimeout( function(){
         if( $('.button92').data().val == "on"){
            $hat.currentTime = 0;
            $hat.play();

         }
     }, $tempo * 1000 * 9/4);

          $tim10 =  setTimeout( function(){
         if($('.button102').data().val == "on"   ){
            $hat.currentTime = 0;
            $hat.play();


         }
     }, $tempo * 1000 * 10/4);

          $tim11 =  setTimeout( function(){
         if($('.button112').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();


         }
     }, $tempo * 1000 * 11/4);

          $tim12 =  setTimeout( function(){
         if( $('.button122').data().val == "on"){
            $hat.currentTime = 0;
            $hat.play();

         }
     }, $tempo * 1000 * 12/4);

          $tim13 =  setTimeout( function(){
         if( $('.button132').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();

         }
     }, $tempo * 1000 * 13/4);

          $tim14 =  setTimeout( function(){
        if($('.button142').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();


         }
     }, $tempo * 1000 * 14/4);

          $tim15 =  setTimeout( function(){
      if( $('.button152').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();

         }
     }, $tempo * 1000 * 15/4);

          $tim16 =  setTimeout( function(){
      if( $('.button162').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();

         }
     }, $tempo * 1000 * 16/4);

        $hat_looper = setInterval(function(){
             $tim1 =  setTimeout( function(){
            if( $('.button12').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();

            }
     }, $tempo * 1000 * 1/4);

          $tim2 =  setTimeout( function(){
            if( $('.button22').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();

            }
     }, $tempo * 1000 * 2/4);

          $tim3 =  setTimeout( function(){

         if($('.button32').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();


         }
     }, $tempo * 1000 * 3/4);

          $tim4 =  setTimeout( function(){
         if( $('.button42').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();


         }
     }, $tempo * 1000 * 4/4);

          $tim5 =  setTimeout( function(){
         if($('.button52').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();


         }
     }, $tempo * 1000 * 5/4);

          $tim6 =  setTimeout( function(){
         if($('.button62').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();


         }
     }, $tempo * 1000 * 6/4);

          $tim7 =  setTimeout( function(){
         if( $('.button72').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();


         }
     }, $tempo * 1000 * 7/4);

          $tim8 =  setTimeout( function(){
         if($('.button82').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();


         }
     }, $tempo * 1000 * 8/4);

          $tim9 =  setTimeout( function(){
         if( $('.button92').data().val == "on"){
            $hat.currentTime = 0;
            $hat.play();

         }
     }, $tempo * 1000 * 9/4);

          $tim10 =  setTimeout( function(){
         if($('.button102').data().val == "on"   ){
            $hat.currentTime = 0;
            $hat.play();


         }
     }, $tempo * 1000 * 10/4);

          $tim11 =  setTimeout( function(){
         if($('.button112').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();


         }
     }, $tempo * 1000 * 11/4);

          $tim12 =  setTimeout( function(){
         if( $('.button122').data().val == "on"){
            $hat.currentTime = 0;
            $hat.play();

         }
     }, $tempo * 1000 * 12/4);

          $tim13 =  setTimeout( function(){
         if( $('.button132').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();

         }
     }, $tempo * 1000 * 13/4);

          $tim14 =  setTimeout( function(){
        if($('.button142').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();


         }
     }, $tempo * 1000 * 14/4);

          $tim15 =  setTimeout( function(){
      if( $('.button152').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();

         }
     }, $tempo * 1000 * 15/4);

          $tim16 =  setTimeout( function(){
      if( $('.button162').data().val == "on" ){
            $hat.currentTime = 0;
            $hat.play();

         }
     }, $tempo * 1000 * 16/4);

    }, $tempo * 1000 * 16/4 )

   }


    $("button").click(function(){

        if( $(this).data().val == "on"){
             $(this).data().val = "off";
        }else{
             $(this).data().val = "on";
        }

       // console.log( $(this).data().number + " " +  $(this).data().val + " " + $(this).data().sound  );

         $(this).toggleClass("selected");
      $(this).toggleClass("not-selected");



                if($(this).hasClass("selected")){
                    console.log($(".playbtn").html());
                            if( $(".playbtn").html() == "Play" ){

                if( $(this).data().sound == "kick"){
                     $Kick.currentTime = 0;
                     $Kick.play();
                } else if( $(this).data().sound == "snare" ){
                     $Snare.currentTime = 0;
                      $Snare.play();
                } else if( $(this).data().sound == "perc"){
                    $perc.currentTime =0;
                    $perc.play();
                } else  if( $(this).data().sound == "hat"){
                    $hat.currentTime = 0;
                    $hat.play();
                }
                 }

                }




});

    $(".playbtn").click(function(){


        if( $(this).html() == 'pause' ){
             $(this).html('play');
            $Kick.currentTime = 0;
            $Snare.currentTime = 0;
            $hat.currentTime = 0;
            $perc.currentTime = 0;

             $Kick.pause();
            $Snare.pause();
            $hat.pause();
            $perc.pause();

            clearInterval($kick_looper);
            clearInterval($hat_looper);
            clearInterval($snare_looper);
            clearInterval($perc_looper);

        }else{
             console.log($tempo);

             $(this).html('pause');
              entire_snare_function();
              entire_kick_function();
              entire_hat_function();
              entire_perc_function();
        }


    })

    });
//a general set interval to loop everything,
//    8 boxes, mapped to 1 sound.