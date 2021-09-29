const profileModel = require("../models/profileSchema");
module.exports = {
  name: "setexperience",
  aliases: ['setexp', 'setxp'],
  cooldown: process.env.ASADMIN,
  permissions: ["ADMINISTRATOR"],
  description: "Reset the experience of a member.",
  async execute(message, args, cmd, client, discord, profileData) {
    if (!args.length) return message.channel.send("You need to mention a player to set their experience.");
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send("That user is not in this Discord server.");

    if (amount < 0) return message.channel.send("Set amount must be greater than -1.");

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(`This user does not have an account yet.`);
      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          $set: {
            experience: amount,
          },
        }
      );

      return message.channel.send(`${message.author.username}, the targeted member's experience is now \`${amount}\`.`);
    } catch (err) {
      console.log(err);
    }
  },
};