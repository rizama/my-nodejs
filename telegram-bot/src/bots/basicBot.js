const { Telegraf } = require('telegraf');

// Constructor 
const bot = new Telegraf(process.env.BOT_TOKEN);

// State
bot.use((ctx, next) => {
  ctx.state.buah = 9;
  ctx.reply("middleware here");
  next();
});

// Important Commands
bot.start((ctx) => ctx.reply(`Hallo Bos! ${ctx.state.buah}`));

bot.help((ctx) => {
  ctx.reply("Ada yang bisa dibantu?");
});
bot.settings((ctx) => {
  ctx.reply("Ini Setting");
});

// Telegraf Context
// bot.start((ctx) => ctx.reply(`Hallo ${ctx.from.first_name}`));

// BOT Command Method
bot.command(['halo', 'hola'], (ctx) => {
  ctx.reply("Command Accepted");
});


// BOT Hears Method
bot.hears('Hai Sam', (ctx) => {
  ctx.reply("hai juga");
});

// BOT on Method
bot.on('sticker', (ctx) => ctx.reply('👍'));
// bot.on('text', (ctx) => ctx.reply('Text 👍'));

// Other Method
bot.mention('rizkysamp', (ctx) => {
  ctx.reply("samsudin");
});

bot.phone('+62 85659122410', (ctx) => {
  ctx.reply("My Nomor");
});

// BOT use Method
// bot.use((ctx) => {
//   ctx.state.buah = 9;
//   ctx.reply("middleware here");
// });

// Next Function
// bot.use((ctx, next) => {
//   ctx.reply("middleware here");
//   next();
// });

bot.launch();