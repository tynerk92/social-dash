import mailchimp from '../../src/mailchimp.js'
exports.handler = async function(event, context) {
  const res = mailchimp.lists.getAllLists()
  return {
    statusCode: 200,
    body: JSON.stringify(res)
  }
}
