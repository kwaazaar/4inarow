(function (doc, win, onclick, gid, classname, content, showMessage) {
    var
            row, col, c, colorLabel, cid, players, current, finished, newgameLabel, wonLabel, laststart = 1,
            
            // Returns the cell (TD) that represents this position in the grid
            cellAt = function (row, col) {
                return doc[gid](cid + row + col); // "color" + "<row>" + "<col>", eg: "color16" for top row, 6th column
            },
            
            // Returns true if the cell is occupied by current player (ref: current)
            isCurrentColor = function (row, col) {
                return cellAt(row, col)[classname] === players[current];
            },
            
            // Initializes a new game by resetting vars and clearing the grid
            start = function () {
                // Determine who gets to start the game
                current = laststart = (laststart + 1) % 2;
                finished = 0; // Nope, just startin'
                // Initialize the 'Who's turn' indicator
                colorLabel[content] = colorLabel[classname] = players[current = (current + 1) % 2];
                // Clear the grid
                for (var row = 1; row < 7; row++)
                    for (var col = 1; col < 8; col++)
                        cellAt(row, col)[classname] = '';
            },
            
            // Move the stone through the grid column from top (s=0) till the last empty space (s=targetRow+1)
            makeMove = function (targetRow, col, s) {
                // Clear cell above current row (= s+1) (we're moving down, so leaving that row, thus need to remove our footprint)
                s > 0 && (cellAt(s, col)[classname] = '');
                // Occupy cell at row s+1
                cellAt(s + 1, col)[classname] = players[current];

                // If we reached our targetrow, now check if we got a 4-in-a-row (= game finished, we are winner) 
                s === targetRow - 1 ? function (targetRow, col) {
                    // Find vertical 4-in-a-row
                    return function (targetRow, col) {
                        for (a = col - 1; 0 < a && isCurrentColor(targetRow, a); a--) { // Most left col
                        }
                        for (b = col + 1; 8 > b && isCurrentColor(targetRow, b); b++) { // Most right col
                        }
                        return 4 < b - a;
                    }(targetRow, col)
                    // Find horizontal 4-in-a-row from the targetRow down (nothing can be above it :-))
                    || function (targetRow, col) {
                        for (c = targetRow + 1; 7 > c && isCurrentColor(c, col); c++) {
                        }
                        return 3 < c - targetRow;
                    }(targetRow, col)
                    // Find diagonal 4-in-a-row from bottom left to top right
                    || function (targetRow, col) {
                        for (a = targetRow - 1, b = col - 1; 0 < a && !(1 > b) && isCurrentColor(a, b); a--)
                            b--;
                        for (c = targetRow + 1, b = col + 1; 7 > c && !(7 < b) && isCurrentColor(c, b); c++)
                            b++;
                        return 4 < c - a
                    }(targetRow, col)
                    // Find diagonal 4-in-a-row from top left to bottom right
                    || function (targetRow, col) {
                        for (a = targetRow - 1, b = col + 1; 0 < a && !(7 < b) && isCurrentColor(a, b); a--)
                            b++;
                        for (c = targetRow + 1, b = col - 1; 7 > c && !(1 > b) && isCurrentColor(c, b); c++)
                            b--;
                        return 4 < c - a;
                    }(targetRow, col);
                }(targetRow, col)
                        // Set game as finished, show that we are winner and as if newgame is desired, when answer=yes then restart game
                        ? finished = 1 && win[showMessage](doc[gid](wonLabel)[content].replace("%s", players[current].toLowerCase())) && start() // Sadly the 'confirm' will show before css-rendering was done (just like described here: https://stackoverflow.com/questions/19188191/is-it-possible-to-make-sure-addclass-is-rendered-before-showing-confirm-box)
                        // Update the 'Who's turn'-indicator
                        : colorLabel[content] = colorLabel[classname] = players[current = (current + 1) % 2] 
                        // We haven't reached the targetRow yet, so drop to next (lower) row (after waiting 20ms)
                        : setTimeout(function () {
                            makeMove(targetRow, col, s + 1)
                        }, 20);

            };

    // Constructor
    return function (n, w, c, h, p1, p2) {
        // Init basic vars (for ui)
        cid = c;
        newgameLabel = n;
        wonLabel = w;
        colorLabel = doc[gid](c);
        players = [doc[gid](p1)[content], doc[gid](p2)[content]];

        // Hook the onclick-event to each cell in the grid
        for (var row = 1; row < 7; row++)
        for (var col = 1; col < 8; col++)
            cellAt(row, col)[onclick] = function (col) {
                return function () {
                    if (!finished)
                        // Loop through the cells in this column from bottom to top to find the first unoccupied cell
                        for (var row = 6; row > 0; row--)
                            if (!cellAt(row, col)[classname]) { // Check if empty
                                makeMove(row, col, 0);
                                break; // Found one, so exit the for-loop
                            }
                };
            }(col); // Pass col as argument to onclick-event
        ;

        // Hook restart-button onclick-event
        doc[gid](h)[onclick] = function () {
            win[showMessage](doc[gid](newgameLabel)[content]) && start() // When confirmed, run start() to restart the game
        };

        // Now start the game
        start();
    };

// Run the constructor with the right parameters
})(document, window, "onclick", "getElementById", "className", "innerHTML", "confirm")("newgame", "won", "color", "restart", "p1", "p2");
