#!/usr/bin/env node

var http = require('http'),
	querystring = require('querystring'),
	weatherUrl = 'http://api.openweathermap.org/data/2.1/find/name?q=Moscow,RU';

http.get(weatherUrl,
	function(res)
	{
		res.setEncoding('utf8');
		res.on('data',
			function(chunk)
			{
				var weatherData = eval('(' + chunk + ')'),
					temperature = parseInt(weatherData.list[0].main.temp - 273), 
					status = weatherData.list[0].weather[0].icon,
					icon = "";
				switch(status)
				{
					case '01d':
						icon = "☀";
						break;
					case '01n':
						icon = "☽";
						break;
					case '02d':
						icon = "☁";
						break;
					case '02n':
						icon = "☁";
						break;
					case '03d':
						icon = "☁";
						break;
					case '03n':
						icon = "☁";
						break;
					case '04d':
						icon = "☁";
						break;
					case '04n':
						icon = "☁";
						break;
					case '09d':
						icon = "☔";
						break;
					case '09n':
						icon = "☔";
						break;
					case '10d':
						icon = "☂";
						break;
					case '10n':
						icon = "☂";
						break;
					case '11d':
						icon = "☇";
						break;
					case '11n':
						icon = "☇";
						break;
					case '13d':
						icon = "☸";
						break;
					case '13n':
						icon = "☸";
						break;
					case '50d':
						icon = "☵";
						break;
					case '50n':
						icon = "☵";
						break;
				}
				var output = { "name": "weather", "full_text": "Moscow: " + icon + " " + temperature, "color": "#FFCC00", "separator": false };
				console.log(JSON.stringify(output) + ",");
			}
		);
	}
);
