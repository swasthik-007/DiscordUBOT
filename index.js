const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});


client.on("messageCreate", (message) => {
    if(message.author.bot) return;
     message.reply({
        content:"Hi From Bot !!"
     })
});
client.on('interactionCreate', (interaction) => {
    interaction.reply("pong!!")
})

client.login(
    "MTI0Njg5MDAzNjk5NDExNzY5Mg.GhBv2j.8-BGboLghJQ-uwkaU3eUyvUVgBaFvhcRXPqViQ"
)
