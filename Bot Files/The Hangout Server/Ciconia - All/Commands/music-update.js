const config = require("../Other/config.js");
const musicModel = require("../models/musicSchema");

module.exports = {
    name: "update",
    aliases: config.aliases.aliasesupdate,
    cooldown: config.cooldown.cooldownmusic,
    permissions: config.permissions.permissionmusic,
    description: "Update your music library.",
    async execute(message, args, cmd, client, Discord, ecoData) {
        const max = 6
        const link = args[1]
        const songid = Math.round(args[0])
        if (args[0] > max) {
            return message.channel.send(`You can only store up to \`${max}\` songs. Please choose a song you would like to update between \`1\` and \`6\`.`)
        } else if (args[0] <= 0) {
            return message.channel.send(`You can only store up to \`${max}\` songs. Please choose a song you would like to update between \`1\` and \`6\`.`)
        } else {

            if (!args[0]) {
                return message.channel.send(`You are missing the song you would like to update.`)
            } else if (!args[1]) {
                return message.channel.send(`You are missing your new YouTube link.`)
            } else if (args[0] === isNaN) {
                return message.channel.send(`Please choose a song you would like to update between \`1\` and \`6\`.`)
            } else {

                if (!link.startsWith(`https://www.youtube.com/watch?v=`)) {
                    return message.channel.send(`Wrong link format used. Use: \`https://www.youtube.com/watch?v=\`.`)
                } else {
                    if (args[1] === musicData.music1) {
                        return message.channel.send(`You already have stored this song: \`Song 1\`.`)
                    } else if (args[1] === musicData.music2) {
                        return message.channel.send(`You already have stored this song: \`Song 2\`.`)
                    } else if (args[1] === musicData.music3) {
                        return message.channel.send(`You already have stored this song: \`Song 3\`.`)
                    } else if (args[1] === musicData.music4) {
                        return message.channel.send(`You already have stored this song: \`Song 4\`.`)
                    } else if (args[1] === musicData.music5) {
                        return message.channel.send(`You already have stored this song: \`Song 5\`.`)
                    } else if (args[1] === musicData.music6) {
                        return message.channel.send(`You already have stored this song: \`Song 6\`.`)
                    } else {
                        if (args[0] === "1") {
                            try {
                                await musicModel.findOneAndUpdate(
                                    {
                                        userID: message.author.id,
                                    },
                                    {
                                        $set: {
                                            music1: args[1],
                                        },
                                    }
                                );
                                message.channel.send(`Your music library is succesfully updated.`)
                            } catch (err) {
                                console.log(err);
                                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
                            }
                        } else if (args[0] === "2") {
                            try {
                                await musicModel.findOneAndUpdate(
                                    {
                                        userID: message.author.id,
                                    },
                                    {
                                        $set: {
                                            music2: args[1],
                                        },
                                    }
                                );
                                message.channel.send(`Your music library is succesfully updated.`)
                            } catch (err) {
                                console.log(err);
                                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
                            }
                        } else if (args[0] === "3") {
                            try {
                                await musicModel.findOneAndUpdate(
                                    {
                                        userID: message.author.id,
                                    },
                                    {
                                        $set: {
                                            music3: args[1],
                                        },
                                    }
                                );
                                message.channel.send(`Your music library is succesfully updated.`)
                            } catch (err) {
                                console.log(err);
                                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
                            }
                        } else if (args[0] === "4") {
                            try {
                                await musicModel.findOneAndUpdate(
                                    {
                                        userID: message.author.id,
                                    },
                                    {
                                        $set: {
                                            music4: args[1],
                                        },
                                    }
                                );
                                message.channel.send(`Your music library is succesfully updated.`)
                            } catch (err) {
                                console.log(err);
                                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
                            }
                        } else if (args[0] === "5") {
                            try {
                                await musicModel.findOneAndUpdate(
                                    {
                                        userID: message.author.id,
                                    },
                                    {
                                        $set: {
                                            music5: args[1],
                                        },
                                    }
                                );
                                message.channel.send(`Your music library is succesfully updated.`)
                            } catch (err) {
                                console.log(err);
                                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
                            }
                        } else if (args[0] === "6") {
                            try {
                                await musicModel.findOneAndUpdate(
                                    {
                                        userID: message.author.id,
                                    },
                                    {
                                        $set: {
                                            music6: args[1],
                                        },
                                    }
                                );
                                message.channel.send(`Your music library is succesfully updated.`)
                            } catch (err) {
                                console.log(err);
                                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
                            }
                        }
                    }
                }
            }
        }
    }
}