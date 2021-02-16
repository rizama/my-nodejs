const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

const helpMessage = `
Katakan sesuatu pada saya
/start  - Untuk memulai bot
/help   - Referensi Perintah 
`;

// Logging
bot.use((ctx, next) => {
    console.log(ctx.message.sticker);
    if (ctx.message.text) {
        bot.telegram.sendMessage(-411771227, `${ctx.from.username}, Say: ${ctx.message.text}`);
    } else if (ctx.message.sticker) {
        bot.telegram.sendMessage(-411771227, `${ctx.from.username}, Sent: Sticker ${ctx.message.sticker.set_name}`);
    } else {
        bot.telegram.sendMessage(-411771227, `${ctx.from.username}, Sent: Not Text or Sticker`);
    }
    next();
});

bot.start((ctx) => {
    ctx.reply(helpMessage);
});

bot.help((ctx) => {
    ctx.reply(helpMessage);
});

bot.command('echo', (ctx) => {
    let input = ctx.message.text;
    let inputArray = input.split(" ");
    let message = "";

    if (inputArray.length == 1) {
        message = "anda mengatakan echo";
    } else {
        inputArray.shift();
        message = inputArray.join(" ");
    }

    ctx.reply(message);
});

bot.launch();