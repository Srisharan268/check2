var database;
var gameState,gameState0 = 0 ,gameState1 = 0;
var startButton;
var img1,img2,bgi1,bgi2,bgi3,bgi4,bgi5,bgi5Hologram,bgi6,bgii,lvl1_bgi;
var game,form,player,codeEntered;
var bg,mmm;
var count1 = 0,count2 = 0,countS = 0,countS2 = 0;
var reference,playerCount;
var asteroid,asteroidi;
const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz';
var randomCode = '';
var allPlayers;
var textBubble,canvas,canvaso;
var arjuni,manii,saii,tagI;
var text1,text2,text3,text4,text5,text6,text7,text8,text9,text10;
var text11,text12,text13,text14,text15,text16,text17,text18,text19,text20;
var text21,text22,text23,text24;
var hologrami;
var textObject;
var backButton;
var county = 0;
var cybertronRSI,cybertronBSI,cybertronYSI;
var character ,levelObj;//= "mani"
var level_1_joined,lvl1_bg,level_1_done;
var spaceShip,spaceShipI;
var gun_down,gun_up,gun_downI,gun_upI;
var gunAngle1 = 0,gunAngle2 = 0;
var bulletA1Group,bulletA1 = [],droneA1Group,droneA1 = [];
var countA1 =0,countS1 = 0,dronesDead = 0,dronesAlive,droneRC = [],bulletD1 = [];
var spaceshipDamage = 0,spaceshipDamageMA = 0,spaceshipDamageMD = 0;
var edges,asteroidS1 = [],asteroidS1Group,bulletS1 = [];
var asteroidI = [];
var spaceShip2,spaceShipI2;
var address,address3;
var localSdamage = 0,ddddd = 0;
var crackM1 = [],crackCM1 = [],crackImg,crackImg2;
var switchM1_img,lightonM1img,lightoffM1img,sBoardI;
var boardM1 = [];
var cracksFixed = 0;
var sPositions = [], binary = [0,1],switches = [];
var skip_button, skip_button_i,start_button_2,start_button_2_i;
var currentCracks;
var charectersArray = ["Arjun [The Cybertron Red]","Sai [The Cybertron Yellow]","Mani [The Cybertron Blue]"];


function preload(){
  img1 = loadImage("images/start_button_1.png");
  img2 = loadImage("images/backB.png");
  bgi1 = loadImage("images/background.png");
  bgi2 = loadImage("images/bg2.png");
  bgi3 = loadImage("images/campScene_0.png");
  bgi4 = loadImage("images/campScene_1.png");
  bgi5 = loadImage("images/asteroidScene.png");
  bgi5Hologram = loadImage("images/asteroidSceneH.png");
  bgi6 = loadImage("images/bg6.png");
  bgii = loadImage("images/m_info_bg.jpg");
  lvl1_bgi = loadImage("images/lvl1_bg.png")
  hologrami = loadImage("images/hologram.png");
  asteroidi = loadImage("images/asteroid.png");
  arjuni = loadImage("images/Arjun.png");
  manii = loadImage("images/Mani.png");
  saii = loadImage("images/Sai.png");
  cybertronRSI = loadImage("images/cybertron R.png");
  cybertronBSI = loadImage("images/cybertron B.png");
  cybertronYSI = loadImage("images/cybertron Y.png");
  tagI = loadImage("images/blueTag.png");
  text1 = loadImage("images/text1.png");
  text2 = loadImage("images/text2.png");
  text3 = loadImage("images/text3.png");
  text4 = loadImage("images/text4.png");
  text5 = loadImage("images/text5.png");
  text6 = loadImage("images/text6.png");
  text7 = loadImage("images/text7.png");
  text8 = loadImage("images/text8.png");
  text9 = loadImage("images/text9.png");
  text10 = loadImage("images/text10.png");
  text11 = loadImage("images/text11.png");
  text12 = loadImage("images/text12.png");
  text13 = loadImage("images/text13.png");
  text14 = loadImage("images/text14.png");
  text15 = loadImage("images/text15.png");
  text16 = loadImage("images/text16.png");
  text17 = loadImage("images/text17.png");
  text18 = loadImage("images/text18.png");
  text19 = loadImage("images/text19.png");
  text20 = loadImage("images/text20.png");
  text21 = loadImage("images/text21.png");
  text22 = loadImage("images/text22.png");
  text23 = loadImage("images/text23.png");
  text24 = loadImage("images/text24.png");
  spaceShipI = loadImage("images/spaceship 2.png");
  spaceShipI2 = loadImage("images/spaceship copy.png");
  gun_downI = loadImage("images/gun_d.png");
  gun_upI = loadImage("images/gun_u.png");
  droneI = loadImage("images/drone.png");
  asteroidI[0] = loadImage("images/asteroid_1.png");
  asteroidI[1] = loadImage("images/asteroid_3.png");
  asteroidI[2] = loadImage("images/asteroid_4.png");
  crackImg = loadImage("images/crackImg.png");
  crackImg2 = loadImage("images/crackImg2.png");
  lightonM1img = loadImage("images/lightM1_on.png");
  lightoffM1img = loadImage("images/lightM1_off.png");
  switchM1_img = loadImage("images/switch.png");
  sBoardI = loadImage("images/SboardM1_2.png");
  skip_button_i = loadImage("images/skip_button.png");
  start_button_2_i = loadImage("images/start_button_2.png");


}

function setup() {
  canvaso = createCanvas(800,800);

  database = firebase.database();
  //frameRate(180)

  game = new Game();
  game.createForm();
  levelObj = new Level();

  textObject = new Text();

  shuffleElements(charectersArray);

  bulletA1Group = createGroup();
  droneA1Group = createGroup();
  asteroidS1Group = createGroup();

  edges = createEdgeSprites()
  
  for(var i=0;i < 5;i++){
      mmm = Math.round(random(1,26));
      randomCode += ALPHABETS.slice(mmm-1,mmm)
  }

  canvas = createSprite(400,400,800,800);
  canvas.visible = false;
  startButton = createSprite(400,750);
  startButton.addImage(img1);
  startButton.scale = 0.75;
  startButton.visible = false;

  lvl1_bg = createSprite(1280,400);
  lvl1_bg.addImage(lvl1_bgi);
  lvl1_bg.scale = 1
  lvl1_bg.visible = false;

  spaceShip = createSprite(500,400);
  spaceShip.scale = 0.60
  spaceShip.addImage(spaceShipI);
  spaceShip.visible = false;

  spaceShip2 = createSprite(300,400);
  spaceShip2.scale = 0.60
  spaceShip2.addImage(spaceShipI2);
  spaceShip2.visible = false;
  spaceShip2.setCollider("rectangle",0,0,350,125)
  

  gun_down = createSprite(445,410);
  gun_down.addImage(gun_downI);
  gun_down.scale = 0.70;
  gun_down.visible = false;

  gun_up = createSprite(447,367);
  gun_up.addImage(gun_upI);
  gun_up.visible = false;

  backButton = createSprite(50,50);
  backButton.addImage(img2);
  backButton.scale = 0.4;

  textBubble = createSprite(500,640,550,140);
  textBubble.addImage(text1)
  textBubble.visible = false;

  asteroid = createSprite(550,-50);
  asteroidi.visible = false;
  asteroid.scale = 0.4;
  asteroid.addImage(asteroidi);

  skip_button = createSprite(675,50);
  skip_button.addImage(skip_button_i);
  skip_button.scale = 0.75;
  skip_button.visible = false;

  start_button_2 = createSprite(400,675);
  start_button_2.addImage(start_button_2_i);
  start_button_2.scale = 0.20;
  start_button_2.visible = false;
  
  bg = bgi1;
  
}

function draw() {

  background(bg); 
  
  drawSprites();

  
if(gameState == 0 || gameState === undefined){
    if(gameState0 == 0){
      bg = bgi1;
      startButton.visible = true;
      backButton.visible = false;
      textSize(49);
      fill("#DADEDD");
      push();
      textFont("Tempest Apache Title");
      text("The Cybertron Warriors",00,70);
      pop();
      push();
      textFont("SPACE RANGER");
      text("start",320,760);
      pop();

      if(mousePressedOver(startButton)){
        gameState0 = 1;
      }
      
      if(touches.length == 1){
        if(touches[0].x<500 && touches[0].x>300 && touches[0].y<800 && touches[0].y>700){
          gameState0 = 1;
        }
      }
    }

    if(gameState0 == 1){
      county+=1;
      backButton.visible = true;
      form.choose();
      bg = bgi2;
      startButton.visible = false;
      textSize(49);
      fill("#DADEDD");
      push();
      pop();

      if(mousePressedOver(backButton) && county>10){
        gameState0 = 0;
        form.host.hide();
        form.hostb.hide();
        form.join.hide();
        form.joinb.hide();
        county = 0;
      }

    }
    if(gameState0 == 2){
      form.hostPressed();
      county = 0;
    }
    if(gameState0 == 3){
      form.joinPressed();
      county = 0;
    }

    if(gameState0 == 4){
      backButton.visible = false;
      if(count1 == 0){
        game.getState();
        count1 += 1;
      }
      if(count2 == 0 && playerCount!== undefined){
        count2 += 1;
        playerCount+=1;
        player.index = playerCount;
        
        if(player.index == 1){
          player.role = charectersArray[0];
        }else if(player.index == 2){
          player.role = charectersArray[1];
        }else if(player.index == 3){
          player.role = charectersArray[2];
        }
        
        character = player.role;
         
        player.update();
        player.updateCount(playerCount);
      }

      textSize(50);
      textFont("Tempest Apache");
      fill("white")
      text("welcome "+player.name.slice(0,10),100,200);
      textSize(30);
      fill("red");
      text("waiting for the other players to join.....",100,260)
      textSize(20);
      text("[ the game starts when 3 players join the game ]",100,290)
      textSize(45);
      fill("white");
      text("players joined :",100,400);
      fill("grey")
      textSize(30);
      text("name",160,460);
      text("character",360,460)

      fill("white");
      textSize(30);
      if(allPlayers!== undefined){

        if(allPlayers.player1.name!==null){
          text("1.",110,500);
          text(allPlayers.player1.name.slice(0,10),160,500);
          text(allPlayers.player1.role,360,500)
        }

        if(allPlayers.player2!==undefined){
          text("2.",110,540);
          text(allPlayers.player2.name.slice(0,10),160,540);
          text(allPlayers.player2.role,360,540)
        }

        if(allPlayers.player3!==undefined){
          text("3.",110,580);
          text(allPlayers.player3.name.slice(0,10),160,580);
          text(allPlayers.player3.role,360,580)
        }

      }

      if(playerCount >= 3){// && player.index == 1
        start_button_2.visible = true;
        if(mousePressedOver(start_button_2)){
            game.update(1);
        }
      }
    }
  }

  if(gameState == 1){
    imageMode(CENTER)
    rectMode(CENTER)
    gameState0 = 5;
    start_button_2.visible = false;
    bg = "#00010D";
    if(gameState1 == 0){
      countS += 1;
      if(countS <140){
        bg = bgi3;
      }
      if(countS == 60){
        asteroid.visible = true;
        asteroid.setVelocity(-10,5);
      }else if(countS >= 140){
        asteroid.destroy();
        var Yposition = map(countS,140,170,0,95);
        image(bgi3,400,400-Yposition,800,800-Yposition*2);
      }
      if(countS == 171){
        gameState1 = 1;
        countS = -30;
      }
    }

    if(gameState1 == 1){
      textObject.createTexts();
    }

    if(gameState1 == 2){ 
      bg = bgii;
      
      if(character ==="Arjun [The Cybertron Red]"){
        arjunInfo_1();
      }else if(character === "Sai [The Cybertron Yellow]"){
        saiInfo_1();
      }else if(character === "Mani [The Cybertron Blue]"){
        maniInfo_1();
      } 

      address = database.ref("games/"+reference+"/level1/");

      updateLvl1_joined();
      
      if(level_1_joined ==3){
        gameState1 = 3;
        countS2 = 0;
      }
      console.log(level_1_joined);
     
    }

    if(gameState1 == 3){
      bg = bgii
      start_button_2.visible = true;
      if(mousePressedOver(start_button_2)){
          game.update(2);
      }
    }

    
  }
  if(gameState == 2){

    if(gameState1 ==2){
      gameState1 = 3;
      countS2 = 0;
    }
    if(gameState1 == 3){
      start_button_2.visible = false;
      bg = "#F0ECE1";
      lvl1_bg.visible = true;

      address3 = database.ref("games/"+reference+"/level1/players_done");
      
      address = database.ref("games/"+reference+"/level1/");
    
      address3.on("value",(data)=>{
        level_1_done = data.val()
      });

      if(character === "Arjun [The Cybertron Red]"){
        game.getDamageD();
        levelObj.arjun_1();
      }else if(character ==="Sai [The Cybertron Yellow]"){
        game.getDamageA();
        levelObj.sai_1();
      }else if(character ==="Mani [The Cybertron Blue]"){
        game.getTotalDamage();
        levelObj.mani_1();
      }

      
    }
    if(gameState1 == 4){
      bg = bgii;

      if(countS2 == 0){
        address.update({
          players_done: level_1_done+1
        });
        countS2+=1;
      }
      if(level_1_done ==3){
        game.update(3);
        countS2 = 0;
      }
    }
  }

  if(gameState == 60){
    start_button_2.visible = true;
    hideLevel1();
    if(mousePressedOver(start_button_2)){
      gameState1 = 2;
    start_button_2.visible = false;
    }

    if(gameState1 == 2){

      database.ref("games/"+reference+"/level1/players_joined").on("value",(data)=>{
        level_1_joined = data.val()
      });
      
      updateLvl1_joined();
      
      if(level_1_joined ==3){
        game.update(2);
        countS2 = 0;
        console.log(countS2)
        gameState1 = 3;
      }
    }
  }
      //console.log(mouseX,mouseY);
}



