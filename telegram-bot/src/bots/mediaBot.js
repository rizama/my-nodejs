const { Telegraf } = require("telegraf");
const path = require('path');
const appDir = path.dirname(require.main.filename);

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

bot.command('send_photo', ctx => {
    // Send With URL
    bot.telegram.sendPhoto(ctx.chat.id, 'https://avatars.githubusercontent.com/u/26889811?s=460&u=c96d60184a889b95b5dd1d34d53c36a5d42fe22b&v=4');

    // Send With Path
    bot.telegram.sendPhoto(ctx.chat.id, { source: `${appDir}/res/bandung.jpg` });

    // Send With File id
    bot.telegram.sendPhoto(ctx.chat.id, "AgACAgUAAxkBAAO3YC0oUnc15neXHW96ogX1SqCoxNAAAkuvMRuif2hV_ZbsaWUtLY5aOSFtdAADAQADAgADbQADdJQDAAEeBA");
});

// bot.on('message', ctx => {
//     console.log(ctx.message);
// })

bot.launch();