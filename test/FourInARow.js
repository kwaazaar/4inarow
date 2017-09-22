var FourInARow = artifacts.require("./FourInARow.sol");

contract('FourInARow', function(accounts) {
  it("should should not have players after create without funds", function() {
    return FourInARow.deployed().then(function(i) {
        return i.whoPlays.call();
    }).then(function(players) {
        assert.equal(players.length, 2, "too many players");
    });
  });
    
  it("should have correct maxDeposit", function() {
    return FourInARow.deployed().then(function(i) {
        i.send({value: 10000000, from: accounts[0]});
        return i.maxDeposited.call();
    }).then(function(m) {
      console.log(m);
      assert.equal(m[0], accounts[0], "wrong depositor");
      //assert.equal(m.amount, 10000000, "wrong amount");
    });
  });
  
  /*
  it("should call a function that depends on a linked library", function() {
    var meta;
    var metaCoinBalance;
    var metaCoinEthBalance;

    return FourInARow.deployed().then(function(instance) {
      meta = instance;
      return meta.getBalance.call(accounts[0]);
    }).then(function(outCoinBalance) {
      metaCoinBalance = outCoinBalance.toNumber();
      return meta.getBalanceInEth.call(accounts[0]);
    }).then(function(outCoinBalanceEth) {
      metaCoinEthBalance = outCoinBalanceEth.toNumber();
    }).then(function() {
      assert.equal(metaCoinEthBalance, 2 * metaCoinBalance, "Library function returned unexpected function, linkage may be broken");
    });
  });

  it("should send coin correctly", function() {
    var meta;

    // Get initial balances of first and second account.
    var account_one = accounts[0];
    var account_two = accounts[1];

    var account_one_starting_balance;
    var account_two_starting_balance;
    var account_one_ending_balance;
    var account_two_ending_balance;

    var amount = 10;

    return FourInARow.deployed().then(function(instance) {
      meta = instance;
      return meta.getBalance.call(account_one);
    }).then(function(balance) {
      account_one_starting_balance = balance.toNumber();
      return meta.getBalance.call(account_two);
    }).then(function(balance) {
      account_two_starting_balance = balance.toNumber();
      return meta.sendCoin(account_two, amount, {from: account_one});
    }).then(function() {
      return meta.getBalance.call(account_one);
    }).then(function(balance) {
      account_one_ending_balance = balance.toNumber();
      return meta.getBalance.call(account_two);
    }).then(function(balance) {
      account_two_ending_balance = balance.toNumber();

      assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
      assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
    });
  });
  */
});
