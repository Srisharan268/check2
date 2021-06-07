class Form{
    constructor(){
        this.host;
        this.hostb;
        this.join;
        this.joinb;
        this.nameI;
        this.codeI;
        this.button;
        this.button2;
        this.pos = displayWidth/2;
    }

    display(){
        
        
        
        this.host = createImg("./images/start_button_1.png");
        //this.host.style("marginLeft","100px");
        //this.host.style("marginRight","auto");
        this.host.style('width','208px');
        this.host.style('hight','90px');
        this.host.hide();
        this.hostb = createButton('host');
        this.hostb.style('font-family','SPACE RANGER');
        this.hostb.style('width','208px');
        this.hostb.style('height','90px');
        this.hostb.style('color','#DADEDD');
        this.hostb.style('font-size','49px');
        this.hostb.style('background',color(0,0,0,0));
        this.hostb.style('border-width','0px');
        this.hostb.hide();
        this.hostb.mousePressed(()=>{
            gameState0 = 2;
            game.createGame();
        })

        this.join = createImg("./images/start_button_1.png");
        this.join.style('width','208px');
        this.join.style('hight','90px');
        this.join.hide();
        this.joinb = createButton('join');
        this.joinb.style('font-family','SPACE RANGER');
        this.joinb.style('width','208px');
        this.joinb.style('height','90px');
        this.joinb.style('color','#DADEDD');
        this.joinb.style('font-size','49px');
        this.joinb.style('background',color(0,0,0,0));
        this.joinb.style('border-width','0px');
        this.joinb.hide();
        this.joinb.mousePressed(()=>{
            gameState0 = 3;
        })

        this.nameI = createInput('Name');
        this.nameI.hide();
        this.nameI.style('font-size','20px');
        this.nameI.style('background',color(255,255,255,200));
        this.nameI.style('border-width','5px');
        this.nameI.style('color','grey');

        this.codeI = createInput('bdnnd');
        this.codeI.hide();
        this.codeI.style('font-size','20px');
        this.codeI.style('background',color(255,255,255,200));
        this.codeI.style('border-width','5px');
        this.codeI.style('color','grey');

        this.button2 = createButton('Join');
        this.button2.hide();
        this.button2.style('font-size','20px');
        this.button2.style('background',color(255,255,255,200));
        this.button2.style('border-width','5px');

        this.button2.mousePressed(()=>{
            codeEntered = this.codeI.value();
            game.joinGame();
        })

    }

    hostPressed(){
        textSize(30);
        fill("white");
        push();
        textFont("SPACE RANGER")
        text('The Code For Your Game Is : ',120,300);
        pop();
        text('" '+randomCode+' "',590,300);
        
        this.button2.position(785,500);
        this.codeI.position(585,450);
        this.nameI.position(585,400);
        this.nameI.show();
        this.codeI.show();
        this.button2.show();
        this.hostb.hide();
        this.host.hide();
        this.joinb.hide();
        this.join.hide();
        if(mousePressedOver(backButton)){
            gameState0 = 1;
            this.nameI.hide();
            this.codeI.hide();
            this.button2.hide();
        }
    }

    joinPressed(){
        this.button2.position(785,450);
        this.codeI.position(585,400);
        this.nameI.position(585,350);
         
        this.nameI.show();
        this.button2.show();
        this.codeI.show();
        this.hostb.hide();
        this.host.hide();
        this.joinb.hide();
        this.join.hide();
        if(mousePressedOver(backButton)){
            gameState0 = 1;
            this.nameI.hide();
            this.codeI.hide();
            this.button2.hide();
        }
    }

    choose(){
        this.host.position(this.pos-104,290);
        this.hostb.position(this.pos-104,290);
        this.join.position(this.pos-104,420);
        this.joinb.position(this.pos-104,420);
        this.host.show();
        this.hostb.show();
        this.join.show();
        this.joinb.show();
        //console.log(canvaso.marginLeft)
    }   

    

}
/*class Level{
    constructor(){};

    
}*/