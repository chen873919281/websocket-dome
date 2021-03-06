var ws = require("nodejs-websocket");
console.log("开始建立连接...")
var res = ''
var timer = null
var server = ws.createServer(function(conn){
    conn.on("text", function (str) {
      console.log('连接成功')
      timer = setInterval(function () {
        res = Math.random()
        conn.sendText(String(res))
      }, 1000)
    })
    conn.on("close", function (code, reason) {
        console.log("关闭连接")
        clearInterval(timer)
    });
    conn.on("error", function (code, reason) {
        console.log("异常关闭")
    });
}).listen(8001)
console.log("WebSocket建立完毕")