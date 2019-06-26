//conchbot replies with no

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
  console.log('I am ready!');
});

var uses = 0 //Says how many times to bot has answered a question since it last stopped


// Create an event listener for messages
client.on('message', message =>
{
  // If the message ends with ? reponds with no or ask again
  if (message.content.endsWith('?'))
  {
    //prints how many times to bot has been used
    uses += 1;
    console.log('Answered: ' + uses);

    if (Math.floor((Math.random() * 5) + 1) === 2)
    {
      message.channel.send('Try asking again.');
    } else
    {
      message.channel.send('no.');
    }
  }
});


client.login(config.token);
