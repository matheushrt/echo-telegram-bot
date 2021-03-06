import { RequestHandler } from 'express';
import { Message } from 'node-telegram-bot-api';
import * as botCommands from '../bot/commands';

export const webhookMiddleware: RequestHandler = async (req, res) => {
  const { body } = req;
  const message: Message = body?.message || null;
  const isBotCommand = message?.entities?.find(e => e.type === 'bot_command');
  if (isBotCommand) {
    const { text } = message;
    const command = text?.includes('@')
      ? text.split('@')[0].substr(1)
      : text.substr(1);
    const botCommand = `${command}Command`;
    botCommands[botCommand](message);
  } else {
    console.warn('Not a bot command:', body);
  }

  res.sendStatus(200);
};
