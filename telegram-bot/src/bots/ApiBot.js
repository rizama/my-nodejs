const { Telegraf } = require("telegraf");
const path = require('path');
const appDir = path.dirname(require.main.filename);
const { axiosGet, readfile } = require("../utils");

const bot = new Telegraf(process.env.BOT_TOKEN);

const helpMessage = `
Simple API Bot : 
/fortune | Get Fortune
/cat | Random Cat Photo
/cat <text> | Random Cat Photo with Text
/dogbreeds | List Dogs
/dogs <breed> | Get Photo of Dog Type
`;

bot.command(['help', 'start'], ctx => {
    ctx.reply(helpMessage);
});

bot.command('fortune', async (ctx) => {
    try {
        let fortune = await axiosGet('http://yerkee.com/api/fortune/computers');
        ctx.reply(fortune.data.fortune);
    } catch (error) {
        console.log(error);
        ctx.reply("Something was wrong bos!");
    }
});

bot.command('cat', async (ctx) => {
    let input = ctx.message.text;
    let inputs = input.split(" ");
    if (inputs.length == 1) {
        try {
            let cat = await axiosGet('https://aws.random.cat/meow');
            ctx.replyWithPhoto(cat.data.file, {
                reply_to_message_id: ctx.message.message_id
            });
        } catch (error) {
            console.log(error);
            ctx.reply("Something was wrong bos!");
        }
    } else {
        try {
            inputs.shift();
            let text = inputs.join(" ");
            ctx.replyWithPhoto(`https://cataas.com/cat/says/${text}`);
        } catch (error) {
            console.log(error);
            ctx.reply("Something was wrong bos!");
        }
    }
});

bot.command('dogbreeds', async (ctx) => {
    let listDog = await readfile(`${appDir}/res/dogBreeds.json`);
    let data = JSON.parse(listDog);
    let message = "Dog Breeds: \n";
    data.forEach(item => {
        message += `- ${item}\n`;
    });
    ctx.reply(message);
});

bot.command('dogs', async (ctx) => {
    let input = ctx.message.text;
    let message = input.split(" ");

    if (message.length == 1 || message.length > 2) {
        return ctx.reply("Invalid input.");
    }

    message.shift();
    let text = message.join(" ");

    let listDog = await readfile(`${appDir}/res/dogBreeds.json`);
    let data = JSON.parse(listDog);

    if (data.includes(text)) {
        try {
            let dog = await axiosGet(`https://dog.ceo/api/breed/${text}/images/random`);
            ctx.replyWithPhoto(dog.data.message, {
                reply_to_message_id: ctx.message.message_id
            });
        } catch (error) {
            console.log(error);
            ctx.reply("Something was wrong bos!");
        }
    } else {
        let suggestions = data.filter(item => {
            return item.startsWith(text);
        });
        let message = `Do you mean is \n`;
        suggestions.forEach(item => {
            message += `- ${item}\n`;
        });

        if (suggestions.length == 0) {
            ctx.reply("No Result")
        } else {
            ctx.reply(message);
        }

    }
});

bot.launch();