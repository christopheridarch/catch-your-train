const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')
const class = ['CP', 'CE1', 'CE2', 'CM1', 'CM2']

export default async function showLanguage(res) {
  console.log('GREETINGS')

  const replies = []
  const quickReplies = []
  class.forEach((l) => {
    quickReplies.push({
      name: l,
      value: `I'm in class ${l}`,
    })
  })
  replies.push(formatter.formatQuickReplies(quickReplies,res.reply()))
  return replies
}
