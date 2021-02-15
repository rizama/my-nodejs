const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const { Telegraf } = require('telegraf');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.get('/', (req, res) => {
  res.json({
    message: 'Simple API Starter'
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
