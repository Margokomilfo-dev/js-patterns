//function-constructor
function Server1(name, ip) {
    this.name = name
    this.ip = ip
}
Server1.prototype.getUrl = function () {
    return `https://${this.ip}:80`
}
const server1_aws = new Server1('AWS German', '82.21.21.35')
console.log(server1_aws.getUrl())

//-------------------------------------------------------------------------

//class-constructor
class Server2{
    constructor(name, ip) {
        this.name = name
        this.ip = ip
    }
    getUrl() {
        return `https://${this.ip}:80`
    }
}
const server2_aws = new Server2('AWS Poland', '82.21.21.35')
console.log(server2_aws.getUrl())