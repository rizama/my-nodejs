const { Telegraf } = require("telegraf");
const path = require('path');
const appDir = path.dirname(require.main.filename);
const { axiosGet, readfile } = require("../utils");

const bot = new Telegraf(process.env.BOT_TOKEN);
let storeData = [];

const helpMessage = `
Facts Covid Bot : 
/fact | Facts about Corona Virus
/update | Update data from Google Sheet
`;

bot.help(ctx => {
    ctx.reply(helpMessage);
});

