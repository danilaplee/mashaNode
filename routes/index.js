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
var redir = [];
var request = [];

//VIDEOS

router.get('/video/:id/:link', function(req, res) 
{

	var buffeSize = 60000;
    var checkPipe = function checkPipe(n, redir) 
    {
    	if(progressTime == undefined || progressTime > buffeSize) 
    	{
        	videoStreams[n] = false;
			console.log('videoStream'+n+' Status = '+videoStreams[n])
			redir.destroy();
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
		request[n] = http.get(link, function(response) 
		{
	   		if(response.statusCode == 302) 
	   		{
			    var streamUrl = response.headers.location;
				console.log('videoStream'+n+' Status = '+videoStreams[n])
				redir[n] = http.get(streamUrl, function(response) 
			   	{

				   	if(response.statusCode == 200) 
				   	{

						Transcoder(response)
			    	    .maxSize(640, 480)
			    	    .videoCodec(Codek)
			    	    .videoBitrate(800 * 1000)
			    	    .fps(25)
			    	    .format('mp4')
				        .on('finish', function(finish) {
				            videoStreams[n] == false;
				        	console.log('videoStream-'+n+' Interrupted Connection ')
				        })
				        .on('progress', function(progress) 
				        {
				        	console.log('videoStream-'+n+' Time = '+progress.time)
				        	var progressTime = progress.time;
				        	clearTimeout(killPipe);

				        	if(progress.time >= buffeSize) {
				            	checkPipe(n, redir[n]);
				        	};
				        })
			    	    .stream().pipe(output);
			    	    var killPipe = setTimeout(checkPipe, 10000, n, redir[n]);

			    	}
			    	else 
			    	{
					  	videoStreams[n] = false;
				        console.log('videoStream-'+n+' Interrupted Connection ')
			    	}
			   	})
			}
	    	else 
	    	{
			    videoStreams[n] = false;
				console.log('videoStream-'+n+' Interrupted Connection ')
				request.shouldKeepAlive == false;
	    	}

		});	
	}
	else 
	{
		console.log('videoStream'+n+' Status = '+videoStreams[n])
		// request.shouldKeepAlive == false;
		res.send('videoStream'+n+' Status = '+videoStreams[n])
		
	}

});

module.exports = router;
