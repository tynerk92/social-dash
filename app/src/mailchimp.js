import mailchimp from '@mailchimp/mailchimp_marketing'
console.log('setting mailchimp config');
mailchimp.setConfig({
  apiKey: '123444c62655a5158dd90c6e967d78ac-us20',
  server: 'us20'
})

export default mailchimp
