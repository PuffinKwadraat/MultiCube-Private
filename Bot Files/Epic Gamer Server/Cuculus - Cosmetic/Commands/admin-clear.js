module.exports = {
  name: "clear",
  aliases: ["bulkdelete", "bulkdel"],
  cooldown: process.env.ASADMIN,
  permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES"],
  description: "Bulk delete messages.",
  async execute(message, args, cmd, client, Discord) {

    const max = process.env.MAXCLEAR
    const min = process.env.MINCLEAR

    if (!args[0]) return message.channel.send(process.env.MSGCLEARAMOUNTMISSING);
    if (isNaN(args[0])) return message.channel.send(process.env.MSGISNAN);

    if (args[0] > max) return message.channel.send(`You cannot clear more than ${max} messages in one command.`);
    if (args[0] < min) return message.channel.send(process.env.MSGGREATERONE);

    await message.channel.messages
      .fetch({ limit: args[0] })
      .then((messages) => {
        message.channel.bulkDelete(messages);
      });
  },
};