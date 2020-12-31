class Chain {
constructor(body1,point1){
    var options ={
bodyA:body1,pointB:point1,stiffness:0.04,length:10


    }
    this.bodyA=body1;
    this.pointB=point1;

this.chain1=Constraint.create(options)
World.add(world,this.chain1)
}

fly(){
    this.chain1.bodyA=null;
}

display(){
    if(this.chain1.bodyA){


    strokeWeight(4,5)
    line(this.chain1.bodyA.position.x,this.chain1.bodyA.position.y,this.chain1.pointB.x,this.chain1.pointB.y);
    }

}
}