class CHAIN {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    detatch(){
        this.sling.bodyA=null;
        console.log("release")
    }
    attach(attachedbody){
        this.sling.bodyA=attachedbody ;
            }

    display(){
        if (this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("blue");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}
    
}