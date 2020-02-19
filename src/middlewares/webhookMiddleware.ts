/* eslint-disable @typescript-eslint/camelcase */
import { RequestHandler } from 'express';
import { Message } from 'node-telegram-bot-api';
import { sendMessage } from '../bot-methods';

export const webhookMiddleware: RequestHandler = async (req, res) => {
  const { body } = req;
  let message: Message;
  if ('message' in body) message = body.message;

  const isRegisterCommand = /\/register/.test(message?.text);
  if (isRegisterCommand) {
    const telegramId = message.from.id;
    await sendMessage(
      telegramId,
      `<a href="https://media.giphy.com/media/Jsz8wd6IYOrePfvLFA/giphy.gif">.</a>`,
      {
        parse_mode: 'HTML'
      }
    );
    await sendMessage(
      telegramId,
      `<a href="https://69ce4372.ngrok.io/register?id=${telegramId}">Click  here to 🎧 🔊 register to ECHO Bot using Spotify 🥁 🎸</a>`,
      {
        parse_mode: 'HTML'
      }
    );
    res.sendStatus(200);
  }
};
