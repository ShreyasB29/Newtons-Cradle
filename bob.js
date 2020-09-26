class Bob {
    constructor(x,y){
      var options ={
          isStatic:false,
          restitution:1,
          friction:0,
          density:1
      }
      this.body=Bodies.circle(x,y,50,options);
      World.add(world,this.body);
    }
    display(){
  
     push();
     translate(this.body.position.x, this.body.position.y);
     fill("yellow");
     ellipseMode(CENTER)
     ellipse(0,0,50,50);
     pop(); 
  
    }
  
  }