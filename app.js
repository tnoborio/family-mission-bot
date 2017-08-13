const linebot = require('linebot')

var bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', function (event) {
  event.reply(event.message.text).then(function (data) {
	 }).catch(function (error) {
		  // error
	 })
})

bot.listen('/linewebhook', (process.env.PORT || 5000))

