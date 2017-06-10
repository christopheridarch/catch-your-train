const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')
const support = ['Audio', 'Video', 'Text']

export default async function showLanguage(res) {
  console.log('CHAPTERS')

  const replies = []
  const quickReplies = []
  support.forEach((l) => {
    quickReplies.push({
      name: l,
      value: `I would like ${l} support`,
    })
  })
  replies.push(formatter.formatQuickReplies(quickReplies,res.reply()))
  return replies
}
