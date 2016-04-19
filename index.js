var request = require('request');

var init = function(cid){

	var channelId = cid;

	var sendMessage = function(message, cb){
		var url = "https://api.telegram.org/bot201093357:AAE6Zy0V-g7kuuYHp0Owl8LXo3FqKBtXXsE/sendMessage?chat_id="+ channelId + "&text=" + message;
		
		request(url, function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		    var response = JSON.parse(body);
	    	if(cb){
	   			cb(response);
	    	}
		  }else{
		  	console.log("Got error: %s",error.message);
		  }
		});
	}

	sendMessage("Node Exception Bot started successfully.", function(r){
		sendMessage("If you want to keep your Telegram Channel private. Provide this as your channel id to this module: " + r.result.chat.id)
	});

	var sendErrorMessage = function(err){
		sendMessage(err,function(){
			console.log("exit");
			process.exit();
		});
	}

	process.on('uncaughtException', function (err) {
		sendErrorMessage((new Date).toUTCString() + ' uncaughtException: ' + err.stack);
		//console.log((new Date).toUTCString() + ' uncaughtException:', err.message);
		// console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
		// console.error(err.stack)
		//process.exit(1)
	})
};

module.exports = init;