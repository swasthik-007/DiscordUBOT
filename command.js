const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken("MTI0Njg5MDAzNjk5NDExNzY5Mg.GhBv2j.8-BGboLghJQ-uwkaU3eUyvUVgBaFvhcRXPqViQ");
(async()=>{

    try {
        console.log('Started refreshing application (/) commands.');
        
        await rest.put(Routes.applicationCommands(1246890036994117692), { body: commands });
        
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();