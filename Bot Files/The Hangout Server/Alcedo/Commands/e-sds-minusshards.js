const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "minusshards",
    aliases: config.aliases.aliasesminusshards,
    cooldown: config.cooldown.cooldownminusshards,
    permissions: config.permissions.permissionminusshards,
    description: "Increase the amount of boxes of a member.",
    async execute(message, args, cmd, client, Discord, profileData) {
    },
};
