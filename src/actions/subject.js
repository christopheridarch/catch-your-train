const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')
const chapters = ['Fractions', 'Triangles', 'Symétrie']

export default async function showLanguage(res) {
  console.log('SUBJECT')

  const replies = []
  const quickReplies = []
  chapters.forEach((l) => {
    quickReplies.push({
      name: l,
      value: `I'd like to do chapters in ${l}`,
    })
  })
  replies.push(formatter.formatQuickReplies(quickReplies,res.reply()))
  return replies
}
