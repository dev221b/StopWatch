window.onload = function(){
      var minutes = 00;
      var seconds = 00;
      var centisecs = 00;
      var dispMins = document.getElementById("min");
      var dispSecs = document.getElementById("secs");
      var dispCentiSecs = document.getElementById("centi");
      var buttonStart = document.getElementById("btnStart");
      var buttonStop = document.getElementById("btnStop");
      var buttonReset = document.getElementById("btnReset");
      var interval;     

      buttonStart.addEventListener('click', () =>
      {
        interval = setInterval(timerun, 10);
      })

      function timerun()
      {
        centisecs++;

        if(centisecs<10)
        centisecs = '0' + centisecs;
        dispCentiSecs.innerHTML = centisecs;

        if(centisecs > 99)
        {
          seconds++;
          if(seconds<10)
          seconds = "0" + seconds;
          dispSecs.innerHTML = seconds;
          centisecs = 0;
          dispCentiSecs.innerHTML = '0' + centisecs;
        }

        if(seconds>59)
        {
          minutes++;
          if(minutes<10)
          minutes = '0' + minutes;
          dispMins.innerHTML = minutes;
          seconds = 0;
          dispSecs.innerHTML = '0' + seconds;

        }

        buttonStop.addEventListener('click', () =>
        {
          clearInterval(interval);
        });

        buttonReset.addEventListener('click', () =>
        {
          clearInterval(interval);
          centisecs = "00";
          seconds = "00";
          minutes = "00";
          dispCentiSecs.innerHTML = centisecs;
          dispSecs.innerHTML = seconds;
          dispMins.innerHTML = minutes;
        });
        
      }
    }

    // $(document).ready(function(){

    //   $('#time').click(function(){
    //     $(this).toggleClass('fa-times');
    //     $('header').toggleClass('toggle');
    //   });
    
    //   $(window).on('scroll load',function(){
    
    //     $('#time').removeClass('fa-times');
    //     $('header').removeClass('toggle');
    
    //     if($(window).scrollTop() > 0){
    //       $('.top').show();
    //     }else{
    //       $('.top').hide();
    //     }
    
    //   });
    
    //   // smooth scrolling 
    
    //   $('a[href*="#"]').on('click',function(e){
    
    //     e.preventDefault();
    
    //     $('html, body').animate({
    
    //       scrollTop : $($(this).attr('href')).offset().top,
    
    //     },
    //       500, 
    //       'linear'
    //     );
    
    //   });
    
    // });
    
   
