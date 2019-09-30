const socket = io();

let message_user = document.getElementById('message_user');
let user = document.getElementById('user');
let btn = document.getElementById('send');
let events = document.getElementById('events');
let messages = document.getElementById('messages');

btn.addEventListener('click', function(){
   // console.log(user.value+' '+message_user.value);
    
    socket.emit('message',{
        user:user.value,
        message_user:message_user.value
    });
});


message_user.addEventListener('keypress',function(){
   socket.emit('typing',user.value)
});

socket.on('message',function(data){
    
    messages.innerHTML += `<p>
    <strong>${data.user}</strong>
    ${data.message_user}
    </p>`;
    message_user.value = '';
    events.innerHTML = '';
    
});

socket.on('typing',function(data){
  events.innerHTML = `<p><em>${data} is typing.</em></p>`;
});
