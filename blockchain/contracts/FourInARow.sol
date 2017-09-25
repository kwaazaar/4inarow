pragma solidity ^0.4.11;

contract FourInARow {
    
    address _owner;

    mapping (address => uint) _players;
    mapping (address => uint) _playerRefunds;
    uint8[7][6] _grid;
    address _p1;
    address _p2;

    bool _started;
    uint8 _lastMoveBy;
    event MoveMade(address, uint8 row, uint8 col);
    event GameStarted(address p1, address p2, uint amount);

    /* Constructor */
    function FourInARow() public payable {
        _owner = msg.sender;
        _p1 = address(0);
        _p2 = address(0);
        _started = false;

        if (msg.value > 0)
            deposit(msg.sender, msg.value);
    }

    /* Fallback, can be used for joining/making deposit, can fail when already 2 players */
    function () public payable {
        if (msg.value > 0)
            deposit(msg.sender, msg.value);
    }

    /* Joining is also possible by just calling deposit */
    //function deposit() payable {
    //    deposit(msg.sender, msg.value);
    //}

    /* Internal deposit-handling function */
    function deposit(address player, uint amount) private {
        require(_p2 == address(0) || _players[player] > 0); // New player possible or existing player depositing more
        _players[player] += amount;

        if (_p1 == address(0)) {
            _p1 = player;
        } else if (_p1 != player) {
            _p2 = player;
        } 
    }

    /* Internal function for determining which player deposited most and how much */
    function maxDeposited() constant returns (address player, uint amount) {
        player = _p1;
        amount = _players[_p1];

        uint amountP2 = _players[_p2];
        if (amountP2 > amount) {
            player = _p2;
            amount = amountP2; 
        }

        return (player,amount);
    }

    /* Starts the game */
    function startGame() payable public {
        // Player can join by just calling startGame AND sending funds as well
        if (msg.value > 0)
            deposit(msg.sender, msg.value);
        
        require(_p2 != address(0)); // We must have two players!

        uint amountMax;
        address playerMax;
        (playerMax, amountMax) = maxDeposited();

        uint amountPlay = (playerMax == _p1) ? _players[_p2] : _players[_p1];

        // Register refund if one of the players deposited more than the other
        if (amountPlay < amountMax) {
            _players[playerMax] = amountPlay; // Both same bet now
            _playerRefunds[playerMax] += (amountMax - amountPlay); // += since this may have been invoked before
            //assert(_players[playerMax] == (amountPlay + _playerRefunds[playerMax]));
        }

        _started = true;
        GameStarted(_p1, _p2, amountPlay);
    }

    function getPlayerNum(address player) private constant returns (uint8 num) {
        if (player == _p1)
            return 1;
        else if (player == _p2)
            return 2;
        return 0;
    }

    function cellAt(uint8 row, uint8 col) private constant returns (uint8 num) {
        return _grid[row-1][col-1];
    }

    function setCell(uint8 row, uint8 col, uint8 playerNum) private returns (bool isFree) {
        isFree = (cellAt(row, col) == 0);
        if (isFree)
            _grid[row-1][col-1] = playerNum;
        return isFree;
    }

    function getFirstEmptyRow(uint8 col) private constant returns (uint8 row) {
        for (uint8 i = 1; i <= 6; i++) {
            if (cellAt(i, col) == 0)
                return i;
        }
        return 0;
    }

    function makeMove (uint8 row, uint8 col) public returns (bool isValid) {
        isValid = false;

        uint8 playerNum = getPlayerNum(msg.sender);
        uint8 nextFreeRow = getFirstEmptyRow(col);

        if (playerNum > 0 && playerNum != _lastMoveBy && nextFreeRow > 0) {
            isValid = setCell(row, col, playerNum);
        }

        if (isValid) {
            _lastMoveBy = playerNum;
            MoveMade(msg.sender, row, col);
        }

        return isValid;
    }

    function whoPlays() constant returns (address p1, address p2) {
        return (_p1, _p2);
    }

    function currentGrid() constant returns (uint8[7][6] grid) {
        return _grid;
    }
}