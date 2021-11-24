/* ---------------------------------------------------------------------- */
/*                                WAPP                                    */
/* ---------------------------------------------------------------------- */
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console

//https://www.twilio.com/console/sms/whatsapp/sandbox
const accountSid = 'AC0b439be5828c1a88f32b7125b0e73685';
const authToken = '9de493a9f76c17c32ce083db53cf7512';

const client = require('twilio')(accountSid, authToken);
client.messages.create({
      body: `Te paso un foto de Twilio...`,
      mediaUrl: ['https://www.investingmoney.biz/public/img/art/xl/18012019161021Twilio-IoT.jpg'],
      from: 'whatsapp:+14155238886',
      to: 'whatsapp:+5491159617065'
      })
.then(message => console.log(message.sid))
.catch(console.error)    
