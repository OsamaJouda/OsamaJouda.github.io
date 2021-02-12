
class DrawSky {
    constructor(){
        this.sky = new Image();
        this.sky.src="./image/cloudy.png";
        
        this.skyY = -100;
        this.skyCanvas = document.getElementById("skyCanvas");
        this.skyCtx = skyCanvas.getContext("2d");
        this.skyW = skyCanvas.clientWidth ;
        this.skyH = skyCanvas.clientHeight;
        skyCanvas.width = this.skyW;
        skyCanvas.height = this.skyH;
        this.skyX = Math.floor(Math.random() * ((this.skyW - 300)  - 300)) + 300;        
        this.skyX2 = Math.floor(Math.random() * ((this.skyW - 50) - 50)) + 50;
    }
    drawSky(){
        this.skyCtx.clearRect(0, 0, this.skyW, this.skyH);
        this.skyCtx.drawImage(this.sky, this.skyX, this.skyY ); 
        this.skyCtx.drawImage(this.sky, this.skyX2, this.skyY - 200); 
        if(this.skyY > this.skyH){
            this.skyY = -100;
            this.skyX = Math.floor(Math.random() * ((this.skyW - 100)  - 100)) + 100;        
            this.skyX2 = Math.floor(Math.random() * ((this.skyW - 50) - 50)) + 50;
        }
        else{
            this.skyY += 2;
        }
        
  }//draw Sky
}