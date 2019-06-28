//conchbot replies with no

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
    console.log('I am ready!');
});

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
        console.log(time + '  ' +  today);

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
