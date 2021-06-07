class Game{
    constructor(){}

    getState(){
        database.ref("games/"+reference+"/gameState").on("value",(data)=>{
            gameState = data.val();
        })
    }

    update(state){
        database.ref('games/'+reference).update({
        gameState: state
        });
    }

    async start(){
        player = new Player();
        player.name = form.nameI.value();
        var playerCountRef = await database.ref('games/'+reference+'/playerCount').once("value");
        if(playerCountRef.exists()){
            player.getCount();
        }
        Player.getPlayerInfo();
    }

    createForm(){
        form = new Form();
        form.display();
    }

    createGame(){
        console.log(randomCode);
        database.ref("games/"+randomCode).set({
            playerCount: 0,
            roles : charectersArray,
            gameState: 0,
            level1: {
                players_joined: 0,
                damageReceivedA: 0,
                damageReceivedD: 0,
                players_done: 0

            }
        })
    }

    getDamageA(){
        database.ref("games/"+reference+"/level1/damageReceivedA").on("value",(data)=>{
            spaceshipDamage = data.val()
        })
    }
    getDamageD(){
        database.ref("games/"+reference+"/level1/damageReceivedD").on("value",(data)=>{
            spaceshipDamage = data.val()
        })
    }
    getTotalDamage(){
        database.ref("games/"+reference+"/level1/damageReceivedD").on("value",(data)=>{
            spaceshipDamageMD = data.val()
        })
        database.ref("games/"+reference+"/level1/damageReceivedA").on("value",(data)=>{
            spaceshipDamageMA = data.val()
        })
        //spaceshipDamage = spaceshipDamageMD+spaceshipDamageMA;
    }
    updateDamageA(value){

        database.ref("games/"+reference+"/level1").update({
            damageReceivedA: value
        })
    }

    updateDamageD(value1){

        database.ref("games/"+reference+"/level1").update({
            damageReceivedD: value1
        })
    }

    joinGame(){
        database.ref('games').once("value",(data)=>{
            if(data.hasChild(codeEntered)){
                reference = codeEntered;
                gameState0 = 4;
                form.button2.hide();
                form.nameI.hide();
                form.codeI.hide();
                game.start(); 
                
            }else{
                alert("Couldn't find the game you are looking for");
            }
        })
    }
}