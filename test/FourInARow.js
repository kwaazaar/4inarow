var FourInARow = artifacts.require("./FourInARow.sol");

contract('FourInARow', function(accounts) {
  it("should should not have players after create without funds", function() {
    return FourInARow.deployed().then(function(i) {
        return i.whoPlays.call();
    }).then(function(players) {
      assert.equal(players.length, 2, "too many players");
      assert.equal(players[0], 0, "P1 already set");
      assert.equal(players[1], 0, "P2 already set");
    });
  });

  it("should should have one player after create WITH funds", function() {
    return FourInARow.new({value: 2000000, gas: 900000, from: accounts[0]}).then(function(i) {
        return i.whoPlays.call();
    }).then(function(players) {
      assert.equal(players.length, 2, "too many players");
      assert.equal(players[0], accounts[0], "P1 not set");
      assert.equal(players[1], 0, "P2 already set");
    });
  });
    
  it("should have correct maxDeposit on fallback", function() {
    return FourInARow.deployed().then(function(i) {
      var m = i;
      // Test fallback
      return i.sendTransaction({value: 10000000, gas: 900000, from: accounts[0]})
      .then(function() {
        return i.maxDeposited.call();
      }).then(function(m) {
        //console.log(m);
        assert.equal(m[0], accounts[0], "wrong 1st depositor");
        assert.equal(m[1].c[0], 10000000, "wrong 1st amount");
      });
    });
  });
    
  it("should have correct maxDeposit after second higher deposit", function() {
    return FourInARow.deployed().then(function(i) {
      var f = i;
      console.log('a[0]:', accounts[0]);
      console.log('a[1]:', accounts[1]);
      return f.sendTransaction({value:   10000000, gas: 900000, from: accounts[0]}).then(function() {
        return f.sendTransaction({value: 20000000, gas: 900000, from: accounts[1]});
        }).then(function() {
            return f.maxDeposited.call();
        }).then (function (m) {
          console.log(m);
          //f.whoPlays.call().then(function (r) { console.log(r);});
          assert.equal(m[0], accounts[1], "wrong 2nd depositor");
          assert.equal(m[1].c[0], 20000000, "wrong 2nd amount");
        });
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
