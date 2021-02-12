class DrawStares{
  constructor(){

  }

  drawGoldStares(){       
    collisionDetectionGold()  
    ctx.clearRect(goldX, goldY -10, goldW, goldH);     
    ctx.drawImage(goldStar,goldX, goldY)
      if(goldY < height){
        goldY += 5;      
      }
      else{
        goldY =0;
        goldX =Math.floor(Math.random() * (+width - +0)) + +0;
      }
  }
    
  drawRedStares(){  
    collisionDetectionRed()  
    draw();
  }
}


/************************************************************************** */
function drawRed(){
  collisionDetectionRed()
  ctx.clearRect(redX, redY -10, redW, redH);     
  ctx.drawImage(redStar,redX, redY)
    if(redY < height){
      redY += 5;   
      anim = requestAnimationFrame(drawRed);
    }
    else{
      redY = 0;
      redX = Math.floor(Math.random() * (+width - +0)) + +0;
      cancelAnimationFrame(anim);
    }
}
/********************************* CollisionDetectionGold  **************************************** */
function collisionDetectionGold() {
    if((x > goldX && x < goldX + goldW && y > goldY && y < goldY +  goldH)||(x + pWidth > goldX && x + pWidth < goldX + goldW && y > goldY && y < goldY +  goldH)){
      goldY =0;
      goldX =Math.floor(Math.random() * (+width - +0)) + +0;
      goldScore += 1;
      if (goldScore % 50 == 0){
        lives += 1;
      }
      if(!star.muted){
        star.currentTime = 0;
        star.play();
      }
    }  
  }
  /********************************* CollisionDetectionRed  **************************************** */
function collisionDetectionRed() {
  
  if((x > redX && x < redX + redW && y > redY && y < redY +  redH)||(x + pWidth > redX && x + pWidth < redX + redW && y > redY && y < redY +  redH)){
    redY = height;
    redX = Math.floor(Math.random() * (+width - +0)) + +0;
    redScore += 1;
    
    if ((redScore % 5) == 0){
      shield = 0 ;
      counterInterval = setInterval(shieldCounter, 1000);
      setTimeout(shield2,6000);
      function shield2(){
        shield = 1;
      }
    }
    if(!star.muted){
      star.currentTime = 0;
      star.play();
    }
  }  
}

function shieldCounter(){
  if(counter >0){  
  document.getElementById("shieldCounter").innerHTML = "counter : " + counter;
  counter --;
  }
  else{
    clearInterval(counterInterval);
    counter = 5;
    document.getElementById("shieldCounter").innerHTML = "Shield Timer " ;
  }
}