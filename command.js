const { REST, Routes } = require('discord.js');

const commands = [
    {
      name: 'create',
      description: 'create a short urls!',
    },
  ];

  const rest = new REST({ version: '10' }).setToken("MTI1MjE0OTY3NTQwNjkxNzY3NA.GNTU5z.aQI4tTAl-jfYzX6tPpXYaAl8a44rnmSSmRwKVg");
 (async () => {


  try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands("1252149675406917674"), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
  