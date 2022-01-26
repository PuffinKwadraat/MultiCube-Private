const config = require("./../Other/config.js");

module.exports = {
  name: "unblind",
  aliases: config.aliases.aliasesunblind,
  cooldown: config.cooldown.cooldownunblind,
  permissions: config.permissions.permissionunblind,
  description: "This command unblinds members.",
  execute(message, args, cmd, client, Discord) {
    const target = message.mentions.users.first();
    if (target) {
      let mainRole = message.guild.roles.cache.find(
        (role) => role.name === config.base.basemainrole
      );
      let blindRole = message.guild.roles.cache.find(
        (role) => role.name === config.base.baseblindrole
      );

      let memberTarget = message.guild.members.cache.get(target.id);

      memberTarget.roles.remove(blindRole.id);
      memberTarget.roles.add(mainRole.id);
      message.channel.send(
        `<@${memberTarget.user.id}> has been succesfully unblinded. Welcome back!`
      );
    } else {
      message.channel.send(config.basemessages.messagesfinderror);
    }
  },
};