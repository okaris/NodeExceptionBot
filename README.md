# NodeExceptionBot

A Telegram Bot keeps you updated about the uncaught exceptions from your node server.

# Setup

To use this module you need a Telegram account and a Telegram Bot. 

To get telegram go to : https://telegram.org

To create your Telegram bot, using Telegram, chat with **@BotFather** and follow instructions to create a bot.

You need to supply **two variable**s to the module. The first is your **Telegram Bot API Key** and the second is your **channelId**. If your channel is a public channel you can supply your channel name as *"@myChannel"* to the module. If you want to create a private channel, first create a public channel and initialize the NodeExceptionBot, when you do, you will receive the original id of your channel to use after you change it to private.

# Usage

Just importing the module with correct variables is sufficient.

`var exception = require('node-exception-bot')("API-KEY","CHANNEL-ID");`

If you have any questions feel free to reach me here on the issues.

Okaris