// Koop iets op de markt.

const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

module.exports = {
    name: "tradingbuy",
    aliases: config.aliases.aliasestradingbuy,
    cooldown: config.cooldown.cooldowntradingbuy,
    permissions: config.permissions.permissiontradingbuy,
    description: "Buy something on the market.",
    async execute(message, args, cmd, client, Discord, profileData) {
        try {
            const materiallist = [
                "steel",
                "steelpart",
                "iron",
                "carbon",
                "brick",
                "clay",
                "soil",
                "water",
                "woodplank",
                "woodpart",
                "wood",
                "log",
                "bamboo",
                "pipe",
                "plasticpart",
                "plastic",
                "glass",
                "limestone",
                "sand",
                "plexiglass",
                "granite",
                "marble",
                "quartz",
                "chalk",
                "slate",
                "basalt",
                "oil",
                "coal",
                "ironore",
                "copperore",
                "goldore",
                "gas",
                "ceramic",
                "cork",
                "mesh",
                "rubber",
                "uranium",
                "rice",
                "rye",
                "oats",
                "corn",
                "barley",
                "cassava",
                "soybean",
                "sorghum",
                "wheat",
                "resin",
                "tape",
                "glue",
                "paper",
                "steelsheet",
                "cocoabean",
                "coffeebean",
                "sugar",
                "salt",
                "flower",
                "bakingpowder",
                "egg",
                "fish",
                "meat",
                "bread",
                "asparagus",
                "eggplant",
                "broccoli",
                "cabbage",
                "avocado",
                "brusselssprout",
                "carrot",
                "beetroot",
                "garlic",
                "celery",
                "cucumber",
                "greenbean",
                "leek",
                "lettuce",
                "mushroom",
                "onion",
                "pea",
                "pumpkin",
                "radish",
                "rhubarb",
                "sweetpepper",
                "spinach",
                "tomato",
                "sweetpotato",
                "yam",
                "potato",
                "acerola",
                "apple",
                "apricot",
                "banana",
                "blackberry",
                "blackcurrant",
                "blueberry",
                "breadfruit",
                "cantaloupe",
                "cherry",
                "clementine",
                "coconut",
                "cranberry",
                "datefruit",
                "fig",
                "gooseberry",
                "grapefruit",
                "grape",
                "guava",
                "honeydewmelon",
                "jackfruit",
                "jujubefruit",
                "kiwifruit",
                "kumquat",
                "lemon",
                "lime",
                "lychee",
                "mandarin",
                "mango",
                "mulberry",
                "olive",
                "orange",
                "papaya",
                "passionfruit",
                "peach",
                "pear",
                "dragonfruit",
                "pineapple",
                "plum",
                "pomegranate",
                "prune",
                "raspberry",
                "strawberry",
                "tangerine",
                "watermelon",
                "blackbean",
                "blackeyedpea",
                "cannellinibean",
                "chickpea",
                "greatnorthernbean",
                "kidneybean",
                "limabean",
                "pintobean",
                "favabean",
                "navybean",
                "adzukibean",
                "edamame",
                "mungbean",
                "cranberrybean",
                "thyme",
                "basil",
                "oregano",
                "rosemary",
                "fennelseed",
                "bayleaf",
                "chilipowder",
                "smokedpaprika",
                "cayenne",
                "cumin",
                "groundcardamom",
                "currypowder",
                "onionpowder",
                "garlicpowder",
                "groundmustard",
                "clove",
                "nutmeg",
                "cinnamon",
                "groundginger",
                "mace",
                "pepper",
                "cow",
                "pig",
                "horse",
                "chicken",
                "sheep",
                "goat",
                "llama",
                "rabbit",
                "cement",
                "concrete",
                "pebble",
                "phenolicfoam",
                "polyurethane",
                "xps",
                "rockwool",
                "foamglass",
                "glasswool",
                "doubleglass",
                "tripleglass",
                "fabric",
                "cotton",
                "fibre",
                "carbonfibre",
                "chemical",
                "polymaterial",
                "acid",
                "catalyst",
                "chromepart",
                "chrome",
                "brasspart",
                "brass",
                "diamond",
                "gold",
                "platinum",
                "silver",
                "copper",
                "lithium",
                "cobalt",
                "titanium",
                "tungsten",
                "nickel",
                "magnesium",
                "lead",
                "tin",
                "mercury",
                "bismuth",
                "rodium",
                "osmium",
                "palladium",
                "iridium",
                "ruthenium",
                "plutonium",
                "componentelectric",
                "componentinterior",
                "componentclothing",
                "componentstarting"
            ]
            const material = args[0]
            if (materiallist.includes(args[0]) == false) {
                return message.channel.send(`The item that you are trying to buy doesn't exist or you have a typo.`)
            };
            const amount = args[1]
            if (!args[0]) {
                return message.channel.send(`What would you like to buy?`)
            }
            if (!args[1]) {
                return message.channel.send(`How many of this item would you like to buy?`)
            }
            let file1 = editJsonFile(`./marketdynprice.json`); // update price
            let file2 = editJsonFile(`./marketdynstock.json`) // update stock
            const filedata1 = require('./../marketdynprice.json')
            const filedata2 = require('./../marketdynstock.json')
            const filedata3 = require('./../formula-a.json')
            const filedata4 = require('./../formula-b.json')
            try {
                const price = filedata1[material] * amount
                const newbal = profileData.shard - price
                if (amount > filedata2[material]) {
                    return message.channel.send(`You can't buy that much. The current stock is \`${filedata2[material]}\`.`)
                }
                const stockmaxa = filedata2[material] + 1
                if (price > profileData.shard)
                    return message.channel.send(config.basemessages.messagescoinsmissing);
                if (amount > 0 && amount < stockmaxa) {
                    const newstock = filedata2[material] - amount
                    const difference1 = (filedata3[material] * newstock) + filedata4[material] // price update
                    file1.set(material, difference1);
                    file1.save()
                    file2.set(material, newstock) // stock update
                    file2.save()
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                shard: -price,
                                [material]: amount,
                                actions: 1,
                                timesbuy: 1,
                                amountbuy: amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully bought \`${amount}\` amount of \`${material}\`, for a total price of \`${price}\`. You new balance is \`${newbal}\`.`)
                } else if (amount == "max" || amount == "all") {
                    const difference1 = (filedata3[material] * 0) + filedata4[material] // price update
                    file1.set(material, difference1);
                    file1.save()
                    file2.set(material, 0) // stock update
                    file2.save()
                    const pricemax = filedata2[material] * filedata1[material] // max stock price
                    const stockmaxb = filedata2[material]
                    const newbala = profileData.shard - stockmaxb
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                shard: -pricemax,
                                [material]: stockmaxb,
                                actions: 1,
                                timesbuy: 1,
                                amountbuy: stockmaxb,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully bought \`${stockmaxb}\` amount of \`${material}\`, for a total price of \`${pricemax}\`. You new balance is \`${newbala}\`.`)
                }
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
            }
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
        }
    },
};