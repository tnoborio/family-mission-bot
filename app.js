const linebot = require('linebot')

var bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', function (event) {
  console.log(event.source.groupId)
  event.reply("今日のミッションは、\nママ: 部屋掃除\nパパ: 朝顔の水やり\nこっきー: ピアノの練習\nです!").then(function (data) {
	 }).catch(function (error) {
		  // error
	 })
})

bot.listen('/linewebhook', (process.env.PORT || 5000))

