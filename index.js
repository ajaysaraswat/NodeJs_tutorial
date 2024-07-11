const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents:
 [GatewayIntentBits.Guilds,
 GatewayIntentBits.GuildMessages,
 GatewayIntentBits.MessageContent,
] });
// main
client.on("messageCreate",(message)=>{
    if(message.author.bot) return;
    if(message.content.startsWith("create")){
        const url = message.content.split("create")[1];
        return message.reply({
            content : "generating short id for "+ url,
        })
    }
message.reply({
    
content : "hii from bot",
})
});

client.on("interactionCreate",interaction => {
    interaction.reply("pong !!");
})

client.login(
    "MTI1MjE0OTY3NTQwNjkxNzY3NA.GNTU5z.aQI4tTAl-jfYzX6tPpXYaAl8a44rnmSSmRwKVg"
);