const https = require('https');

var init = function(key, cid){

	var channelId = cid;
	var apiKey = key;

	var sendMessage = function(message, cb){
		var url = "https://api.telegram.org/bot" + apiKey + "/sendMessage?chat_id="+ channelId + "&text=" + message;
		https.get(url, (res) => {
			var body = '';

		    res.on('data', function(chunk){
		        body += chunk;
		    });

		    res.on('end', function(){
		    	var response = JSON.parse(body);
		    	if(cb){
		   			cb(response);
		    	}
		    });
				  
		}).on('error', (e) => {
		 	console.log(`Got error: ${e.message}`);
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