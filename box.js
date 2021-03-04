class Box{

    constructor(x,y,width,height,){
       var options ={friction:1,restitution:0.8,density:0.4}; 
       this.body=Bodies.rectangle(x,y,width,height,options)
       this.width=width;
       this.height=height;
       World.add(world,this.body)
    }
  display(){
     var pos =this.body.position 
    var angle = this.body.angle
      push()
      translate(this.body.position.x,this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green")
      fill(255);
      rect(0,0,this.width,this.height);
      pop();
  } 
}