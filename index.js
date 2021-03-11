const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

function losuj(){
    var _list = "abcdefghijklmnopqrstuvwxyz-1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var tmp = '', i = 0;
    var list_len = _list.length;
	var ilo = 16;

        for (i=0;i<ilo;i++) {
            tmp += _list.charAt(Math.floor(Math.random()*list_len));
        }
    
    return tmp;
    }

function gp(){
    var _list1 = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var tmp1 = '', i = 0;
    var list_len1 = _list1.length;
	var ilo1 = 4;

        for (i=0;i<ilo1;i++) {
            tmp1 += _list1.charAt(Math.floor(Math.random()*list_len1));
        }
    
    return tmp1;
    }

function psc(){
    let xa = Math.floor(Math.random() * 10);
    return xa;
}

let result = Math.random().toString(36).substring(2,7);

client.on('message', async message => {
    if (message.content === (`${prefix}gp`)) {
        message.author.send(`O to twoje wygenerowane kody:`);
        message.author.send(`  ${gp()} ${gp()} ${gp()} ${gp()} `);
        message.author.send(`  ${gp()} ${gp()} ${gp()} ${gp()} `);
        message.author.send(`  ${gp()} ${gp()} ${gp()} ${gp()} `);
        message.author.send(`  ${gp()} ${gp()} ${gp()} ${gp()} `);
        message.author.send(`  ${gp()} ${gp()} ${gp()} ${gp()} `);
        message.author.send(`  ${gp()} ${gp()} ${gp()} ${gp()} `);
        message.author.send(`  ${gp()} ${gp()} ${gp()} ${gp()} `);
        message.author.send(`  ${gp()} ${gp()} ${gp()} ${gp()} `);
        message.author.send(`  ${gp()} ${gp()} ${gp()} ${gp()} `);
        message.author.send(`  ${gp()} ${gp()} ${gp()} ${gp()} `);
        message.reply(`sprawdź PV!`);
    }
	if (message.content === (`${prefix}psc`)) {
        message.author.send(`O to twoje wygenerowane kody:`);
        message.author.send(` 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}  `);
        message.author.send(` 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}  `);
        message.author.send(` 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}  `);
        message.author.send(` 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}  `);
        message.author.send(` 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}  `);
        message.author.send(` 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}  `);
        message.author.send(` 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}  `);
        message.author.send(` 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}  `);
        message.author.send(` 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}  `);
        message.author.send(` 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}  `);
        message.author.send(` 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}  `);
        message.author.send(` 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}${psc()}  `);
        message.reply(`sprawdź PV!`);
    }
	if (message.content === (`${prefix}nitro`)) {
        message.author.send(`O to twoje wygenerowane kody:`);
        message.author.send(` discord.gift/${losuj()}  `);
        message.author.send(` discord.gift/${losuj()}  `);
        message.author.send(` discord.gift/${losuj()}  `);
        message.author.send(` discord.gift/${losuj()}  `);
        message.author.send(` discord.gift/${losuj()}  `);
        message.author.send(` discord.gift/${losuj()}  `);
        message.author.send(` discord.gift/${losuj()}  `);
        message.author.send(` discord.gift/${losuj()}  `);
        message.author.send(` discord.gift/${losuj()}  `);
        message.author.send(` discord.gift/${losuj()}  `);
        message.reply(`sprawdź PV!`);
	}
});

client.login(process.env.TOKEN_BOT);

