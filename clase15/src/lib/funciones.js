const getTime = ()=>{

  let fechahora = new Date().toLocaleString();
  let timestamp = Date.now();
  return {fechahora,timestamp}

}

module.exports = {

	getTime
}