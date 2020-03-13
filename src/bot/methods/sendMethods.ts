/* eslint-disable @typescript-eslint/camelcase */
import { SendMessageOptions } from 'node-telegram-bot-api';
import { httpGet } from '../helpers/botHTTPHandler';

export const sendMessage = async (
  chat_id: number | string,
  text: string,
  options?: SendMessageOptions
): Promise<void> => {
  const params: {} = {
    chat_id,
    text,
    ...options
  };

  try {
    await httpGet('sendMessage', params);
  } catch (error) {
    console.error(error);
  }
};
