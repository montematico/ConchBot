const Discord = require('discord.js'); //npm install discord.js
const client = new Discord.Client();
const config = require('./config.json'); //Put config in same folder and rename if neccecary to "cofig.json"

var chance = 5 //Change this number to change how often it asks you to try again. default 5

client.on('ready', () => {
  console.log('I am ready!');
  //Tells you when the bot is connected to discord
});

var uses = 0 //Says how many times to bot has answered a question since it last stopped

//Gets date for logging
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
today = mm + '/' + dd + '/' + yyyy;

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
    console.log(time + today)

    if (Math.floor((Math.random() * chance) + 1) === 2)
    {
      message.channel.send('Try asking again.');
    } else {
      // If the message ends with ? reponds with no or ask again
      message.channel.send('no.');
    }
  }
});
client.login(config.token)
//MAKE SURE TOKEN DOES NOT GO PUBLIC IT WILL ALLOW PEOPLE TO TAKE FULL CONTROL OF YOUR BOT.
