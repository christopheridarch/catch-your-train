const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')

export default async function showLanguage(res) {
  console.log('SUPPORT')

  const replies = []
  replies.push(formatter.formatMsg(res.reply()))
  replies.push(formatter.formatVideo('https://raw.githubusercontent.com/christopheridarch/catch-your-train/master/assets/tables.mp4'))
  return replies
}
