//MODULES

var express = require('express');
var Transcoder = require('stream-transcoder');
var http = require('http');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var router = express.Router();

var app = express(); 

var videoStreams = [];

//VIDEOS

router.get('/video/:id/:link', function(req, res) 
{

	var n = req.params.id;
	if(!videoStreams[n] || videoStreams[n] == false) 
	{
		videoStreams[n] = true;
		var link = decodeURIComponent(req.params.link);
		var output  = fs.createWriteStream("public/videos/output"+n+".mp4");
		if(n < 3) 
		{
			var Codek = 'h264';
		}
		var request = http.get(link, function(response) 
		{
		    var streamUrl = response.headers.location;
		 //    console.log(streamUrl);
			console.log(videoStreams);

			var redir = http.get(streamUrl, function(response) 
		   	{
				// videoStreams[n].redir = this;
			   	if(response.statusCode == 200) 
			   	{
		    		videoStreams[n] = new Transcoder(response)
			    	    .maxSize(640, 480)
			    	    .videoCodec(Codek)
			    	    .videoBitrate(800 * 1000)
			    	    .fps(25)
			    	    .format('mp4')
				        .on('finish', function() {
				            videoStreams[n] == false;
				        	console.log(videoStreams);
				        })
			    	    .stream().pipe(output);
		    	}
		    	else 
		    	{
				   videoStreams[n] == false;
				   console.log(videoStreams);
		    	}
		   	})

		});	
	}
	else 
	{
		console.log('videoStream'+n+' Status = '+videoStreams[n])
	}

});

module.exports = router;
