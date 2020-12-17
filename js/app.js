const discord = require('discord.js');

const express = require('express');


var app = express();


const https = require('https');


const hook = new discord.WebhookClient('780585481062711296','CUtrPSMWPCognqDCGsaEDU1atODXM9UcKVnk4b6fjcLefoN8daZwrdO8JM0_T4_kN-cq');

const client = new discord.Client();


app.get('/discord-role/name=:name/game=:game/hash=:hash',function(req,res){

        console.log(req.params);
        var username = req.params.name;
        var game = req.params.game;
        var hash = req.params.hash;
        clickme(username,game,hash);
        res.send('Hello GUYS !');

});
        app.listen(81);

client.once('ready', () => {

        console.log('ULTRAFY WE ARE RUNNING PERFECTLY !!');
 
     
 
});


client.on('message', msg => {
        if (msg.content === 'ultrafy') {
          msg.reply('Ultrafy is the head developer of Astro Gaming !');
        }

        if(msg.content === 'pluto'){
                msg.reply('Pluto is the owner and developer of Astro Gaming !');
        }


        if(msg.content === 'website'){
                msg.reply('Our website developed by ultrafy, can be accessed by visiting the following link : http://astrogaming.co.za');
        }

        if(msg.content === '!website'){
                msg.reply('Our website developed by ultrafy, can be accessed by visiting the following link : http://astrogaming.co.za');
                
        }
      });

function clickme(username,game,hash){

        console.log('USERNAME ACCEPTED: ' + username);
        console.log('GAME CHOSEN: '  + game);
        console.log('DISCORD HASH IS: ' + hash);
        console.log('REQUEST SUBMITTED');
        console.log('-------------------------------------------');

try{
        hook.send(`${username}#${hash} Has requested the ${game} Role ! @Admin Please assist !!`);
}catch(error){
        console.log(error);
}
}


client.login('NzgwMjQ0ODYwNjE1MDAwMDY0.X7sRpw.BSO3FUqcHtKgselX88K64NuiyjA');
// Hello 



client.login('NzgwMjQ0ODYwNjE1MDAwMDY0.X7sRpw.BSO3FUqcHtKgselX88K64NuiyjA');


async function callfetch(){

        console.log('CALL FETCH FUNCTION HAS BEEN CALLED SUCCESFULLY');

        let getdiscord = prompt('Please enter Discord Username');
        let gethash = prompt('Enter Discord # Please !');
        let getGame = prompt('Rust or GTA ?');

        try{
                const response = await fetch("http://localhost:81/discord-role/name="+ getdiscord + "/game=" + getGame + "/hash=" +gethash,{
                method: "GET"
                });
                
        }catch(error){
                console.log('ERROR FOUND ' + error);
        }
}

