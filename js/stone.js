class Stone{
    constructor(r){
        var options = {
			isStatic:false,
			restitution: 0,
            friction: 1,
            density: 1.2
		}
        this.body = Bodies.circle(250, 450, r, options);
        World.add(world, this.body);
        this.image = loadImage("images/stone.png");
        this.r = r
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.r*2,this.r*2);
    }
}