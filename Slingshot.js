class Slingshot{
    constructor(bodyA,pointB){
    
    var options ={
        bodyA:bodyA,
        pointB:pointB,
        
    }
      this.pointB=pointB

    this.chain = Constraint.create(options);
    World.add(world,this.chain)
    }
    fly() {
        this.chain.bodyA = null;
    }

 
 display(){
     if(this.chain.bodyA){
    strokeWeight(5);
    stroke("aqua")
    var point1 = this.chain.bodyA.position
    var point2 = this.pointB
    line(point1.x, point1.y,point2.x,point2.y)
     }
    }
}