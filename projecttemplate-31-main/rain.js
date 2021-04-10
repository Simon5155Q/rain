var raining = [];
class Rain{
  constructor(width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      
    }
    
    display(){
      if(frameCount % 60){
        var position = [{x:random(0,300), y:random(0,300)}];
        raining.push(position);
      }
      push();     
      translate(this.body.position.x, this.body.position.y);
      ellipseMode(CENTER);
      ellipse(0, 0, 50, 50);      
      
      

      for(var i = 0; i < 100; i++){
        Matter.Body.setPosition(this.body, {x:random(0,300), y:random(0,300)});
      }
      pop();
    }
}