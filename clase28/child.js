const {exec} = require('child_process');

exec('ls -lh',(error,stdout,stderr)=>{

console.log(`stdout:\n${stdout}`);
})
