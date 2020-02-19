/* eslint-disable @typescript-eslint/camelcase */
import fetch from 'node-fetch';
import qs from 'querystring';
import { SendMessageOptions } from 'node-telegram-bot-api';

export const sendMessage = async (
  chat_id: number | string,
  text: string,
  options?: SendMessageOptions
): Promise<Response> => {
  const params: any = {
    // chat_id: -200983060,
    // chat_id: 141656648,
    chat_id,
    text,
    ...options
  };

  const response = await fetch(
    `https://api.telegram.org/bot${
      process.env.BOT_TOKEN
    }/sendMessage?${qs.stringify(params)}`
  );

  return await response.json();
};
