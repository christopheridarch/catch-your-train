const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')
const cl = ['6e', '5e', '4e', '3e']

export default async function showLanguage(res) {
  console.log('GREETINGS')

  const replies = []
  const quickReplies = []
  cl.forEach((l) => {
    quickReplies.push({
      name: l,
      value: `I'm in class ${l}`,
    })
  })
  replies.push(formatter.formatQuickReplies(quickReplies,res.reply()))
  return replies
}
