import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER
})

const handler: Handler = async (event, context) => {
  const res = await mailchimp.lists.getAllLists();
  return {
    statusCode: 200,
    body: JSON.stringify(res)
  }
}

export { handler }
