var PIXI = require('pixi.js');
var app = new PIXI.Application(1000, 1000, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

// create a new Sprite from an image path
var bunny = PIXI.Sprite.fromImage('/bunny.png')

// center the sprite's anchor point
bunny.anchor.set(0.5);

// move the sprite to the center of the screen
bunny.x = app.renderer.width / 2;
bunny.y = app.renderer.height / 2;
app.stage.addChild(bunny);
var velocity=0;
app.ticker.add(function(delta) {
    if(Math.abs(velocity) > 5){
        velocity = 5 * Math.sign(velocity);
    }
    if(bunny.y > app.screen.height){
        velocity = 0;
        bunny.y = app.screen.height;
    }
    if(bunny.x > app.screen.height){
        velocity = 0;
        bunny.y = app.screen.height;
    }
    bunny.y += velocity;
});

window.addEventListener("keydown", function(event){
    if(event.keyCode == 87){
        velocity -=1;
    }
    if(event.keyCode == 83){
        velocity +=1;
    }
});
import Bunny from './bunny';

var test = new Bunny('cool');
console.log(test);