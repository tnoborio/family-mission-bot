const express = require('express'),
      bodyParser = require('body-parser'),
      linebot = require('linebot')

const groupId = process.env.GROUP_ID

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', (event) => {
  console.log(event.source.groupId)
  event.reply('今日のミッションは、\nママ: 部屋掃除\nパパ: 朝顔の水やり\nこっきー: ピアノの練習\nです!').then((data) => {
	 }).catch((err) => {
		  // error
	 })
})

const app = express()
app.use( bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.post('/linewebhook', bot.parser())

app.post('/post', (req, res) => {
  console.log(req.body)
  bot.post(groupId, {
    type: 'text',
    text: req.body.text
  }).catch((err) => {
    console.log("err: " + err)
  })
  res.send('ok')
})

app.listen(process.env.PORT || 5000)

// curl -X POST https://family-mission.herokuapp.com/post --data-urlencode "text=ママが「部屋掃除」ミッションをクリアしました！"
