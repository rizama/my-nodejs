const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

const helpMessage = `
Referensi Help : 
/surabaya  - mendapatkan gambar untuk surabaya
/jakarta   - mendapatkan gif dari Jakarta 
/malang   - mendapatkan lokasi dari malang
/cities   - mendapatkan foto dari kota
/citieslist   - mendapatkan text file kota
`;

bot.command(['start', 'help'], (ctx) => {
    ctx.reply(helpMessage);
});

bot.launch();