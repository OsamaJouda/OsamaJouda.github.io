class Collision{
    constructor(){

    }
    static collision(x1, y1, w1,X2, Y2, W2, H2){
        let width1 = x1 + w1;
        let width2 = X2 + W2;
        let height2 = Y2 + H2;
        
        if((x1 >= X2 && x1 <= width2 && y1 >=Y2 && y1 <= height2)||
        (width1/2  >= X2 && width1/2 <= width2 && y1 >= Y2 && y1 <= height2) ||
         (width1 >= X2 && width1 <= width2 && y1 >= Y2 && y1 <= height2)){
             collision = true;
         }
         else {
             collision = false;
         }
    
    
    
    
    }
}