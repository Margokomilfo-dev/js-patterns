//class-constructor
class Server{
    constructor(ip, port) {
        this.ip = ip
        this.port = port
    }
    get url() {
        return `https://${this.ip}:${this.port}`
    }
}
//decorator added the layer of metadata for future use of exists objects

function aws(server){
    server.isAws = true
    server.awsInfo = function (){
        return server.url
    }
    return server
}
function azure(server){
    server.isAzure = true
    server.port += 500
    return server
}
const s1 = aws(new Server('12.12.35.47', 8080))
const s2 = azure(new Server('11.22.35.33', 1000))
console.log(s1.awsInfo())
console.log(s2.url)