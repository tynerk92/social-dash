const mailchimp = require('@mailchimp/mailchimp_marketing')
import { env } from '$lib/env'

mailchimp.setConfig({
  apiKey: env.MAILCHIMP_API_KEY,
  server: env.MAILCHIMP_SERVER
})

const handler: Handler = async (event, context) => {
  const res = await mailchimp.lists.getAllLists();
  return {
    statusCode: 200,
    body: JSON.stringify(res)
  }
}

export { handler }
