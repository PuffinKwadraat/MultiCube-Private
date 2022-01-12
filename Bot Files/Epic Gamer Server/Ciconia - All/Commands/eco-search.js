const profileModel = require("../models/profileSchema");
module.exports = {
  name: "search",
  aliases: ["srch"],
  cooldown: process.env.DAILY,
  permissions: ["SEND_MESSAGES"],
  description: "Search for some coins. Kinda a second daily reward.",
  async execute(message, args, cmd, client, discord, profileData) {
    const locations = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
      "48",
      "49",
      "50",
    ];

    const chosenLocations = locations
      .sort(() => Math.random() - Math.random())
      .slice(0, 3);

    const filter = ({ author, content }) =>
      message.author == author &&
      chosenLocations.some(
        (location) => location.toLowerCase() == content.toLowerCase()
      );

    const collector = message.channel.createMessageCollector(filter, {
      max: 1,
      time: 25000,
    });

    const earnings = Math.floor(Math.random() * (100 - 10 + 1)) + 10;

    collector.on("collect", async (m) => {
      message.channel.send(
        `You found \`${earnings}\` coins! Congratulations! Be sure to come back tomorrow!`
      );

      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: earnings,
          },
        }
      );
    });

    collector.on("end", (collected, reason) => {
      if (reason == "time") {
        message.channel.send(process.env.MSGSEARCHTIMESTOP);
      }
    });

    message.channel.send(
      `<@${
        message.author.id
      }> What number do you choose?\n Type your decision in this channel.\n Note that there is a time limit!\n \`${chosenLocations.join(
        "` `"
      )}\``
    );
  },
};