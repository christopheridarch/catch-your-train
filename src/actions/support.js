const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')

export default async function showLanguage(res) {
  console.log('SUPPORT')

  const replies = []
  replies.push(formatter.formatMsg(res.reply()))
  replies.push(formatter.formaVideot('https://www.youtube.com/watch?v=7-ryWoZ1UoI'))
  return replies
}
