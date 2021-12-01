import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: '123444c62655a5158dd90c6e967d78ac',
  server: 'us20'
})

async function run() {
  const repsonse = await mailchimp.ping.get()
  console.log(response)
}

run()

export default mailchimp
