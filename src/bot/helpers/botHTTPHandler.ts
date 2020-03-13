import fetch from 'node-fetch';
import qs from 'querystring';

export const httpGet = async (
  botMethod: BotMethods,
  params: {}
): Promise<void> => {
  try {
    const res = await fetch(
      `https://api.telegram.org/bot${
        process.env.BOT_TOKEN
      }/${botMethod}?${qs.stringify(params)}`
    );

    if (!res.ok) throw Error(await res.text());
  } catch (error) {
    console.error(error);
  }
};
