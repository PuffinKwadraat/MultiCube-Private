var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
        headless: true
    }
})

module.exports = {
    name: 'image',
    permissions: ["ADMINISTRATOR"],
    cooldown: 5,
    description: 'This sends a image',
    async execute(message, args, cmd, client, Discord){
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('Please enter an image name or search.');

        const image_results = await google.scrape(image_query, 1);
        message.channel.send(image_results[0].url);
    }
}