require("console-stamp")(console, "[HH:MM]");
const ms = require("ms");
const profileModel = require("../models/profileSchema");
const util = require("minecraft-server-util");
var Scraper = require("images-scraper");
const math = require("mathjs");
const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");
const queue = new Map();

module.exports = {
    // Command Descriptions
    descriptionban = "Ban a naughty Member"
    descriptionblind = "Completly blind a member. Target cannot do anything."
    descriptionclear = "Bulk delete messages."
    descriptionkick = "Kick a irritating person, that you don't hate enough to ban."
    descriptionmute = "This silences spamming or naughty people. Can only read stuff." 
    descriptionping = "This silences spamming or naughty people. Can only read stuff." 
    descriptionunblind = "This command unblinds members."
    descriptionunmute = "This command unmutes members." 
    descriptionuptime = "Check the uptime of the bot." 
    descriptionrolecolor1 = "Role color choose page 1." 
    descriptionrolecolor2 = "Role color choose page 2." 
    descriptionrolecolor3 = "Role color choose page 3."
    descriptionbalance = "Display both your wallet and bank balance." 
    descriptionbalancebank = "Display your bank account balance." 
    descriptionbalancewallet = "Display your wallet balance." 
    descriptiondailyreward = "" 
    descriptiondeposit = ""
    descriptiongivebank = "" 
    descriptiongivefulleco = ""
    descriptiongivewallet = ""
    descriptionminusbank = ""
    descriptionminusfulleco = "" 
    descriptionminuswallet = ""
    descriptionsearch = "" 
    descriptionsetbank = ""
    descriptionsetwallet = ""
    descriptionsetfulleco = ""
    descriptionwithdraw = ""
    descriptionexperience = ""
    descriptiongiveexperience = "" 
    descriptiongivefulllevel = "" 
    descriptiongivelevel = "" 
    descriptionlevel = "" 
    descriptionlevelstats = "" 
    descriptionminusexperience = ""
    descriptionminusfulllevel = "" 
    descriptionminuslevel = ""
    descriptionsetexperience = "" 
    descriptionsetfulllevel = ""
    descriptionsetlevel = ""
    descriptiondonate = ""
    descriptionembedtemplate = ""
    descriptionevent = "" 
    descriptiongithub = "" 
    descriptionhelpst1 = "" 
    descriptionmcserver = "" 
    descriptionrules = ""
    descriptionserverip = "" 
    descriptionbotstats = "" 
    descriptionapply = "" 
    descriptioncommandtemplate = "" 
    descriptionflipacoinen = "" 
    descriptionflipacoinnl = "" 
    descriptionimage = "" 
    descriptionmath = "" 
    descriptionleave = "" 
    descriptionplay = "" 
    descriptionticket = ""
    descriptioncirkelvergelijking = ""
    descriptionhoeklijn = ""
    descriptionpunttotlijn = "" 
    descriptionsubstitutie = "" 
    descriptiontitreernormaal = "" 
    descriptiontitreerverdunning = ""

}