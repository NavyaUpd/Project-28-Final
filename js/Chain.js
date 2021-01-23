class Chain{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04
        }
        this.chain = Matter.Constraint.create(options);
        this.bodyA = bodyA
        World.add(world, this.chain);
        
    }
    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.pointB;
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    fly(){
        this.chain.bodyA = null;
    }
    reset(){
        this.chain.bodyA = this.bodyA
    }
}