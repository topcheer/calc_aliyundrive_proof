const BigNumber = require('bignumber.js')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const { v } = require('./mt')

const argv = yargs(hideBin(process.argv)).argv

const token = argv.token
const size = argv.size
if(token==null)
{
    console.log("token is required")
    return
}
if(size==null)
{
    console.log("size is required")
    return
}

// console.log(v(token))
const mt = v
r  = new BigNumber("0x".concat(mt(token).slice(0,16)))
q = new BigNumber(size)
x = q? r.mod(q) : new BigNumber(0);
console.log(x.toNumber())

