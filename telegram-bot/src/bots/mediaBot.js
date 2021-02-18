const { Telegraf } = require("telegraf");
const path = require('path');
const appDir = path.dirname(require.main.filename);

const bot = new Telegraf(process.env.BOT_TOKEN);

const helpMessage = `
Referensi Help : 
/surabaya  - mendapatkan gambar untuk surabaya
/patrick   - mendapatkan gif dari patrick
/bandung   - mendapatkan lokasi dari malang
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

bot.command('surabaya', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, { source: `${appDir}/res/surabaya.jpg` });
});

bot.command('surabaya_with_reply', ctx => {
    bot.telegram.sendChatAction(ctx.chat.id, 'upload_photo');
    bot.telegram.sendPhoto(ctx.chat.id,
        {
            source: `${appDir}/res/surabaya.jpg`
        },
        {
            reply_to_message_id: ctx.message.message_id
        });
});

bot.command('patrick', ctx => {
    bot.telegram.sendChatAction(ctx.chat.id, 'upload_video');
    bot.telegram.sendAnimation(ctx.chat.id, "https://media2.giphy.com/media/5n5IIVf35HBPNOwau8/200_d.gif",
        {
            reply_to_message_id: ctx.message.message_id
        });
});

bot.command('cities', ctx => {
    let listCities = ['bandung.jpg', 'batu.jpg', 'jakarta.jpg', 'malang.jpg', 'surabaya.jpg'];
    let cities = listCities.map(data => {
        return {
            type: 'photo',
            media: {
                source: `${appDir}/res/${data}`
            }
        };
    });
    bot.telegram.sendChatAction(ctx.chat.id, 'upload_photo');
    bot.telegram.sendMediaGroup(ctx.chat.id, cities);
});

bot.command('citieslist', ctx => {
    bot.telegram.sendChatAction(ctx.chat.id, 'upload_document');
    bot.telegram.sendDocument(ctx.chat.id, {
        source: `${appDir}/res/cities.txt`
    },
        {
            thumb: {
                source: `${appDir}/res/bandung.jpg`
            }
        });
});

bot.command('bandung', ctx => {
    bot.telegram.sendLocation(ctx.chat.id, -6.90389, 107.61861);
});

bot.on('message', async (ctx) => {
    if (ctx.message.document) {
        try {
            let link = await bot.telegram.getFileLink(ctx.message.document.file_id);
            ctx.reply(`Link: ${link}`);
        } catch (error) {
            console.log(error);
            ctx.reply(error.message);
        }
    } else if (ctx.message.photo) {
        try {
            let link = await bot.telegram.getFileLink(ctx.message.photo[0].file_id);
            ctx.reply(`Link: ${link}`);
        } catch (error) {
            console.log(error);
            ctx.reply(error.message);
        }
    }
});

bot.launch();