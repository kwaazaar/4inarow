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
                for (row = 1; row < 7; row++)
                    for (col = 1; col < 8; col++)
                        cellAt(row, col)[classname] = '';
            },
            
            // Move the stone through the grid column from top (startrow) till the last empty space (endrow)
            // i=startrow
            // j=col
            // s=endrow (the one we really want)
            makeMove = function (i, j, s) {
                s > 0 && (cellAt(s, j)[classname] = '');
                cellAt(s + 1, j)[classname] = players[current];
                s === i - 1 ? function (i, j) {
                    return function (i, j) {
                        for (a = j - 1; 0 < a && isCurrentColor(i, a); a--) {
                        }
                        for (b = j + 1; 8 > b && isCurrentColor(i, b); b++) {
                        }
                        return 4 < b - a;
                    }(i, j) || function (i, j) {
                        for (c = i + 1; 7 > c && isCurrentColor(c, j); c++) {
                        }
                        return 3 < c - i;
                    }(i, j) || function (i, j) {
                        for (a = i - 1, b = j - 1; 0 < a && !(1 > b) && isCurrentColor(a, b); a--)
                            b--;
                        for (c = i + 1, b = j + 1; 7 > c && !(7 < b) && isCurrentColor(c, b); c++)
                            b++;
                        return 4 < c - a
                    }(i, j) || function (i, j) {
                        for (a = i - 1, b = j + 1; 0 < a && !(7 < b) && isCurrentColor(a, b); a--)
                            b++;
                        for (c = i + 1, b = j - 1; 7 > c && !(1 > b) && isCurrentColor(c, b); c++)
                            b--;
                        return 4 < c - a;
                    }(i, j);
                }(i, j)
                        // Show winner and when newgame is desired, restart game
                        ? finished = 1 && win[showMessage](doc[gid](wonLabel)[content].replace("%s", players[current].toLowerCase())) && start()
                        // Update the 'Who's turn'-indicator
                        : colorLabel[content] = colorLabel[classname] = players[current = (current + 1) % 2] 
                        // Drop to next (lower) row
                        : setTimeout(function () {
                            makeMove(i, j, s + 1)
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
