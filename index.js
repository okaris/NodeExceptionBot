var request = require('request');

var init = function(key, name){
	var apiKey = key;
	var prefix = "";
	if(name){
		prefix = nme + ": ";
	}

	var sendMessage = function(message, cb){
		var url = "https://node-exception-bot.herokuapp.com/exception?token=" + apiKey + "&message=" + message;
		
		request.get(url, function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		    var response = JSON.parse(body);
	    	if(cb){
	   			cb(response);
	    	}
		  }else{
		  	console.log(response);
		  }
		});
	}

	sendMessage(prefix + "Node Exception Bot started successfully.");

	var sendErrorMessage = function(err){
		sendMessage(err,function(){
			console.log("exit");
			process.exit();
		});
	}

	process.on('uncaughtException', function (err) {
		sendErrorMessage(prefix + (new Date).toUTCString() + ' uncaughtException: ' + err.stack);
		//console.log((new Date).toUTCString() + ' uncaughtException:', err.stack);
		// console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
		// console.error(err.stack)
		//process.exit(1)
	})
};

module.exports = init;