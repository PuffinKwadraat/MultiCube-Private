const config = require("../Other/config.js");

module.exports = {
    name: "testsuggestions",
    aliases: config.aliases.aliasestestsuggest,
    cooldown: config.cooldown.cooldowntestsuggest,
    permissions: config.permissions.permissiontestsuggest,
    description: "Test suggest something new in the dedicated channel.",
    async execute(message, args, cmd, client, Discord) {
        const channel = client.channels.cache.find(channel => channel.id === config.base.basebottestingthreechannelid)
        const messageArgs = args.join(' ');

        const embed = new MessageEmbed()
            .setColor(config.base.basecolor)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .addFields(
                {
                    name: `**New Suggestion**`,
                    value: `${messageArgs}`,
                })
            .setFooter(config.embed.embedfooter);
        channel.send(newEmbed).then((msg) => {
            msg.react('👍');
            msg.react('👎');
            message.channel.send({ content: `Test Suggestion sent in <#${config.base.basetestsuggestchannelid}>.`})
        });
    },
};