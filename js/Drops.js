class Drops {
    constructor(x,y){
        this.xpos = x;
        this.ypos=y;
        this.options = {
            friction:0,
            isStatic:false,
            restitution: 0
        }
        this.rain = Bodies.circle(this.xpos,this.ypos,2,this.options);
    }
    update(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain, {x:random(0,400),y:random(0,400)});
        }
    }
    display(){
        push();
        translate(this.xpos,this.ypos);
        ellipse(this.xpos,this.ypos,2,2);
        pop();
    }
}