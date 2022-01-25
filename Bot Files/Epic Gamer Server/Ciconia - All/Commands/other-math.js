const math = require("mathjs");
const config = require("./../Other/config.js");

module.exports = {
  name: "mathematics",
  aliases: config.aliases.aliasesmath,
  cooldown: config.cooldown.cooldownmath,
  permissions: config.permissions.permissionmath,
  description: "Basic calculation.",
  execute(message, args, cmd, client, Discord) {
    try {
      const newEmbed = new Discord.MessageEmbed()
        .setColor(config.base.basecolor)
        .setTitle(`Calculator`)
        .setImage(config.embed.embedimage)
        .setDescription("Here is the answer to your question:")
        .addFields(
          {
            name: "Your question:",
            value: args.join(""),
          },
          {
            name: "Answer:",
            value: Math.round(math.evaluate(args.join(" ")) * 100) / 100,
          }
        )
        .setFooter(config.embed.embedfooter);

      message.channel.send(newEmbed);
    } catch (err) {
      message.channel.send("I don't understand your question.");
    }
  },
};