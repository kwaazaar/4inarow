if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

var addr = "0xf668e1853a9db71930ef03738da3fd4dbbc0188a";
var FourInARow = web3.eth