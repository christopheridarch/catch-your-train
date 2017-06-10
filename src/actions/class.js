const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')
const subject = ['Maths', 'History', 'Geography', 'Fench', 'English']

export default async function showLanguage(res) {
  console.log('CLASS')

  const replies = []
  const quickReplies = []
  subject.forEach((l) => {
    quickReplies.push({
      name: l,
      value: `I want to learn ${l}`,
    })
  })
  replies.push(formatter.formatQuickReplies(quickReplies,res.reply()))
  return replies
}
