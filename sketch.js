

function preload(){
    
}

function setup(){
   createCanvas(600,600);
   umbrella = new Umbrella(300,400);
   maxDrops=100;
   for(var i=0;i<maxDrops;i++){
      drops.push(new Drops(random(0,400),random(0,400)));
   }
}

function draw(){
   umbrella.display();
   for(var j=0;j<maxdrops;j++){
      drops[j].display();
      drops[j].update();
   }
}