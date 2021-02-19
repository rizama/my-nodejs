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

getData();

async function getData() {
    try {
        let data = await axiosGet('https://spreadsheets.google.com/feeds/cells/1Z_rLZJH7meoYIW4EpCRb24Y8DbW0bXnLCTlMgHVREUA/1/public/full?alt=json');
        let facts = data.data.feed.entry;

        facts.forEach(fact => {
            storeData.push({
                row: fact.gs$cell.row,
                col: fact.gs$cell.col,
                val: fact.gs$cell.inputValue,
            });
        });
    } catch (error) {
        console.log(error);
    }
}
