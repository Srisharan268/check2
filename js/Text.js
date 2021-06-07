class Text{
    constructor(){};

    async createTexts(){
        bg = bgi4;

        skip_button.visible = true;

      if(countS <= 0){
      countS += 1
      }
      
      if(countS == 1){
        //left
        textBubble.visible = true;

        image(arjuni,125,750);
        image(tagI,295,550,150,40);

        fill("#FFFFFFBF");
        rect(500,640,550,140);


        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(35)
        fill("white")
        text("ARJUN",240,558);

        if(mousePressedOver(canvas)||keyWentDown("space")){
          countS = 2;
          textBubble.visible = false
        }
      }else if(countS == 2){
        //right
        countS2 +=1
        textBubble.visible = true;
        textBubble.x = 300;
        textBubble.addImage(text2);

        image(saii,675,750);
        image(tagI,505,550,150,40);

        fill("#FFFFFFBF");
        rect(300,640,550,140);
        
        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(35)
        fill("white")
        text("SAI",475,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS == 3){
        //left
        textBubble.visible = true;
        textBubble.x = 500;
        textBubble.addImage(text3);
        countS2 += 1

        image(manii,125,750);
        image(tagI,295,550,150,40);

        fill("#FFFFFFBF");
        rect(500,640,550,140);

        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(35)
        fill("white")
        text("MANI",250,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS ==4){
        textBubble.visible = false;
        
        countS2 +=1;
        if(countS2<=51){
          fill(color(0,0,0,countS2*5))
        }
        if(countS2>51 && countS2 <=81){
          fill(color(0,0,0,255))
          if(countS2 == 81){
            countS2 =100;
          }
        }
        if(countS2 > 100 && countS2 <= 151){
          fill(color(0,0,0,255-(countS2-100)*5))
          bg = bgi5;
        }
        
        rect(400,400,800,800);
        if(countS2 == 151){
          countS = 5;
          countS2 = 0;
        }
      }else if(countS == 5){
        bg = bgi5;
        countS2 += 1;
        if(countS2>=30){
          
          //left
          textBubble.visible = true;
          textBubble.x = 500;
          textBubble.addImage(text4);
          countS2 += 1

          image(arjuni,125,750);
          image(tagI,295,550,150,40);

          fill("#FFFFFFBF");
          rect(500,640,550,140);

          textStyle(BOLD)
          textFont("Tempest Apache");
          textSize(35)
          fill("white")
          text("ARJUN",240,558);

          if(countS2 > 45){
            if(mousePressedOver(canvas)||keyWentDown("space")){
              countS += 1;
              countS2 = 0;
            }
          }
        }

      }else if(countS == 6){
        //right
        bg = bgi5;
        countS2 +=1
        textBubble.visible = true;
        textBubble.x = 300;
        textBubble.addImage(text5);

        image(manii,675,750);
        image(tagI,505,550,150,40);

        fill("#FFFFFFBF");
        rect(300,640,550,140);
        
        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(35)
        fill("white")
        text("MANI",460,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS ==7){
        textBubble.visible = false;
        bg = bgi5;
        countS2 +=1;
        if(countS2<=51){
          tint(255,countS2*12.5);
          image(bgi5Hologram,400,400,800,800);
        }
        if(countS2 == 51){
          countS = 8;
          countS2 = 0
        }
      }else if(countS == 8){
        //left
        bg = bgi5Hologram;
        textBubble.visible = true;
        textBubble.x = 500;
        textBubble.addImage(text6);
        countS2 += 1

        image(saii,125,750);
        image(tagI,295,550,150,40);

        fill("#FFFFFFBF");
        rect(500,640,550,140);

        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(35)
        fill("white")
        text("SAI",265,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS == 9){
        //right
        bg = bgi5;
        countS2 +=1
        textBubble.visible = true;
        textBubble.x = 300;
        textBubble.addImage(text7);

        image(hologrami,700,710);
        image(tagI,505,550,150,40);

        fill("#FFFFFFBF");
        rect(300,640,550,140);
        
        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(30)
        fill("white")
        text("KRYPNOT",437,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS == 10){
        //left
        bg = bgi5;
        textBubble.visible = true;
        textBubble.x = 500;
        textBubble.addImage(text8);
        countS2 += 1

        image(manii,125,750);
        image(tagI,295,550,150,40);

        fill("#FFFFFFBF");
        rect(500,640,550,140);

        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(35)
        fill("white")
        text("MANI",250,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS == 11){
        //right
        bg = bgi5;
        countS2 +=1
        textBubble.visible = true;
        textBubble.x = 300;
        textBubble.addImage(text9);

        image(hologrami,700,710);
        image(tagI,505,550,150,40);

        fill("#FFFFFFBF");
        rect(300,640,550,140);
        
        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(30)
        fill("white")
        text("KRYPNOT",437,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS == 12){
        //right
        bg = bgi5;
        countS2 +=1
        textBubble.visible = true;
        textBubble.x = 300;
        textBubble.addImage(text10);

        image(hologrami,700,710);
        image(tagI,505,550,150,40);

        fill("#FFFFFFBF");
        rect(300,640,550,140);
        
        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(30)
        fill("white")
        text("KRYPNOT",437,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS == 13){
        bg = bgi5;
        countS2 += 1;
        //left
        textBubble.visible = true;
        textBubble.x = 500;
        textBubble.addImage(text11);
        countS2 += 1

        image(arjuni,125,750);
        image(tagI,295,550,150,40);

        fill("#FFFFFFBF");
        rect(500,640,550,140);

        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(35)
        fill("white")
        text("ARJUN",240,558);

        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS == 14){
        //right
        bg = bgi5;
        countS2 +=1
        textBubble.visible = true;
        textBubble.x = 300;
        textBubble.addImage(text12);

        image(hologrami,700,710);
        image(tagI,505,550,150,40);

        fill("#FFFFFFBF");
        rect(300,640,550,140);
        
        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(30)
        fill("white")
        text("KRYPNOT",437,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS == 15){
        //left
        bg = bgi5;
        textBubble.visible = true;
        textBubble.x = 500;
        textBubble.addImage(text13);
        countS2 += 1

        image(saii,125,750);
        image(tagI,295,550,150,40);

        fill("#FFFFFFBF");
        rect(500,640,550,140);

        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(35)
        fill("white")
        text("SAI",265,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS == 16){
        //right
        bg = bgi5;
        countS2 +=1
        textBubble.visible = true;
        textBubble.x = 300;
        textBubble.addImage(text14);

        image(hologrami,700,710);
        image(tagI,505,550,150,40);

        fill("#FFFFFFBF");
        rect(300,640,550,140);
        
        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(30)
        fill("white")
        text("KRYPNOT",437,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS == 17){
        bg = bgi5;
        countS2 += 1;
        //left
        textBubble.visible = true;
        textBubble.x = 500;
        textBubble.addImage(text15);
        countS2 += 1

        image(arjuni,125,750);
        image(tagI,295,550,150,40);

        fill("#FFFFFFBF");
        rect(500,640,550,140);

        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(35)
        fill("white")
        text("ARJUN",240,558);

        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            //gameState1 = 2;
            textBubble.visible = false;
            countS =18;
            countS2 = 0;
          }
        }
      }else if(countS == 18){
        bg = bgi6;
        countS2 += 1;
        //left
        if(countS2 >30){
          textBubble.visible = true;
          textBubble.x = 500;
          textBubble.addImage(text16);
          countS2 += 1

          image(saii,125,750);
          image(tagI,295,550,150,40);

          fill("#FFFFFFBF");
          rect(500,640,550,140);

          textStyle(BOLD)
          textFont("Tempest Apache");
          textSize(35)
          fill("white")
          text("SAI",265,558);

          if(countS2 > 45){
            if(mousePressedOver(canvas)||keyWentDown("space")){
              countS =19;
              countS2 = 0;
            }
          }
        }
      }else if(countS == 19){
        //right
        bg = bgi6;
        countS2 +=1
        textBubble.visible = true;
        textBubble.x = 300;
        textBubble.addImage(text17);

        image(hologrami,700,710);
        image(tagI,505,550,150,40);

        fill("#FFFFFFBF");
        rect(300,640,550,140);
        
        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(30)
        fill("white")
        text("KRYPNOT",437,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS == 20){
        //right
        bg = bgi6;
        countS2 +=1
        textBubble.visible = true;
        textBubble.x = 300;
        textBubble.addImage(text18);

        image(hologrami,700,710);
        image(tagI,505,550,150,40);

        fill("#FFFFFFBF");
        rect(300,640,550,140);
        
        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(30)
        fill("white")
        text("KRYPNOT",437,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS == 21){
        //left
        bg = bgi6;
        textBubble.visible = true;
        textBubble.x = 500;
        textBubble.addImage(text19);
        countS2 += 1

        image(manii,125,750);
        image(tagI,295,550,150,40);

        fill("#FFFFFFBF");
        rect(500,640,550,140);

        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(35)
        fill("white")
        text("MANI",250,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS ==22){
        textBubble.visible = false;
        bg = bgi6;
        countS2 +=1;
        if(countS2<=51){
          fill(color(0,0,0,countS2*5))
        }
        if(countS2>51 && countS2 <=81){
         
          fill(color(0,0,0,255));
          if(countS2 == 81){
            countS2 =100;
          }
        }
        if(countS2 > 100 && countS2 <= 151){
          fill(color(0,0,0,255-(countS2-100)*5))
          bg = bgi6;
        }
        
        rect(400,400,800,800);
         if(countS2>51 && countS2 <=81){
          textSize(30);
          fill("white");
          textFont("SPACE RANGER")
          text("Few hours later",275,415);
        }
        if(countS2 == 151){
          countS = 23;
          countS2 = 0;
        }
      }else if(countS == 23){
        bg = bgi6;
        countS2 += 1;
        //left
        textBubble.visible = true;
        textBubble.x = 500;
        textBubble.addImage(text20);
        countS2 += 1

        image(cybertronRSI,140,750,495,600);
        image(tagI,295,550,150,40);

        fill("#FFFFFFBF");
        rect(500,640,550,140);

        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(35)
        fill("white")
        text("ARJUN",240,558);

        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            //gameState1 = 2;
            textBubble.visible = false;
            countS =24;
            countS2 = 0;
          }
        }
      }else if(countS == 24){
        //left
        bg = bgi6;
        textBubble.visible = true;
        textBubble.x = 500;
        textBubble.addImage(text21);
        countS2 += 1

        image(cybertronBSI,140,750,495,600);
        image(tagI,295,550,150,40);

        fill("#FFFFFFBF");
        rect(500,640,550,140);

        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(35)
        fill("white")
        text("MANI",250,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS == 25){
        //right
        bg = bgi6;
        countS2 +=1
        textBubble.visible = true;
        textBubble.x = 300;
        textBubble.addImage(text22);

        image(hologrami,700,710);
        image(tagI,505,550,150,40);

        fill("#FFFFFFBF");
        rect(300,640,550,140);
        
        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(30)
        fill("white")
        text("KRYPNOT",437,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS = 26;
            countS2 = 0;
          }
        }
      }else if(countS == 26){
        bg = bgi6;
        countS2 += 1;
        //left
        textBubble.visible = true;
        textBubble.x = 500;
        textBubble.addImage(text23);
        countS2 += 1

        image(cybertronYSI,140,750,495,600);
        image(tagI,295,550,150,40);

        fill("#FFFFFFBF");
        rect(500,640,550,140);

        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(35)
        fill("white")
        text("SAI",265,558);

        if(countS2 > 45){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS =27;
            countS2 = 0;
          }
        }
      }else if(countS == 27){
        //right
        bg = bgi6;
        countS2 +=1
        textBubble.visible = true;
        textBubble.x = 300;
        textBubble.addImage(text24);

        image(hologrami,700,710);
        image(tagI,505,550,150,40);

        fill("#FFFFFFBF");
        rect(300,640,550,140);
        
        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(30)
        fill("white")
        text("KRYPNOT",437,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            skip_button.visible = false;
            gameState1 = 2;
            textBubble.visible = false;
            countS = 0;
            countS2 = 0;
          }
        }
      }

      if(mousePressedOver(skip_button)){
          skip_button.visible = false;
          gameState1 = 2;
          textBubble.visible = false;
          countS = 0;
          countS2 = 0;
        }
      drawSprites();
    }
}