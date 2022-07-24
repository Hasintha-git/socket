const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8082 })

wss.on("connection", ws => {
    console.log("New Client Conneccted")
    // let i = 0
    let timerId = setTimeout(function tick() {
        // const list=[1,2,3,4]
        // i=i+1
        ws.send("Socket Running !")
        timerId = setTimeout(tick, 15000);
    }, 15000);

    ws.on("close", () => {
        console.log("Client has diconnected")
    });
});


//npm install >>>> cd server >>  G:\Project\Socket\server>  >>> node index.js