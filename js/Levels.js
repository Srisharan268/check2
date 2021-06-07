class Level{
    constructor(){};

    arjun_1(){

        spaceShip.visible = true;
        gun_down.visible = true;
        gun_up.visible = true;

        lvl1_bg.setVelocity(-16,0);
        if(lvl1_bg.x <= -480){
            lvl1_bg.x = 1280
        }
            countA1+=1;
        
        if(keyIsDown(UP_ARROW)&& gunAngle2!==0 ){
            gunAngle2 +=2
            gun_down.rotation = gunAngle2;

        }if(keyIsDown(DOWN_ARROW)&& gunAngle2!==-60 ){//
            gunAngle2 -=2
            gun_down.rotation = gunAngle2;
        }

        if(keyIsDown(87) && gunAngle1 < 60){
            gunAngle1 +=2
            gun_up.rotation = gunAngle1;
        }if(keyIsDown(83) && gunAngle1 > 0){
            gunAngle1 -=2
            gun_up.rotation = gunAngle1;
        }

        if(keyWentDown(65)){
            bulletA1.push(createSprite(gun_up.x,gun_up.y,20,5)) 
            bulletA1[bulletA1.length-1].shapeColor = "red";
            bulletA1[bulletA1.length-1].depth = gun_up.depth-1;
            bulletA1[bulletA1.length-1].rotateToDirection = true;
            bulletA1[bulletA1.length-1].setSpeed(-10,gunAngle1);
            bulletA1Group.add(bulletA1[bulletA1.length-1]);
        }if(keyWentDown(RIGHT_ARROW)){
            bulletA1.push(createSprite(gun_down.x,gun_down.y,20,5)) 
            bulletA1[bulletA1.length-1].shapeColor = "red";
            bulletA1[bulletA1.length-1].depth = gun_down.depth-1;
            bulletA1[bulletA1.length-1].rotateToDirection = true;
            bulletA1[bulletA1.length-1].setSpeed(-10,gunAngle2);
            bulletA1Group.add(bulletA1[bulletA1.length-1]);
        }

        if(countA1 %60== 0 && dronesAlive<10){
            if(level_1_done !== 1){
                droneA1.push(createSprite(random(0,250),random(50,750)));
                droneA1[droneA1.length-1].addImage(droneI);
                droneA1[droneA1.length-1].scale = random(1,2);
                droneA1Group.add(droneA1[droneA1.length-1]);
                droneRC.push(Math.round(random(1,15)));

            }
        }
        var rand = Math.round(random(1,10));
        for(var i = 0;i<droneA1.length;i++){
            //console.log(droneRC[i],rand)
            if(frameCount%20 == 0){
                if(droneRC[i] == rand){
                    bulletD1.push(createSprite(droneA1[i].x,droneA1[i].y,20,5)) 
                    bulletD1[bulletD1.length-1].shapeColor = "blue";
                    //bulletD1[bulletD1.length-1].depth = droneA1[bulletD1.length-1].depth-1;
                    bulletD1[bulletD1.length-1].rotateToDirection = true;
                    bulletD1[bulletD1.length-1].attractionPoint(10,400,400);
                    
                }
            }
            for(var j =0;j<bulletA1.length;j++){
                if(droneA1[i].isTouching(bulletA1[j])){
                    droneA1[i].destroy();
                    droneRC[i] = 100
                    bulletA1[j].destroy();
                    dronesDead += 1;
                    if(countA1 == 601){
                        countA1 = 540;
                    }else if(countA1 <= 600){
                        countA1-=60;
                    }
                }
            }
        }

        for(var i =0;i<bulletD1.length;i++){
            if(bulletD1[i].isTouching(spaceShip)){
                localSdamage += 1;
                if(localSdamage%3 == 0){
                    game.updateDamageD(spaceshipDamage+ 1);
                }
                bulletD1[i].destroy();
            }
        }

        dronesAlive = droneA1.length - dronesDead;

        if(level_1_done ==1 && dronesAlive == 0){
            lvl1_bg.destroy();
            spaceShip.destroy();
            spaceShip2.destroy();
            gun_down.destroy();
            gun_up.destroy();
            gameState1 = 4
        }
        
            //console.log(localSdamage/3);
        
    }

    sai_1(){
        countS1 += 1;
        spaceShip2.visible = true;
        spaceShip2.setVelocity(20,0);

        if(spaceShip2.x <= 40000){
            camera.x = spaceShip2.x+100; 
            spaceShip2.rotateToDirection = true;

            if((lvl1_bg.x+1280) - spaceShip2.x <=520){
                lvl1_bg.x = spaceShip2.x+980;
            }

            if(keyIsDown(UP_ARROW)&& spaceShip2.y> 50){
                spaceShip2.velocityY = -5;
                spaceShip2.y -= 10;

            }else if(keyWentUp(UP_ARROW)){
                spaceShip2.velocityY = 0;
            }
            if(keyIsDown(DOWN_ARROW)&& spaceShip2.y< 750){
                spaceShip2.velocityY = 5;
                spaceShip2.y += 10;

            }else if(keyWentUp(DOWN_ARROW)){
                spaceShip2.velocityY = 0;
            }

            if(keyWentDown(RIGHT_ARROW)){
                if(bulletS1.length <= 5){
                    bulletS1.push(createSprite(spaceShip2.x+100,spaceShip2.y+15,40,5)) 
                    bulletS1[bulletS1.length-1].shapeColor = "orange";
                    bulletS1[bulletS1.length-1].rotateToDirection = true;
                    bulletS1[bulletS1.length-1].setSpeed(30,(spaceShip2.getDirection()));
                }
            }

            if(countS1 %60== 0){
                for(var i =0;i<2;i++){
                    var randI =random(asteroidI);
                    asteroidS1.push(createSprite(random(spaceShip2.x+900,spaceShip2.x+1200),random(50,750)));
                    asteroidS1[asteroidS1.length-1].setCollider("circle");
                    asteroidS1[asteroidS1.length-1].addImage(randI);
                    asteroidS1[asteroidS1.length-1].scale = random(1,1.5);
                }
            }
            
            for(var i = 0;i<asteroidS1.length;i++){
                if(spaceShip2.x - asteroidS1[i].x > 400){
                    asteroidS1[i].destroy();
                }

                if(asteroidS1[i].isTouching(spaceShip2)){
                    for(var s = 0;s<4;s++){
                        localSdamage += 1;
                        if(localSdamage%3 == 0){
                            game.updateDamageA(spaceshipDamage+1);
                        }
                        
                    }

                    /*if(spaceShip2.x>2000){
                        spaceShip2.x -=2000;
                        lvl1_bg.x = spaceShip2.x+900
                    }*/
                    asteroidS1[i].destroy();

                }
                for(var j =0;j<bulletS1.length;j++){
                    if(bulletS1[j].isTouching(asteroidS1[i])){
                        bulletS1[j].destroy();
                        asteroidS1[i].destroy();
                    }
                }
            }

            
            //console.log(spaceShip2.x,localSdamage/3);

        }else if(spaceShip2.x-camera.x ==600){
            spaceShip2.visible = false;
            spaceShip.destroy();
            gun_down.destroy();
            gun_up.destroy();
            gameState1 = 4;
            camera.x = 400;
            camera.y = 400;
        }
    }

    mani_1(){
        //console.log(spaceshipDamageMA);
        currentCracks = crackM1.length - cracksFixed;
        lvl1_bg.setVelocity(-16,0);
        if(lvl1_bg.x <= -480){
            lvl1_bg.x = 1280
        }

        spaceShip2.visible = true;
        spaceShip2.x = 250;
        spaceShip2.y = 350;
        spaceShip2.scale =4;

        var randC = Math.round(random(20,780));
        var randCy = Math.round(random(100,610));

        if(spaceshipDamageMA>0){
            crackM1.push(createSprite(randC,randCy,100,100));
            crackM1[crackM1.length-1].scale = random(2,3);
            crackM1[crackM1.length-1].setCollider("circle");
            //crackM1[crackM1.length-1].debug = true;
            crackCM1.push(0)
            game.updateDamageA(spaceshipDamageMA-1);
            
        }

        var randC = Math.round(random(20,780));
        var randCy = Math.round(random(100,610));

         if(spaceshipDamageMD>0){
            crackM1.push(createSprite(randC,randCy,100,100));
            crackM1[crackM1.length-1].scale = random(2,3);
            crackM1[crackM1.length-1].setCollider("circle");
            //crackM1[crackM1.length-1].debug = true;
            crackCM1.push(0)
            game.updateDamageD(spaceshipDamageMD-1);

        }

        for(var i in crackM1){
            if(mouseIsOver(crackM1[i])){
                crackM1[i].addImage(crackImg2)
            }else{
                crackM1[i].addImage(crackImg)
            }
        }

        for(var i in crackM1){
            if(mousePressedOver(crackM1[i]) && crackCM1[i] !== 2){
                crackCM1[i] = 1;
            }
        }

        for(var i in crackCM1){
            if(crackCM1[i]==1){
                crackM1[i].destroy();
                createSwitchesM1(i);
            }
        }

        if(level_1_done == 2 && currentCracks == 0){
            lvl1_bg.destroy();
            spaceShip2.destroy();
            spaceShip.destroy();
            gun_down.destroy();
            gun_up.destroy();
            gameState1 = 4
        }

        if(currentCracks >=10){
            game.update(60);

            address.update({
                players_joined: 0,
                damageReceivedA: 0,
                damageReceivedD: 0,
                players_done: 0
            })
        }
        
        
    }
}