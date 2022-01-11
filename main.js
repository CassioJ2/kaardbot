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
        description: "Atira flechas em seus inimigos.",
        imageURL: "https://media.discordapp.net/attachments/829414786311258162/930235268043251763/carta_1.png"
    },
    slaCard: {
        damage: 5,
        life: 20,
        description: "O cara é muito louco e dá porrada!",
        imageURL: "https://media.discordapp.net/attachments/829414786311258162/922665762060124190/BeKalletp2.jpg?width=676&height=676"
    }

    
}

client.login(config.token);
