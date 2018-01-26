export class Game {

    constructor(doc, win, onclick, classname, showMessage) {
        this.doc = doc;
        this.win = win;
        this.classname = classname;
        this.showMessage = showMessage;

        this.finished = false;
    }

    init(newGameLabel, wonLabel, colorId, hook, p1, p2) {
        // Init basic vars (for ui)
        this.newgameLabel = newGameLabel;
        this.wonLabel = wonLabel;
        this.cid = colorId;
        this.colorLabel = this.doc.getElementById(colorId);
        this.players = [this.doc.getElementById(p1).innerHTML, this.doc.getElementById(p2).innerHTML];
        this.laststart = 0;

        // Hook the onclick-event to each cell in the grid
        for (var row = 1; row < 7; row++)
        for (var col = 1; col < 8; col++)
            this.cellAt(row, col).onclick = function (g,col) {
                return function () {
                    if (!this.finished)
                        // Loop through the cells in this column from bottom to top to find the first unoccupied cell
                        for (var row = 6; row > 0; row--)
                            if (!g.cellAt(row, col)[g.classname]) { // Check if empty
                                g.makeMove(row, col, 0);
                                break; // Found one, so exit the for-loop
                            }
                };
            }(this,col); // Pass col as argument to onclick-event
        ;

        // Hook restart-button onclick-event
        this.doc.getElementById(hook).onclick = function () {
            this.win[this.showMessage](this.doc.getElementById(this.newgameLabel).innerHTML) && this.start() // When confirmed, run start() to restart the game
        };
    }

    // Returns the cell (TD) that represents this position in the grid
    cellAt (row, col) {
        return this.doc.getElementById(this.cid + row + col); // "color" + "<row>" + "<col>", eg: "color16" for top row, 6th column
    }
        
    // Returns true if the cell is occupied by current player (ref: current)
    isCurrentColor (row, col) {
        return this.cellAt(row, col)[this.classname] === this.players[this.current];
    }
        
    // Initializes a new game by resetting vars and clearing the grid
    start () {
        // Determine who gets to start the game
        this.current = this.laststart = (this.laststart + 1) % 2;
        this.finished = 0; // Nope, just startin'
        // Initialize the 'Who's turn' indicator
        this.colorLabel.innerHTML = this.colorLabel[this.classname] = this.players[this.current = (this.current + 1) % 2];
        // Clear the grid
        for (var row = 1; row < 7; row++)
            for (var col = 1; col < 8; col++)
                this.cellAt(row, col)[this.classname] = '';
    }
        
    // Move the stone through the grid column from top (s=0) till the last empty space (s=targetRow+1)
    makeMove (targetRow, col, s) {
        var self = this;

        // Clear cell above current row (= s+1) (we're moving down, so leaving that row, thus need to remove our footprint)
        s > 0 && (this.cellAt(s, col)[this.classname] = '');
        // Occupy cell at row s+1
        this.cellAt(s + 1, col)[this.classname] = this.players[this.current];

        // If we reached our targetrow, now check if we got a 4-in-a-row (= game finished, we are winner) 
        s === targetRow - 1 ? this.checkFourInRow(targetRow, col)
                // Set game as finished, show that we are winner and as if newgame is desired, when answer=yes then restart game
                ? this.finished = 1 && this.win[this.showMessage](this.doc.getElementById(this.wonLabel).innerHTML.replace("%s", this.players[this.current].toLowerCase())) && this.start() // Sadly the 'confirm' will show before css-rendering was done (just like described here: https://stackoverflow.com/questions/19188191/is-it-possible-to-make-sure-addclass-is-rendered-before-showing-confirm-box)
                // Update the 'Who's turn'-indicator
                : this.colorLabel.innerHTML = this.colorLabel[this.classname] = this.players[this.current = (this.current + 1) % 2] 
                // We haven't reached the targetRow yet, so drop to next (lower) row (after waiting 20ms)
                : setTimeout(function () {
                    self.makeMove(targetRow, col, s + 1)
                }, 20);

    }

    checkFourInRow(row, col) {
        var self = this;
        return function (targetRow, col) {
            // Find horizontal 4-in-a-row
            return function (targetRow, col) {
                for (var a = col - 1; 0 < a && self.isCurrentColor(targetRow, a); a--) { // Most left col
                }
                for (var b = col + 1; 8 > b && self.isCurrentColor(targetRow, b); b++) { // Most right col
                }
                return 4 < b - a;
            }(targetRow, col)
            // Find vertical 4-in-a-row from the targetRow down (nothing can be above it :-))
            || function (targetRow, col) {
                for (var c = targetRow + 1; 7 > c && self.isCurrentColor(c, col); c++) {
                }
                return 3 < c - targetRow;
            }(targetRow, col)
            // Find diagonal 4-in-a-row from bottom left to top right
            || function (targetRow, col) {
                for (var a = targetRow - 1, b = col - 1; 0 < a && !(1 > b) && self.isCurrentColor(a, b); a--)
                    b--;
                for (var c = targetRow + 1, b = col + 1; 7 > c && !(7 < b) && self.isCurrentColor(c, b); c++)
                    b++;
                return 4 < c - a
            }(targetRow, col)
            // Find diagonal 4-in-a-row from top left to bottom right
            || function (targetRow, col) {
                for (var a = targetRow - 1, b = col + 1; 0 < a && !(7 < b) && self.isCurrentColor(a, b); a--)
                    b++;
                for (var c = targetRow + 1, b = col - 1; 7 > c && !(1 > b) && self.isCurrentColor(c, b); c++)
                    b--;
                return 4 < c - a;
            }(targetRow, col);
        }(row, col);        
    }
}
