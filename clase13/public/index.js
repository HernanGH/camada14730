document.addEventListener("DOMContentLoaded", function () {
  const socket = io();
  const addMessage = () => {
   
    let message = {
      author: document.querySelector("#username").value,
      text: document.querySelector("#text").value,
    };
   console.log('Mensaje enviado...');
    socket.emit("new-message", message);
    return false;
  };
  document.querySelector('form').addEventListener("submit",function(e){
  e.preventDefault();
   addMessage();
  })

  const render = (data) => {
    let html = data
      .map(
        (e) => `
         <div>
         <strong>${e.text}</strong>:
         <em>${e.author}</em>
         </div>
        `
      )
      .join(" ");
    document.querySelector("#messages").innerHTML = html;
  };

  socket.on("messages", (data) => {
    render(data);
  });

});
