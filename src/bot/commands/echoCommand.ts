/* eslint-disable @typescript-eslint/camelcase */
import { Message } from 'node-telegram-bot-api';
import { sendMessage } from '../methods';

export default async (message: Message): Promise<void> => {
  const telegramId = message.chat.id;
  await sendMessage(telegramId, 'eis as musics!!');
};
