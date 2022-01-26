const { DiscordAPIError } = require('Discord.js');
const fs = require('fs');
const config = require("./../Other/config.js");

module.exports = (client, Discord) =>{
    const command_files = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));

    for(const file of command_files){
        const command = require(`../Commands/${file}`);
        if(command.name){
            client.commands.set(command.name, command);
        } else {
            continue;
        }
    }
}