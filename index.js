const https = require('https');

var channelId = "";

var sendMessage = function(message){
	var url = "https://api.telegram.org/bot201093357:AAE6Zy0V-g7kuuYHp0Owl8LXo3FqKBtXXsE/sendMessage?chat_id=@okbottest&text=" + message;
	https.get(url, (res) => {
		console.log('If you want to keep your Telegram Channel private. Provide this as your channel id to this module:' + res.data.result.chat.id);
	  console.log(`Got response: ${res.statusCode}`);
	  // consume response body
	  res.resume();
	}).on('error', (e) => {
	  console.log(`Got error: ${e.message}`);
	});
}

sendMessage("Bot started successfully");

process.on('uncaughtException', function (err) {
	sendMessage((new Date).toUTCString() + ' uncaughtException:', err.message);
	// console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
	// console.error(err.stack)
	process.exit(1)
})