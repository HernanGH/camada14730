const accountSid = 'ssssssssssssssssssssssssssssssssss';
const authToken = 'tttttttttttttttttttttttttttttttt';

const client = require('twilio')(accountSid, authToken);

const numero = process.argv[2]
const mensaje = process.argv[3]

client.messages.create({
      body: mensaje,
      from: 'whatsapp:+14155238886',
      to: `whatsapp:${numero}`
      })
.then(message => console.log(message.sid))
.catch(console.log)    
