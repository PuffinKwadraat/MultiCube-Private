module.exports = {
  name: "ticket",
  aliases: ['tkt'],
  cooldown: process.env.ASEXT,
  permissions: ["SEND_MESSAGES"],
  description: "Open a support ticket. Private talk to a staff member.",
  async execute(message, args, cmd, client, Discord) {
    const channel = await message.guild.channels.create(
      `ticket: ${message.author.tag}`
    );

    channel.setParent(process.env.TICKETGROUP);

    channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGE: false,
      VIEW_CHANNEL: false,
    });
    channel.updateOverwrite(message.author, {
      SEND_MESSAGE: true,
      VIEW_CHANNEL: true,
    });

    const reactionMessage = await channel.send(
      "Thank you for contacting support!"
    );

    try {
      await reactionMessage.react("🔒");
      await reactionMessage.react("⛔");
    } catch (err) {
      channel.send("Error with the emoji!");
      throw err;
    }

    const collector = reactionMessage.createReactionCollector(
      (reaction, user) =>
        message.guild.members.cache
          .find((member) => member.id === user.id)
          .hasPermission("ADMINISTRATOR"),
      { dispose: true }
    );

    collector.on("collect", (reaction, user) => {
      switch (reaction.emoji.name) {
        case "🔒":
          channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
          break;
        case "⛔":
          channel.send("Deleting this channel in 5 seconds!");
          setTimeout(() => channel.delete(), 5000);
          break;
      }
    });

    message.channel
      .send(`We will be right with you! ${channel}`)
      .catch((err) => {
        throw err;
      });
  },
};