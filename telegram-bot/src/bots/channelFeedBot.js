const { Telegraf } = require("telegraf");
const path = require('path');
const appDir = path.dirname(require.main.filename);
const { axiosGet, readfile, axiosPost } = require("../utils");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(ctx => {
    console.log(ctx.update.channel_post);
});


bot.launch();

const test = async () => {
    let message = `
    <a href="${inputData.link}">Source</a>
    Title: ${inputData.title}
    Date: ${inputData.date}
    User: ${inputData.user}
    `;

    const token = "1656477389:AAHbUSBw7-oGYw4ZyjJNQ49YlUetIyhqfUw";
    let data = {
        chat_id: "-1001312358691",
        text: message,
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: [
                [
                    {text: `Go to Tweet`, url: inputData.link}
                ]
            ]
        }
    };

    // await axiosPost(`https://api.telegram.org/bot${token}/sendMessage`, data);

    // await fetch(`https://api.telegram.org/bot${token}/sendMessage`,
    //     {
    //         method: "POST",
    //         body: JSON.stringify(data),
    //         headers: {
    //             'Content-Type': 'Application/json'
    //         }
    //     }
    // );
};

