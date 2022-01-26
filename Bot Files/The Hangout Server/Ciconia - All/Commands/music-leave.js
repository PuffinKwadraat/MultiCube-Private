const config = require("./../Other/config.js");

module.exports = {
  name: "leave",
  aliases: config.aliases.aliasesleave,
  cooldown: config.cooldown.cooldownleave,
  permissions: config.permissions.permissionleave,
  description: "Stop the music, and leave the call.",
  async execute(message, args, cmd, client, Discord) {
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel) return message.channel.send(config.basemessages.messagesvcrequired);
    await voiceChannel.leave();
    await message.channel.send(process.env.MSGLEAVE);
  },
};