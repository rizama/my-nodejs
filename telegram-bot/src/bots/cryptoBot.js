const { Telegraf } = require("telegraf");
const path = require('path');
const appDir = path.dirname(require.main.filename);
const { axiosGet, readfile } = require("../utils");

const bot = new Telegraf(process.env.BOT_TOKEN);

const helpMessage = `
Crypto Bot
`;

const menu = (ctx) => {
    const message = 'Welcome, This boot will provide information about the crypto currency';
    ctx.reply(message, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Crypto Price", callback_data: "price" }
                ],
                [
                    { text: "Coin Market Cap", url: "https://www.cryptocompare.com/" }
                ]
            ]
        }
    });
};

bot.command('start', ctx => {
    menu(ctx);
});

bot.action('start', ctx => {
    ctx.deleteMessage();
    menu(ctx);
});
bot.launch();