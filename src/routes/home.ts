/* eslint-disable @typescript-eslint/camelcase */
import express from 'express';
import fetch from 'node-fetch';
import qs from 'querystring';
import { webhookMiddleware } from '../middlewares';

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  console.log(process.env.BOT_TOKEN);
  const me = await (
    await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/getMe`)
  ).json();
  res.json(me);
});

// Register callback url
// router.get('/webhook', async (req, res) => {
//   const params = {
//     url: 'https://c2216c13.ngrok.io'
//   };

//   const me = await (
//     await fetch(
//       `https://api.telegram.org/bot${
//         process.env.BOT_TOKEN
//       }/setWebhook?${qs.stringify(params)}`
//     )
//   ).json();
//   res.json(me);
// });

// SEND MSG
router.get('/msg', async (req, res) => {
  const params = {
    // chat_id: -200983060,
    chat_id: 141656648,
    text: 'https://33e64db7.ngrok.io/register'
  };

  console.log(params);

  const me = await (
    await fetch(
      `https://api.telegram.org/bot${
        process.env.BOT_TOKEN
      }/sendMessage?${qs.stringify(params)}`
    )
  ).json();
  res.json(me);
});

// Get Chat
router.get('/chat', async (req, res) => {
  const params = {
    chat_id: -200983060
  };

  console.log(params);

  const me = await (
    await fetch(
      `https://api.telegram.org/bot${
        process.env.BOT_TOKEN
      }/getChatMembersCount?${qs.stringify(params)}`
    )
  ).json();
  res.json(me);
});

// POST
router.post('/', webhookMiddleware);

export default router;
