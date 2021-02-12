class DrawRocket{
constructor()
{  
    
}

drawRocket(x, y, pWidth, width, height, speed){
  
    let canvasH = height;
    let rocketCanvas = document.getElementById("myCanvas");
    let rocketCtx =  rocketCanvas.getContext("2d");
        rocketCtx.clearRect( rocketX,  rocketY -10,  rocketW,  rocketH);     
        rocketCtx.drawImage( rocket, rocketX,  rocketY);
    if(shield == 1){  
      Collision.collision(x, y , pWidth ,  rocketX ,  rocketY,  rocketW ,  rocketH );
        if(collision){
          drawBoom(x, y, width, canvasH);
          if(!audioo.muted){
            audioo.play();
          }
          lives--;
          if(!lives) {        
          puse = true;
        }
         rocketY =0;
         rocketX =Math.floor(Math.random() * (+width - +0)) + +0;
      }   
    }
      if( rocketY < height){
         rocketY += speed;
      }
      else{
         rocketY =0;
         rocketX =Math.floor(Math.random() * (+width - +0)) + +0;
      }
    
  }//drawRocket
}//class
/**************************************************************************************** */
function drawBoom(x,y,width,canvasH){
    let boom = new Image();
    boom.src ="./image/boom.png";
    let rocketCanvas2 = document.getElementById("myCanvas");
    let rocketCtx2 = rocketCanvas2.getContext("2d");
    rocketCtx2.clearRect(0, 0, width, canvasH);
    rocketCtx2.drawImage(boom, x - 50 , y - 50,150 ,150);
    x = 0;
    y = height - 100;    
}
/************************************* MUTE ************************************* */
function unmute() { 
  
  if(!audioo.muted || !backMusic.muted){  
    audioo.muted = true;
    backMusic.muted = true;
    star.muted = true;
  }
  else{    
    audioo.muted = false;
    backMusic.muted = false;
    star.muted = false;
    backMusic.loop = true;
    playBack();  
  }

  function playBack() {    
    backMusic.play();
  }
}        
/********************************************************* */
function mute(){
  audioo.muted = true;
  backMusic.muted = true;
  star.muted = true;
}