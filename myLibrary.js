function detectcollision(stone, mango) {

 mangoBodyPosition=mango.body.position 
 stoneBodyPosition=stone.body.position

 var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
 console.log(distance);
 console.log(mango.r + stone.r);
 if(distance <= mango.r*2 + stone.r*2) {
    Matter.Body.setStatic(mango.body, false);
 }
 //console.log(mangoBodyPosition.y);

}