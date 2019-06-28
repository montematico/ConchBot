//conchbot replies with no

const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()

client.on('ready', () => {
  console.log('Logged in');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message ends with ? reponds with no or ask again
  if (message.content.endsWith('?')) {
    if (Math.floor((Math.random() * 10) + 1) == 5) {
      message.channel.send('Try asking again.');
    } else {
      message.channel.send('no.');
    }
  }
});


client.login(process.env.token);
require('http').createServer().listen(3000)