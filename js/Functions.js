function shuffleElements(arrayName){
  for(var i=0;i<arrayName.length;i++){
    var j = Math.floor(random(0,3));
    var temp = arrayName[i];
    arrayName[i] = arrayName[j];
    arrayName[j] = temp;
  }
}
function hideLevel1(){
  camera.x = 400;
  lvl1_bg.visible = false;
  lvl1_bg.x = 1280;
  spaceShip2.visible = false;
  spaceShip2.x = 300;
  spaceShip.visible = false;
  gun_down.visible = false;
  gun_up.visible = false;
  cracksFixed = 0;
  dronesDead = 0;
  for(var i in droneA1){
    droneA1[i].destroy();
  }
  for(var i in asteroidS1){
    asteroidS1[i].destroy();
  }
  for(var i in crackM1){
    crackM1[i].destroy();
  }
  for(var i in bulletA1){
    bulletA1[i].destroy();
  }
  for(var i in bulletD1){
    bulletD1[i].destroy();
  }
  for(var i in bulletS1){
    bulletS1[i].destroy();
  }
  for(var i in boardM1){
    boardM1[i].destroy();
  }
  for(var i in switches){
    switches[i].s1.destroy();
    switches[i].s2.destroy();
    switches[i].s3.destroy();
    switches[i].s4.destroy();
    switches[i].l1.destroy();
    switches[i].l2.destroy();
    switches[i].l3.destroy();
    switches[i].l4.destroy();
  }
  droneA1 = [];
  crackM1 = [];
  crackCM1 = [];
  asteroidS1 = [];
  bulletA1 = [];
  bulletD1 = [];
  bulletS1 = [];
  switches = [];
  boardM1 = [];
  switches = [];

  level_1_done = 0;

}
function updateLvl1_joined(){
  var address2 = database.ref("games/"+reference+"/level1/players_joined");
      
      address2.on("value",(data)=>{
        level_1_joined = data.val()
      });

      if(level_1_joined !== undefined){
        if(countS2 == 0){
          address.update({
            players_joined: level_1_joined+1
          });
          countS2+=1;
        }
      }
      
}
function createSwitchesM1(i){
  //if(boardM1[i] !== 0){
    console.log("countS : "+countS)
    if(countS ==0){
      boardM1.push(createSprite(400,400));
      boardM1[boardM1.length-1].addImage(sBoardI);
      sPositions.push({a:random(binary),b:random(binary),c:random(binary),d:random(binary)});
      switches.push({s1: createSprite(350,165), l1: createSprite(500,165), s2: createSprite(350,315), l2: createSprite(500,315), s3: createSprite(350,465), l3: createSprite(500,465), s4: createSprite(350,615), l4: createSprite(500,615)});
      switches[switches.length-1].s1.addImage(switchM1_img);
      switches[switches.length-1].s2.addImage(switchM1_img);
      switches[switches.length-1].s3.addImage(switchM1_img);
      switches[switches.length-1].s4.addImage(switchM1_img);
      switches[switches.length-1].l1.addImage(lightoffM1img);
      switches[switches.length-1].l2.addImage(lightoffM1img);
      switches[switches.length-1].l3.addImage(lightoffM1img);
      switches[switches.length-1].l4.addImage(lightoffM1img);
      console.log(sPositions[0]);
      countS =1 ;
    }

    switches[switches.length-1].s1.rotation = sPositions[sPositions.length-1].a*180;
    switches[switches.length-1].s2.rotation = sPositions[sPositions.length-1].b*180;
    switches[switches.length-1].s3.rotation = sPositions[sPositions.length-1].c*180;
    switches[switches.length-1].s4.rotation = sPositions[sPositions.length-1].d*180;

    if(sPositions[sPositions.length-1].a == 1){
      switches[switches.length-1].l1.addImage(lightonM1img);
    }
    if(sPositions[sPositions.length-1].b == 1){
      switches[switches.length-1].l2.addImage(lightonM1img);
    }
    if(sPositions[sPositions.length-1].c == 1){
      switches[switches.length-1].l3.addImage(lightonM1img);
    }
    if(sPositions[sPositions.length-1].d == 1){
      switches[switches.length-1].l4.addImage(lightonM1img);
    }

    for( var j in crackM1){
      crackM1[j].visible = false;
      crackM1[j].setCollider("circle",0,0,0);
    }

    if(mousePressedOver(switches[switches.length-1].s1)){
      if(sPositions[sPositions.length-1].a == 0){
        sPositions[sPositions.length-1].a = 1;
      }
    }

    if(mousePressedOver(switches[switches.length-1].s2)){
      if(sPositions[sPositions.length-1].b == 0){
        sPositions[sPositions.length-1].b = 1;
      }
    }

    if(mousePressedOver(switches[switches.length-1].s3)){
      if(sPositions[sPositions.length-1].c == 0){
        sPositions[sPositions.length-1].c = 1;
      }
    }

    if(mousePressedOver(switches[switches.length-1].s4)){
      if(sPositions[sPositions.length-1].d == 0){
        sPositions[sPositions.length-1].d = 1;
      }
    }

    
    
    if(sPositions[sPositions.length-1].a == 1 && sPositions[sPositions.length-1].b == 1 && sPositions[sPositions.length-1].c == 1 && sPositions[sPositions.length-1].d == 1){
      countS+=1;
      if(countS > 5){
        for( var k in crackM1){
          crackM1[k].visible = true;
          crackM1[k].setCollider("circle");
        }
        crackCM1[i] = 2;
        boardM1[boardM1.length-1].destroy();
        boardM1[boardM1.length-1].visible = false;
        switches[switches.length-1].s1.destroy();
        switches[switches.length-1].s2.destroy();
        switches[switches.length-1].s3.destroy();
        switches[switches.length-1].s4.destroy();
        switches[switches.length-1].l1.destroy();
        switches[switches.length-1].l2.destroy();
        switches[switches.length-1].l3.destroy();
        switches[switches.length-1].l4.destroy();
        cracksFixed +=1;  
        countS = 0;
      }
    }
}
function arjunInfo_1(){

}
function saiInfo_1(){
  
}
function maniInfo_1(){
  
}


