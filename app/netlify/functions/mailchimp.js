const mailchimp = require('@mailchimp/mailchimp_marketing')

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER
})

exports.handler = async function (event, context) {
  const call = event.queryStringParameters.call;
  let res;

  switch(call) {
    case 'allLists':
      res = await mailchimp.lists.getAllLists();
      return {
        statusCode: 200,
        body: JSON.stringify(res)
      }
    case 'listMembers':
      res = await mailchimp.lists.getListMembersInfo(event.queryStringParameters.id)
      return {
        statusCode: 200,
        body: JSON.stringify(res)
      }
    default:
      console.error('Unsupported mailchimp function')
  }
}
