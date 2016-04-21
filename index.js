var request = require('request');

var init = function(key, name){
	var apiKey = key;
	var prefix = "";
	if(name){
		prefix = name + ": ";
	}

	var sendMessage = function(message, cb){
		console.log(message);
		var url = "https://node-exception-bot.herokuapp.com/exception?token=" + apiKey + "&message=" + message;
		
		request.get(url, function (error, response, body) {
			if(error){
				console.log(error);
			}
			cb(response);
		});
	}
	sendMessage(prefix + (new Date).toUTCString() + " Node Exception Bot started successfully.");

	var sendErrorMessage = function(err){
		sendMessage(err,function(){
			process.exit();
		});
	}

	process.on('uncaughtException', function (err) {
		setTimeout(function(){
			sendErrorMessage(prefix + (new Date).toUTCString() + ' uncaughtException: ' + err.stack);
		},100);
	})
};

module.exports = init;