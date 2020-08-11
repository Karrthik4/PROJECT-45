class Barrel{
    constructor(x, y, radius){
        var options={
            isStatic:true,
            restitution: 0.05,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        fill("pink");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius);
    }
}