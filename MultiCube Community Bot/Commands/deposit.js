const profileModel = require("../models/profileSchema");
module.exports = {
  name: "deposit",
  permissions: ["SEND_MESSAGES"],
  description: "Wallet to Bank",
  async execute(message, args, cmd, client, discord, profileData) {
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Amount must be a whole number, and it cannot be negative.");
    try {
      if (amount > profileData.coins) return message.channel.send(`You don't have that amount of coins to deposit.`);
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: -amount,
            bank: amount,
          },
        }
      );

      return message.channel.send(`You deposited \`${amount}\` of coins into your bank account. Before executing this command, you had \`${profileData.bank}\` coins in your bank account, and \`${profileData.coins}\` in your wallet.`);
    } catch (err) {
      console.log(err);
    }
  },
};