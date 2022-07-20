const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "serverip",
    aliases: config.aliases.aliasesserverip,
    cooldown: config.cooldown.cooldownserverip,
    permissions: config.permissions.permissionserverip,
    description: "Display the server IP and information for MultiCube.",
    execute(message, args, cmd, client, Discord) {
    },
};
