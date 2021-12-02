const mailchimp = require('@mailchimp/mailchimp_marketing')

mailchimp.setConfig({
  apiKey: '123444c62655a5158dd90c6e967d78ac-us20',
  server: 'us20'
})

exports.handler = async function(event, context) {
  const res = await mailchimp.ping.get()
  return {
    statusCode: 200,
    body: JSON.stringify(res)
  }
}
