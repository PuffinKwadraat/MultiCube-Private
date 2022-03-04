const profileModel = require("../models/profileSchema");
const config = require("./../Other/config.js");

module.exports = {
  name: "givewallet",
  aliases: config.aliases.aliasesgivewallet,
  cooldown: config.cooldown.cooldowngivewallet,
  permissions: config.permissions.permissiongivewallet,
  description: "Increase the balance of a member.",
  async execute(message, args, cmd, client, discord, profileData) {
    if (args[2] === "delete") {
      message.delete();
    } else if (args[2] === "del" || args[2] === "d") {
      message.delete();
    }

    if (!args[0]) {
      return message.channel.send({ content: config.basemessages.messagesmembermention})
    };
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send({ content: config.basemessages.messagesfinderror});

    if (amount <= 0)
      return message.channel.send({ content: config.basemessages.messagesgreaterone});

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send({ content: config.basemessages.messagesaccountmissing});
      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          $inc: {
            coins: amount,
          },
        }
      );

      return message.channel.send({ content: 
        `${message.author.username}, the targeted member has been given \`${amount}\` amount of coins.`
      });
    } catch (err) {
      console.log(err);
    }
  },
};