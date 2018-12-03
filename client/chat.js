var client = new WebSocket("ws://127.0.0.1:8080/chat?pseudo='toto'");
client.onopen=function(event) {
    client.send("hello");

}

client.addEventListener('open',function (event){
    console.log("connecte");
});