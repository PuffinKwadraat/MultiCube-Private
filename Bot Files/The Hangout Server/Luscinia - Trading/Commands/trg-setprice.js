// Recalculate the standard price.

const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

module.exports = {
    name: "setprice",
    aliases: config.aliases.aliasessetprice,
    cooldown: config.cooldown.cooldownsetprice,
    permissions: config.permissions.permissionsetprice,
    description: "Recalculate the standard price.",
    async execute(message, args, cmd, client, Discord, profileData) {
        message.channel.send(`Received, check console.`)
        let file = editJsonFile(`./marketpricemin.json`); // target file
        const filedata1 = require('./../formula-a.json')
        const filedata2 = require('./../formula-b.json')

        // Y = Ax + B
        // Setprice = Slope * Stock + Cross

        const steel = (filedata1.steel * 15000) + filedata2.steel;
        const steelpart = (filedata1.steelpart * 15000) + filedata2.steelpart;
        const iron = (filedata1.iron * 15000) + filedata2.iron;
        const carbon = (filedata1.carbon * 15000) + filedata2.carbon;
        const brick = (filedata1.brick * 15000) + filedata2.brick;
        const clay = (filedata1.clay * 15000) + filedata2.clay;
        const soil = (filedata1.soil * 15000) + filedata2.soil;
        const water = (filedata1.water * 15000) + filedata2.water;
        const woodplank = (filedata1.woodplank * 15000) + filedata2.woodplank;
        const woodpart = (filedata1.woodpart * 15000) + filedata2.woodpart;
        const wood = (filedata1.wood * 15000) + filedata2.wood;
        const log = (filedata1.log * 15000) + filedata2.log;
        const bamboo = (filedata1.bamboo * 15000) + filedata2.bamboo;
        const pipe = (filedata1.pipe * 15000) + filedata2.pipe;
        const plasticpart = (filedata1.plasticpart * 15000) + filedata2.plasticpart;
        const plastic = (filedata1.plastic * 15000) + filedata2.plastic;
        const glass = (filedata1.glass * 15000) + filedata2.glass;
        const limestone = (filedata1.limestone * 15000) + filedata2.limestone;
        const sand = (filedata1.sand * 15000) + filedata2.sand;
        const plexiglass = (filedata1.plexiglass * 15000) + filedata2.plexiglass;
        const granite = (filedata1.granite * 15000) + filedata2.granite;
        const marble = (filedata1.marble * 15000) + filedata2.marble;
        const quartz = (filedata1.quartz * 15000) + filedata2.quartz;
        const chalk = (filedata1.chalk * 15000) + filedata2.chalk;
        const slate = (filedata1.slate * 15000) + filedata2.slate;
        const basalt = (filedata1.basalt * 15000) + filedata2.basalt;
        const oil = (filedata1.oil * 15000) + filedata2.oil;
        const coal = (filedata1.coal * 15000) + filedata2.coal;
        const ironore = (filedata1.ironore * 15000) + filedata2.ironore;
        const copperore = (filedata1.copperore * 15000) + filedata2.copperore;
        const goldore = (filedata1.goldore * 15000) + filedata2.goldore;
        const gas = (filedata1.gas * 15000) + filedata2.gas;
        const ceramic = (filedata1.ceramic * 15000) + filedata2.ceramic;
        const cork = (filedata1.cork * 15000) + filedata2.cork;
        const mesh = (filedata1.mesh * 15000) + filedata2.mesh;
        const rubber = (filedata1.rubber * 15000) + filedata2.rubber;
        const uranium = (filedata1.uranium * 15000) + filedata2.uranium;
        const rice = (filedata1.rice * 15000) + filedata2.rice;
        const rye = (filedata1.rye * 15000) + filedata2.rye;
        const oats = (filedata1.oats * 15000) + filedata2.oats;
        const corn = (filedata1.corn * 15000) + filedata2.corn;
        const barley = (filedata1.barley * 15000) + filedata2.barley;
        const cassava = (filedata1.cassava * 15000) + filedata2.cassava;
        const soybean = (filedata1.soybean * 15000) + filedata2.soybean;
        const sorghum = (filedata1.sorghum * 15000) + filedata2.sorghum;
        const wheat = (filedata1.wheat * 15000) + filedata2.wheat;
        const resin = (filedata1.resin * 15000) + filedata2.resin;
        const tape = (filedata1.tape * 15000) + filedata2.tape;
        const glue = (filedata1.glue * 15000) + filedata2.glue;
        const paper = (filedata1.paper * 15000) + filedata2.paper;
        const steelsheet = (filedata1.steelsheet * 15000) + filedata2.steelsheet;
        const cocoabean = (filedata1.cocoabean * 15000) + filedata2.cocoabean;
        const coffeebean = (filedata1.coffeebean * 15000) + filedata2.coffeebean;
        const sugar = (filedata1.sugar * 15000) + filedata2.sugar;
        const salt = (filedata1.salt * 15000) + filedata2.salt;
        const flower = (filedata1.flower * 15000) + filedata2.flower;
        const bakingpowder = (filedata1.bakingpowder * 15000) + filedata2.bakingpowder;
        const egg = (filedata1.egg * 15000) + filedata2.egg;
        const fish = (filedata1.fish * 15000) + filedata2.fish;
        const meat = (filedata1.meat * 15000) + filedata2.meat;
        const bread = (filedata1.bread * 15000) + filedata2.bread;
        const asparagus = (filedata1.asparagus * 15000) + filedata2.asparagus;
        const eggplant = (filedata1.eggplant * 15000) + filedata2.eggplant;
        const broccoli = (filedata1.broccoli * 15000) + filedata2.broccoli;
        const cabbage = (filedata1.cabbage * 15000) + filedata2.cabbage;
        const avocado = (filedata1.avocado * 15000) + filedata2.avocado;
        const brusselssprout = (filedata1.brusselssprout * 15000) + filedata2.brusselssprout;
        const carrot = (filedata1.carrot * 15000) + filedata2.carrot;
        const beetroot = (filedata1.beetroot * 15000) + filedata2.beetroot;
        const garlic = (filedata1.garlic * 15000) + filedata2.garlic;
        const celery = (filedata1.celery * 15000) + filedata2.celery;
        const cucumber = (filedata1.cucumber * 15000) + filedata2.cucumber;
        const greenbean = (filedata1.greenbean * 15000) + filedata2.greenbean;
        const leek = (filedata1.leek * 15000) + filedata2.leek;
        const lettuce = (filedata1.lettuce * 15000) + filedata2.lettuce;
        const mushroom = (filedata1.mushroom * 15000) + filedata2.mushroom;
        const onion = (filedata1.onion * 15000) + filedata2.onion;
        const pea = (filedata1.pea * 15000) + filedata2.pea;
        const pumpkin = (filedata1.pumpkin * 15000) + filedata2.pumpkin;
        const radish = (filedata1.radish * 15000) + filedata2.radish;
        const rhubarb = (filedata1.rhubarb * 15000) + filedata2.rhubarb;
        const sweetpepper = (filedata1.sweetpepper * 15000) + filedata2.sweetpepper;
        const spinach = (filedata1.spinach * 15000) + filedata2.spinach;
        const tomato = (filedata1.tomato * 15000) + filedata2.tomato;
        const sweetpotato = (filedata1.sweetpotato * 15000) + filedata2.sweetpotato;
        const yam = (filedata1.yam * 15000) + filedata2.yam;
        const potato = (filedata1.potato * 15000) + filedata2.potato;
        const acerola = (filedata1.acerola * 15000) + filedata2.acerola;
        const apple = (filedata1.apple * 15000) + filedata2.apple;
        const apricot = (filedata1.apricot * 15000) + filedata2.apricot;
        const banana = (filedata1.banana * 15000) + filedata2.banana;
        const blackberry = (filedata1.blackberry * 15000) + filedata2.blackberry;
        const blackcurrant = (filedata1.blackcurrant * 15000) + filedata2.blackcurrant;
        const blueberry = (filedata1.blueberry * 15000) + filedata2.blueberry;
        const breadfruit = (filedata1.breadfruit * 15000) + filedata2.breadfruit;
        const cantaloupe = (filedata1.cantaloupe * 15000) + filedata2.cantaloupe;
        const cherry = (filedata1.cherry * 15000) + filedata2.cherry;
        const clementine = (filedata1.clementine * 15000) + filedata2.clementine;
        const coconut = (filedata1.coconut * 15000) + filedata2.coconut;
        const cranberry = (filedata1.cranberry * 15000) + filedata2.cranberry;
        const datefruit = (filedata1.datefruit * 15000) + filedata2.datefruit;
        const fig = (filedata1.fig * 15000) + filedata2.fig;
        const gooseberry = (filedata1.gooseberry * 15000) + filedata2.gooseberry;
        const grapefruit = (filedata1.grapefruit * 15000) + filedata2.grapefruit;
        const grape = (filedata1.grape * 15000) + filedata2.grape;
        const guava = (filedata1.guava * 15000) + filedata2.guava;
        const honeydewmelon = (filedata1.honeydewmelon * 15000) + filedata2.honeydewmelon;
        const jackfruit = (filedata1.jackfruit * 15000) + filedata2.jackfruit;
        const jujubefruit = (filedata1.jujubefruit * 15000) + filedata2.jujubefruit;
        const kiwifruit = (filedata1.kiwifruit * 15000) + filedata2.kiwifruit;
        const kumquat = (filedata1.kumquat * 15000) + filedata2.kumquat;
        const lemon = (filedata1.lemon * 15000) + filedata2.lemon;
        const lime = (filedata1.lime * 15000) + filedata2.lime;
        const lychee = (filedata1.lychee * 15000) + filedata2.lychee;
        const mandarin = (filedata1.mandarin * 15000) + filedata2.mandarin;
        const mango = (filedata1.mango * 15000) + filedata2.mango;
        const mulberry = (filedata1.mulberry * 15000) + filedata2.mulberry;
        const olive = (filedata1.olive * 15000) + filedata2.olive;
        const orange = (filedata1.orange * 15000) + filedata2.orange;
        const papaya = (filedata1.papaya * 15000) + filedata2.papaya;
        const passionfruit = (filedata1.passionfruit * 15000) + filedata2.passionfruit;
        const peach = (filedata1.peach * 15000) + filedata2.peach;
        const pear = (filedata1.pear * 15000) + filedata2.pear;
        const dragonfruit = (filedata1.dragonfruit * 15000) + filedata2.dragonfruit;
        const pineapple = (filedata1.pineapple * 15000) + filedata2.pineapple;
        const plum = (filedata1.plum * 15000) + filedata2.plum;
        const pomegranate = (filedata1.pomegranate * 15000) + filedata2.pomegranate;
        const prune = (filedata1.prune * 15000) + filedata2.prune;
        const raspberry = (filedata1.raspberry * 15000) + filedata2.raspberry;
        const strawberry = (filedata1.strawberry * 15000) + filedata2.strawberry;
        const tangerine = (filedata1.tangerine * 15000) + filedata2.tangerine;
        const watermelon = (filedata1.watermelon * 15000) + filedata2.watermelon;
        const blackbean = (filedata1.blackbean * 15000) + filedata2.blackbean;
        const blackeyedpea = (filedata1.blackeyedpea * 15000) + filedata2.blackeyedpea;
        const cannellinibean = (filedata1.cannellinibean * 15000) + filedata2.cannellinibean;
        const chickpea = (filedata1.chickpea * 15000) + filedata2.chickpea;
        const greatnorthernbean = (filedata1.greatnorthernbean * 15000) + filedata2.greatnorthernbean;
        const kidneybean = (filedata1.kidneybean * 15000) + filedata2.kidneybean;
        const limabean = (filedata1.limabean * 15000) + filedata2.limabean;
        const pintobean = (filedata1.pintobean * 15000) + filedata2.pintobean;
        const favabean = (filedata1.favabean * 15000) + filedata2.favabean;
        const navybean = (filedata1.navybean * 15000) + filedata2.navybean;
        const adzukibean = (filedata1.adzukibean * 15000) + filedata2.adzukibean;
        const edamame = (filedata1.edamame * 15000) + filedata2.edamame;
        const mungbean = (filedata1.mungbean * 15000) + filedata2.mungbean;
        const cranberrybean = (filedata1.cranberrybean * 15000) + filedata2.cranberrybean;
        const thyme = (filedata1.thyme * 15000) + filedata2.thyme;
        const basil = (filedata1.basil * 15000) + filedata2.basil;
        const oregano = (filedata1.oregano * 15000) + filedata2.oregano;
        const rosemary = (filedata1.rosemary * 15000) + filedata2.rosemary;
        const fennelseed = (filedata1.fennelseed * 15000) + filedata2.fennelseed;
        const bayleaf = (filedata1.bayleaf * 15000) + filedata2.bayleaf;
        const chilipowder = (filedata1.chilipowder * 15000) + filedata2.chilipowder;
        const smokedpaprika = (filedata1.smokedpaprika * 15000) + filedata2.smokedpaprika;
        const cayenne = (filedata1.cayenne * 15000) + filedata2.cayenne;
        const cumin = (filedata1.cumin * 15000) + filedata2.cumin;
        const groundcardamom = (filedata1.groundcardamom * 15000) + filedata2.groundcardamom;
        const currypowder = (filedata1.currypowder * 15000) + filedata2.currypowder;
        const onionpowder = (filedata1.onionpowder * 15000) + filedata2.onionpowder;
        const garlicpowder = (filedata1.garlicpowder * 15000) + filedata2.garlicpowder;
        const groundmustard = (filedata1.groundmustard * 15000) + filedata2.groundmustard;
        const clove = (filedata1.clove * 15000) + filedata2.clove;
        const nutmeg = (filedata1.nutmeg * 15000) + filedata2.nutmeg;
        const cinnamon = (filedata1.cinnamon * 15000) + filedata2.cinnamon;
        const groundginger = (filedata1.groundginger * 15000) + filedata2.groundginger;
        const mace = (filedata1.mace * 15000) + filedata2.mace;
        const pepper = (filedata1.pepper * 15000) + filedata2.pepper;
        const cow = (filedata1.cow * 15000) + filedata2.cow;
        const pig = (filedata1.pig * 15000) + filedata2.pig;
        const horse = (filedata1.horse * 15000) + filedata2.horse;
        const chicken = (filedata1.chicken * 15000) + filedata2.chicken;
        const sheep = (filedata1.sheep * 15000) + filedata2.sheep;
        const goat = (filedata1.goat * 15000) + filedata2.goat;
        const llama = (filedata1.llama * 15000) + filedata2.llama;
        const rabbit = (filedata1.rabbit * 15000) + filedata2.rabbit;
        const cement = (filedata1.cement * 15000) + filedata2.cement;
        const concrete = (filedata1.concrete * 15000) + filedata2.concrete;
        const pebble = (filedata1.pebble * 15000) + filedata2.pebble;
        const phenolicfoam = (filedata1.phenolicfoam * 15000) + filedata2.phenolicfoam;
        const polyurethane = (filedata1.polyurethane * 15000) + filedata2.polyurethane;
        const xps = (filedata1.xps * 15000) + filedata2.xps;
        const rockwool = (filedata1.rockwool * 15000) + filedata2.rockwool;
        const foamglass = (filedata1.foamglass * 15000) + filedata2.foamglass;
        const glasswool = (filedata1.glasswool * 15000) + filedata2.glasswool;
        const doubleglass = (filedata1.doubleglass * 15000) + filedata2.doubleglass;
        const tripleglass = (filedata1.tripleglass * 15000) + filedata2.tripleglass;
        const fabric = (filedata1.fabric * 15000) + filedata2.fabric;
        const cotton = (filedata1.cotton * 15000) + filedata2.cotton;
        const fibre = (filedata1.fibre * 15000) + filedata2.fibre;
        const carbonfibre = (filedata1.carbonfibre * 15000) + filedata2.carbonfibre;
        const chemical = (filedata1.chemical * 15000) + filedata2.chemical;
        const polymaterial = (filedata1.polymaterial * 15000) + filedata2.polymaterial;
        const acid = (filedata1.acid * 15000) + filedata2.acid;
        const catalyst = (filedata1.catalyst * 15000) + filedata2.catalyst;
        const chromepart = (filedata1.chromepart * 15000) + filedata2.chromepart;
        const chrome = (filedata1.chrome * 15000) + filedata2.chrome;
        const brasspart = (filedata1.brasspart * 15000) + filedata2.brasspart;
        const brass = (filedata1.brass * 15000) + filedata2.brass;
        const diamond = (filedata1.diamond * 15000) + filedata2.diamond;
        const gold = (filedata1.gold * 15000) + filedata2.gold;
        const platinum = (filedata1.platinum * 15000) + filedata2.platinum;
        const silver = (filedata1.silver * 15000) + filedata2.silver;
        const copper = (filedata1.copper * 15000) + filedata2.copper;
        const lithium = (filedata1.lithium * 15000) + filedata2.lithium;
        const cobalt = (filedata1.cobalt * 15000) + filedata2.cobalt;
        const titanium = (filedata1.titanium * 15000) + filedata2.titanium;
        const tungsten = (filedata1.tungsten * 15000) + filedata2.tungsten;
        const nickel = (filedata1.nickel * 15000) + filedata2.nickel;
        const magnesium = (filedata1.magnesium * 15000) + filedata2.magnesium;
        const lead = (filedata1.lead * 15000) + filedata2.lead;
        const tin = (filedata1.tin * 15000) + filedata2.tin;
        const mercury = (filedata1.mercury * 15000) + filedata2.mercury;
        const bismuth = (filedata1.bismuth * 15000) + filedata2.bismuth;
        const rodium = (filedata1.rodium * 15000) + filedata2.rodium;
        const osmium = (filedata1.osmium * 15000) + filedata2.osmium;
        const palladium = (filedata1.palladium * 15000) + filedata2.palladium;
        const iridium = (filedata1.iridium * 15000) + filedata2.iridium;
        const ruthenium = (filedata1.ruthenium * 15000) + filedata2.ruthenium;
        const plutonium = (filedata1.plutonium * 15000) + filedata2.plutonium;
        const componentelectric = (filedata1.componentelectric * 15000) + filedata2.componentelectric;
        const componentinterior = (filedata1.componentinterior * 15000) + filedata2.componentinterior;
        const componentclothing = (filedata1.componentclothing * 15000) + filedata2.componentclothing;
        const componentstarting = (filedata1.componentstarting * 15000) + filedata2.componentstarting;

        file.set("steel", steel);
        file.set("steelpart", steelpart);
        file.set("iron", iron);
        file.set("carbon", carbon);
        file.set("brick", brick);
        file.set("clay", clay);
        file.set("soil", soil);
        file.set("water", water);
        file.set("woodplank", woodplank);
        file.set("woodpart", woodpart);
        file.set("wood", wood);
        file.set("log", log);
        file.set("bamboo", bamboo);
        file.set("pipe", pipe);
        file.set("plasticpart", plasticpart);
        file.set("plastic", plastic);
        file.set("glass", glass);
        file.set("limestone", limestone);
        file.set("sand", sand);
        file.set("plexiglass", plexiglass);
        file.set("granite", granite);
        file.set("marble", marble);
        file.set("quartz", quartz);
        file.set("chalk", chalk);
        file.set("slate", slate);
        file.set("basalt", basalt);
        file.set("oil", oil);
        file.set("coal", coal);
        file.set("ironore", ironore);
        file.set("copperore", copperore);
        file.set("goldore", goldore);
        file.set("gas", gas);
        file.set("ceramic", ceramic);
        file.set("cork", cork);
        file.set("mesh", mesh);
        file.set("rubber", rubber);
        file.set("uranium", uranium);
        file.set("rice", rice);
        file.set("rye", rye);
        file.set("oats", oats);
        file.set("corn", corn);
        file.set("barley", barley);
        file.set("cassava", cassava);
        file.set("soybean", soybean);
        file.set("sorghum", sorghum);
        file.set("wheat", wheat);
        file.set("resin", resin);
        file.set("tape", tape);
        file.set("glue", glue);
        file.set("paper", paper);
        file.set("steelsheet", steelsheet);
        file.set("cocoabean", cocoabean);
        file.set("coffeebean", coffeebean);
        file.set("sugar", sugar);
        file.set("salt", salt);
        file.set("flower", flower);
        file.set("bakingpowder", bakingpowder);
        file.set("egg", egg);
        file.set("fish", fish);
        file.set("meat", meat);
        file.set("bread", bread);
        file.set("asparagus", asparagus);
        file.set("eggplant", eggplant);
        file.set("broccoli", broccoli);
        file.set("cabbage", cabbage);
        file.set("avocado", avocado);
        file.set("brusselssprout", brusselssprout);
        file.set("carrot", carrot);
        file.set("beetroot", beetroot);
        file.set("garlic", garlic);
        file.set("celery", celery);
        file.set("cucumber", cucumber);
        file.set("greenbean", greenbean);
        file.set("leek", leek);
        file.set("lettuce", lettuce);
        file.set("mushroom", mushroom);
        file.set("onion", onion);
        file.set("pea", pea);
        file.set("pumpkin", pumpkin);
        file.set("radish", radish);
        file.set("rhubarb", rhubarb);
        file.set("sweetpepper", sweetpepper);
        file.set("spinach", spinach);
        file.set("tomato", tomato);
        file.set("sweetpotato", sweetpotato);
        file.set("yam", yam);
        file.set("potato", potato);
        file.set("acerola", acerola);
        file.set("apple", apple);
        file.set("apricot", apricot);
        file.set("banana", banana);
        file.set("blackberry", blackberry);
        file.set("blackcurrant", blackcurrant);
        file.set("blueberry", blueberry);
        file.set("breadfruit", breadfruit);
        file.set("cantaloupe", cantaloupe);
        file.set("cherry", cherry);
        file.set("clementine", clementine);
        file.set("coconut", coconut);
        file.set("cranberry", cranberry);
        file.set("datefruit", datefruit);
        file.set("fig", fig);
        file.set("gooseberry", gooseberry);
        file.set("grapefruit", grapefruit);
        file.set("grape", grape);
        file.set("guava", guava);
        file.set("honeydewmelon", honeydewmelon);
        file.set("jackfruit", jackfruit);
        file.set("jujubefruit", jujubefruit);
        file.set("kiwifruit", kiwifruit);
        file.set("kumquat", kumquat);
        file.set("lemon", lemon);
        file.set("lime", lime);
        file.set("lychee", lychee);
        file.set("mandarin", mandarin);
        file.set("mango", mango);
        file.set("mulberry", mulberry);
        file.set("olive", olive);
        file.set("orange", orange);
        file.set("papaya", papaya);
        file.set("passionfruit", passionfruit);
        file.set("peach", peach);
        file.set("pear", pear);
        file.set("dragonfruit", dragonfruit);
        file.set("pineapple", pineapple);
        file.set("plum", plum);
        file.set("pomegranate", pomegranate);
        file.set("prune", prune);
        file.set("raspberry", raspberry);
        file.set("strawberry", strawberry);
        file.set("tangerine", tangerine);
        file.set("watermelon", watermelon);
        file.set("blackbean", blackbean);
        file.set("blackeyedpea", blackeyedpea);
        file.set("cannellinibean", cannellinibean);
        file.set("chickpea", chickpea);
        file.set("greatnorthernbean", greatnorthernbean);
        file.set("kidneybean", kidneybean);
        file.set("limabean", limabean);
        file.set("pintobean", pintobean);
        file.set("favabean", favabean);
        file.set("navybean", navybean);
        file.set("adzukibean", adzukibean);
        file.set("edamame", edamame);
        file.set("mungbean", mungbean);
        file.set("cranberrybean", cranberrybean);
        file.set("thyme", thyme);
        file.set("basil", basil);
        file.set("oregano", oregano);
        file.set("rosemary", rosemary);
        file.set("fennelseed", fennelseed);
        file.set("bayleaf", bayleaf);
        file.set("chilipowder", chilipowder);
        file.set("smokedpaprika", smokedpaprika);
        file.set("cayenne", cayenne);
        file.set("cumin", cumin);
        file.set("groundcardamom", groundcardamom);
        file.set("currypowder", currypowder);
        file.set("onionpowder", onionpowder);
        file.set("garlicpowder", garlicpowder);
        file.set("groundmustard", groundmustard);
        file.set("clove", clove);
        file.set("nutmeg", nutmeg);
        file.set("cinnamon", cinnamon);
        file.set("groundginger", groundginger);
        file.set("mace", mace);
        file.set("pepper", pepper)
        file.set("cow", cow);
        file.set("pig", pig);
        file.set("horse", horse);
        file.set("chicken", chicken);
        file.set("sheep", sheep);
        file.set("goat", goat);
        file.set("llama", llama);
        file.set("rabbit", rabbit);
        file.set("cement", cement);
        file.set("concrete", concrete);
        file.set("pebble", pebble);
        file.set("phenolicfoam", phenolicfoam);
        file.set("polyurethane", polyurethane);
        file.set("xps", xps);
        file.set("rockwool", rockwool);
        file.set("foamglass", foamglass);
        file.set("glasswool", glasswool);
        file.set("doubleglass", doubleglass);
        file.set("tripleglass", tripleglass);
        file.set("fabric", fabric);
        file.set("cotton", cotton);
        file.set("fibre", fibre);
        file.set("carbonfibre", carbonfibre);
        file.set("chemical", chemical);
        file.set("polymaterial", polymaterial);
        file.set("acid", acid);
        file.set("catalyst", catalyst);
        file.set("chromepart", chromepart);
        file.set("chrome", chrome);
        file.set("brasspart", brasspart);
        file.set("brass", brass);
        file.set("diamond", diamond);
        file.set("gold", gold);
        file.set("platinum", platinum);
        file.set("silver", silver);
        file.set("copper", copper);
        file.set("lithium", lithium);
        file.set("cobalt", cobalt);
        file.set("titanium", titanium);
        file.set("tungsten", tungsten);
        file.set("nickel", nickel);
        file.set("magnesium", magnesium);
        file.set("lead", lead);
        file.set("tin", tin);
        file.set("mercury", mercury);
        file.set("bismuth", bismuth);
        file.set("rodium", rodium);
        file.set("osmium", osmium);
        file.set("palladium", palladium);
        file.set("iridium", iridium);
        file.set("ruthenium", ruthenium);
        file.set("plutonium", plutonium);
        file.set("componentelectric", componentelectric);
        file.set("componentinterior", componentinterior);
        file.set("componentclothing", componentclothing);
        file.set("componentstarting", componentstarting);
        file.save();
    },
};