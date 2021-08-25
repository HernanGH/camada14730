document.addEventListener("DOMContentLoaded", function () {
  const socket = io();
  const inp = document.querySelector("#mensaje");
  const my_template = document.querySelector("#my_template");
  const to_render = document.querySelector("#to_render");
  const mensajes = [];
  socket.on("message", (data) => {
    console.log(data);
  });

  socket.on("user_keyup", (data) => {
      console.log(data);
    mensajes.push(data);
    const template = ejs.compile(my_template.innerHTML);
    to_render.innerHTML = template({ items: mensajes,title:'Mi primera app socket' });
  });
  inp.addEventListener("keyup", (e) => {
    if (e.keyCode == 13) {
      socket.emit("keyup", { value: e.target.value });
      e.target.value = "";
    }
  });
});
