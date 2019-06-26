//conchbot replies with no

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content.endsWith('?')) {
    if (Math.floor((Math.random() * 10) + 1) == 5) {
      message.channel.send('Try asking again.');
    } else {
      message.channel.send('no.');
    }
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NTkzMjMzNzEwODcxMDg1MDYz.XRK6sA.zzPg8bHQFBZcIIxqjYo30rZK9mI');
