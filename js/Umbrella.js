class Umbrella{
    constructor(x,y){
        this.xpos = x;
        this.ypos = y;
        this.umbrella = Bodies.circle(this.xpos,this.ypos,2,options);
        var options = {
            isStatic: true
        }
    }
    display(){
        push();
        translate(this.umbrella.position.x, this.umbrella.position.y);
        imageMode(CENTER);
        image(this.image,this.xpos,this.ypos,100,100);
        pop();
    }
}