const { Telegraf } = require("telegraf");
const path = require('path');
const appDir = path.dirname(require.main.filename);
const { axiosGet, readfile } = require("../utils");

const bot = new Telegraf(process.env.BOT_TOKEN);

const helpMessage = `
Crypto Bot
`;

bot.launch();