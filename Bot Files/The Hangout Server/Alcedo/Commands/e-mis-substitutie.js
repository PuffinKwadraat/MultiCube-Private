const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "substitutie",
    aliases: config.aliases.aliasessubstitutie,
    cooldown: config.cooldown.cooldownsubstitutie,
    permissions: config.permissions.permissionsubstitutie,
    description: "Substitute",
    execute(message, args, cmd, client, Discord) {
    },
};
