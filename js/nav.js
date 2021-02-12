document.addEventListener('DOMContentLoaded', nav)
function nav(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}


$(function(){
    $("#about").hide();
    $("#work").hide();
    $("#graphic").hide();
    $("#footer").hide();
   
});


$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior
  
        var target = $(this).attr("href"); // Set the target as variable
        //showDive = "#Main";
       

       switch (target){
           case "#Main":
                $(showDive).fadeOut("slow",function(){                    
                    $("#Main").show( 2000 ); });
                    showDive = "#Main";
                break;
            case "#about":
                $(showDive).fadeOut("slow",function(){                                  
                    $("#about").show( 2000 );               
    
                });
                showDive = "#about"; 
                break;
            case "#graphic":
                $(showDive).fadeOut("slow",function(){
                    showDive = "#graphic";               
                    $("#graphic").show( 2000 );               
    
                });
                break;
            case "#work":
                $(showDive).fadeOut("slow",function(){
                    showDive = "#work";               
                    $("#work").show( 2000 );               
    
                });
                break;

               
            

       }
        
        return false;
    });
    });
  
/************************************************************************** */
var slideIndex = 0;
showSlides();


function showSlides() {
  var i;
  var pause = false;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  
}
 $interval = setInterval(showSlides, 2000)
    $(".mySlides").on("mouseover",function(){
        clearInterval($interval);
    });
       
    $(".mySlides").on("mouseout",function(){
        $interval = setInterval(showSlides, 2000)
    });
document.addEventListener('DOMContentLoaded', nav)
function nav(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}


$(function(){
    $("#about").hide();
    $("#work").hide();
    $("#graphic").hide();
    $("#footer").hide();
   
});


$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior
  
        var target = $(this).attr("href"); // Set the target as variable
        //showDive = "#Main";
       

       switch (target){
           case "#Main":
                $(showDive).fadeOut("slow",function(){                    
                    $("#Main").show( 2000 ); });
                    showDive = "#Main";
                break;
            case "#about":
                $(showDive).fadeOut("slow",function(){                                  
                    $("#about").show( 2000 );               
    
                });
                showDive = "#about"; 
                break;
            case "#graphic":
                $(showDive).fadeOut("slow",function(){
                    showDive = "#graphic";               
                    $("#graphic").show( 2000 );               
    
                });
                break;
            case "#work":
                $(showDive).fadeOut("slow",function(){
                    showDive = "#work";               
                    $("#work").show( 2000 );               
    
                });
                break;

               
            

       }
        
        return false;
    });
    });
  
/************************************************************************** */
var slideIndex = 0;
showSlides();


function showSlides() {
  var i;
  var pause = false;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  
}
 $interval = setInterval(showSlides, 2000)
    $(".mySlides").on("mouseover",function(){
        clearInterval($interval);
    });
       
    $(".mySlides").on("mouseout",function(){
        $interval = setInterval(showSlides, 2000)
    });
