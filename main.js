const { Client, Intents, Message } = require('discord.js');
const config = require("./config.json");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
    console.log(`Estou conectado e operando corretamente!`);

    client.user.setActivity(`Estou atualmente em: ${client.guilds.cache.size} servidores!`);
});

client.on("guildCreate", guild => {
    console.log(`Fui adicionado ao servidor ${guild.name}`);
});

client.on("guildDelete", guild => {
    console.log(`Fui removido do servidor: ${guild.name}`);
}) 


client.on("messageCreate", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();



});

let damage;
let life;
const cardCollection = {
    archerCard: {
        damage: 10,
        life: 10,
    }
    
}

client.login(config.token);
