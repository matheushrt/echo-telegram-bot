/* eslint-disable @typescript-eslint/camelcase */
import { Message } from 'node-telegram-bot-api';
import { sendMessage } from '../bot-methods';

export default async (message: Message): Promise<void> => {
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
    `<a href="${process.env.ECHO_SERVER_URL}/register?id=${telegramId}">Click  here to 🎧 🔊 register to ECHO Bot using Spotify 🥁 🎸</a>`,
    {
      parse_mode: 'HTML'
    }
  );
};
