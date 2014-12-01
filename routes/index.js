//MODULES

var express = require('express');
var Transcoder = require('stream-transcoder');
var http = require('http');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var progressTime = undefined;
var router = express.Router();

var app = express(); 

var videoStreams = [];

//VIDEOS

router.get('/video/:id/:link', function(req, res) 
{

    var checkPipe = function checkPipe(n, redir) 
    {
    	if(progressTime == undefined) 
    	{
        	videoStreams[n] = false;
			console.log('videoStream'+n+' Status = '+videoStreams[n])
			redir.shouldKeepAlive == false;
    	}
    }
	var n = req.params.id;
	if(!videoStreams[n] || videoStreams[n] == false) 
	{
		console.log('videoStream'+n+' Status = '+videoStreams[n])
		videoStreams[n] = true;
		var link = decodeURIComponent(req.params.link);
		var output  = fs.createWriteStream("public/videos/output"+n+".mp4");
		if(n < 3) 
		{
			var Codek = 'h264';
		}
		var request = http.get(link, function(response) 
		{
	   		if(response.statusCode == 302) 
	   		{
	   			// console.log(response.statusCode)
			    var streamUrl = response.headers.location;
				console.log('videoStream'+n+' Status = '+videoStreams[n])
				// console.log(videoStreams);
				var redir = http.get(streamUrl, function(response) 
			   	{

				   	if(response.statusCode == 200) 
				   	{

						Transcoder(response)
			    	    .maxSize(640, 480)
			    	    .videoCodec(Codek)
			    	    .videoBitrate(800 * 1000)
			    	    .fps(25)
			    	    .format('mp4')
				        .on('finish', function() {
				            videoStreams[n] == false;
				        	console.log(videoStreams);
				        })
				        .on('progress', function(progress) 
				        {
				        	console.log('videoStream'+n+' Time = '+progress.time)
				        	var progressTime = progress.time;
				        	clearTimeout(killPipe);

				        	if(progress.time >= 32000) {
				        		console.log('end');
								console.log('videoStream'+n+' Status = '+videoStreams[n])
				            	console.log(redir);
				        	};
				        })
			    	    .stream().pipe(output);
			    	    var killPipe = setTimeout(checkPipe, 10000, n, redir);

			    	}
			    	else 
			    	{
					  	videoStreams[n] = false;
						console.log('videoStream'+n+' Status = '+videoStreams[n])
			    	}
			   	})
			}
	    	else 
	    	{
			    videoStreams[n] = false;
				console.log('videoStream'+n+' Status = '+videoStreams[n])
				request.shouldKeepAlive == false;
	    	}

		});	
	}
	else 
	{
		console.log('videoStream'+n+' Status = '+videoStreams[n])
		// request.shouldKeepAlive == false;
		
	}

});

module.exports = router;
