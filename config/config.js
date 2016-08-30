/* Magic Mirror Config
 *
 * MIT Licensed.
 */

var config = {
	port: 8080,

	language: 'en',
	timeFormat: 12,
	units: 'imperial',

	modules: [
		{
			module: 'alert',
		},
		{
			module: 'MMM-Facial-Recognition',
			position: 'top_left',
			config: {
					users: ['Jimmy']	
				}
		},
		{
			module: 'clock',
			position: 'top_left',
			classes: 'default',
			config: {
				clockBold: false
			}
		},
		{
			module: 'calendar',
			header: 'KenDen',
			position: 'top_left',
			classes : 'for_all',
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'http://outlook.office365.com/owa/calendar/6147b33fb54f4f9aabfb6425688eeaeb@theboylefamily.net/2c3a736a8e4e4d608eb165e0f3c1ce2b1030085845590102735/calendar.ics'
					},
					{
						symbol: 'calendar-check-o ',
						url: 'http://outlook.office365.com/owa/calendar/b4a36544da074b75800cd519323b9494@zagmail.gonzaga.edu/15800f3a629d41178de377a4ec3b458e17649869858939752536/calendar.ics'
					}
				]
			}
		},
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'Spokane,US',
				//locationID: '5809402',  //ID from bulk.openweather.org/sample/
				appid: '0797da8505f5b1f455950764d36345ae'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			classes: 'Jimmy',
			config: {
	        		location: 'Spokane,US',
				//locationID: '5809402',  //ID from bulk.openweather.org/sample/
			        appid: '0797da8505f5b1f455950764d36345ae'
			}
		},
		{
			module: 'newsfeed',
			position: 'bottom',
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: false,
				showPublishDate: true,
				showDescription: true
			}
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
