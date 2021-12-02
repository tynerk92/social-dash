const mailchimp = require('@mailchimp/mailchimp_marketing')
import { env } from '$lib/env'

mailchimp.setConfig({
  apiKey: process.env.VITE_MAILCHIMP_API_KEY,
  server: process.env.VITE_MAILCHIMP_SERVER
})

const handler: Handler = async (event, context) => {
  const res = await mailchimp.lists.getAllLists();
  return {
    statusCode: 200,
    body: JSON.stringify(res)
  }
}

export { handler }
