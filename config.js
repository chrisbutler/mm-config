/* Magic Mirror Config
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 */

var config = {
  address: "localhost",
  port: 8080,
  ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
  language: "en",
  timeFormat: 12,
  units: "imperial",

  modules: [{
      module: "alert",
    },
    {
      module: "updatenotification",
      position: "top_bar"
    },
    {
      module: "clock",
      position: "upper_third"
    },
    //{
    //  module: "compliments",
    //  position: "lower_third"
    //},
    //
    {
      module: "calendar",
      header: "Upcoming",
      position: "top_left",
      config: {
        calendars: [{
          symbol: "calendar-check-o ",
          url: "https://calendar.google.com/calendar/ical/chrisbutler.me_dh6ilsdcjthkrehrjn1njp9vd0%40group.calendar.google.com/private-4d3ea5d87b7b94e96601d402e4e07e17/basic.ics"
        }]
      }
    },
    {
      module: 'MMM-Hue',
      position: 'bottom_left',
      config: {
        bridgeip: "10.0.1.3",
        userid: "1Uz0GYoAmn-jzPJPA-9Nti47Paxcw2MTzd4OLOdY",
        colour: true
      }
    },
    {
      module: 'MMM-MyCommute',
      position: 'top_right',
      config: {
        apikey: 'AIzaSyAyLjas8NejgGFN7rijndT3-BTm6FVc9sk',
        origin: '9 Orchard St Derby, CT 06477',
        startTime: '00:00',
        endTime: '23:59',
        destinations: [{
            destination: '290 State St New Haven, CT 06510',
            label: 'Work',
            color: '#2F80D1',
            alterantives: true,
          },
          {
            destination: '290 State St New Haven, CT 06510',
            label: 'Work via George & Chapel',
            color: '#2F80D1',
            alterantives: true,
            waypoints: '41.310264, -72.947660|41.305650, -72.924842'
          }
        ]
      }

    },
    {
      module: 'phone_notification',
      position: 'top_right',
      header: 'Phone Notifications',
      config: {
        accessToken: 'o.YUlV7FaHkV4UfYLFEkzCHZsb8up2iBlO',
        numberOfNotifications: 5,
        displayNotificationIcon: true,
        displayMessage: true,
        displayCount: false,
        alert: false,
        fade: true,
        maxCharacters: 50
      }
    },
    //    {
    //        module: 'MMM-trakt',
    //        position: 'bottom_right',
    //        config: {
    //          client_id: 'cc10061b8dc15f6a86ad6dc2674f7a404e9d539402dd5877a76fb524c8e6262a',
    //          client_secret: '63e7e6c486363be60eee9dbd74f369fc7f82774594a165aef91fe4d4a4b33b00',
    //          // days: 2
    //        }
    //    },
    {
      module: 'MMM-uptimerobot',
      position: "bottom_right",
      header: "Uptime Robot",
      config: {
        api_key: 'u21062-a350d86868d276f56bd7788e',
        useIcons: true,
        useColors: true
      }
    },
    {
      module: "MMM-cryptocurrency",
      position: "top_right",
      config: {
        currency: ['ethereum', 'bitcoin', 'litecoin'],
        conversion: 'USD',
        headers: ['change24h', 'change1h', 'change7d'],
        displayType: 'logoWithChanges',
        showGraphs: true,
        coloredLogos: true
      }
    },
    {
      module: "currentweather",
      position: "lower_third",
      config: {
        location: "New Haven",
        locationID: "4839366",
        appid: "4af5c0f385ba402e8635d6763ed047c7"
      }
    },
    {
      module: "weatherforecast",
      position: "bottom_left",
      header: "Weather Forecast",
      config: {
        location: "New Haven",
        locationID: "4839366",
        appid: "4af5c0f385ba402e8635d6763ed047c7"
      }
    },
    {
      module: "newsfeed",
      position: "bottom_bar",
      config: {
        feeds: [{
            title: "New York Times",
            url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
          },
          {
            title: "Hacker News",
            url: "https://news.ycombinator.com/rss"
          }
        ],
        showSourceTitle: true,
        showPublishDate: true
      }
    }
  ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
  module.exports = config;
}
