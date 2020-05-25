class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.image = loadImage("assets/tanker1.png");
     
    }
    
   

  

    display(){

      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      image(this.image,0,0,300,200);
     // tanker.display();
    }
}
