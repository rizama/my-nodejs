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

bot.action('price', ctx => {
    ctx.deleteMessage();
    const message = 'Select a currency below:';
    ctx.reply(message, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Bitcoin", callback_data: "price-btc" },
                    { text: "Ethereum", callback_data: "price-eth" }
                ],
                [
                    { text: "Binance Coin", callback_data: "price-bnb" },
                    { text: "Cardano", callback_data: "price-ada" }
                ],
                [
                    { text: "Menu", callback_data: "start" }
                ]
            ]
        }
    });
});

bot.action(['price-btc', 'price-eth', 'price-bnb', 'price-ada'], async (ctx) => {
    let currency = ctx.match[0].split("-")[1];

    try {
        let res = await axiosGet(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${currency}&tsyms=IDR,USD,JPY,EUR&${process.env.API_KEY_CRYPTO}`);
        let data = res.data.DISPLAY[currency.toUpperCase()].IDR;

        let message = `
            Currency: ${currency.toUpperCase()}
            Price: ${data.PRICE}
            Open: ${data.OPENDAY}
            High: ${data.HIGHDAY}
            Low: ${data.LOWDAY}
            Supply: ${data.SUPPLY}
            Market Cap: ${data.MKTCAP}
        `;
        ctx.deleteMessage();
        ctx.reply(message, {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Back to Price", callback_data: "price" }
                    ]
                ]
            }
        });
    } catch (error) {
        console.log(error);
    }
});

bot.launch();