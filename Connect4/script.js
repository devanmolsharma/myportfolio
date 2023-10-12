// Turn variable stores the current player.
var turn = 1;

// Its an 7x7 array form of current board, all values are set to 0 that means that no move has been played yet.
var base = [[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],];

function BotPlay() {
    // List of available options
    options = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'];
    copiedBase = structuredClone(base);
    console.clear();
    max_score = 0;
    max_index = 0;

    options.map((value, index) => {
        console.log(base);
        score = -calcMoveScore(value, copiedBase, 1);
        console.log(score, index);
        if (max_score < score) {
            max_score = score;
            max_index = index;
        }
    })

    console.log(max_score);



    // Choose a random option
    current = options[max_index];
    if (max_score == 1) {
        current = options[Math.floor(Math.random() * 6.3)];
    }

    // Drop it
    drop(current, true);

}

function calcMoveScore(move, copiedBase, player) {
    const CLASS_DICT = { 'first': 0, 'second': 1, 'third': 2, 'fourth': 3, 'fifth': 4, 'sixth': 5, 'seventh': 6, };
    id = CLASS_DICT[move];
    newBase = structuredClone(copiedBase);
    score = 0;
    for (e = 6; e >= 0; e--) {

        if (newBase[id][e] != 0) {
            continue;
        }
        else {
            newBase[id][e] = player;
        }
        try {
            score += check(e, id, newBase, true)
        } catch (error) {

        }

        break;

    }
    return score;
}


function drop(className, bot = false) {
    // A function to drop a piece in the board

    // These variables store the position of current drop (value assigned later)
    var x, y;

    // This is used to get index from the class name
    const CLASS_DICT = { 'first': 0, 'second': 1, 'third': 2, 'fourth': 3, 'fifth': 4, 'sixth': 5, 'seventh': 6, };

    // Change color based on turn
    var color = turn ? 'red' : 'blue';

    // This is to indicate whether the click has actually dropped a coin, sometimes the row is full
    var added = false;

    // Getting the elements of the current row
    var elements = window.document.getElementsByClassName(className);

    // Loop starts from down to up
    for (e = 6; e >= 0; e--) {

        // if there is already a backround color, it means the socket is not empty, so continue.
        if (elements[e].style.backgroundColor != '') {
            continue;
        }

        // else set added as true
        added = true;

        // Change color of filled socket as well as the color of :hover effect
        elements[e].style.backgroundColor = color;
        elements[e].style.boxShadow = "None";
        turn ? window.document.documentElement.style.setProperty('--color', 'blue') : window.document.documentElement.style.setProperty('--color', 'red');

        // Put the value of the players move in the array that was declared above
        base[e][CLASS_DICT[className]] = turn ? 1 : -1;

        // set the x and y values
        y = e;
        x = CLASS_DICT[className];

        // Do not continue as one throw has been done.
        break;
    }


    // Check for any patters and if true alert with game over
    if (check(x, y)) {
        setTimeout(function () { alert(color + ' Wins!');}, 1);
    }


    // Change the turn if the throw was sucessful
    if (added) {
        turn = 1 - turn;
    }

    // if (!bot) {
    //     setTimeout(() => { BotPlay(); }, 200);
    // }

}

function bound(x) {
    // This is helper function that prevents the values form getting out of range (0,6)
    return (x > 0) ? ((x <= 6) ? x : 6) : 0;
}

function checkx(board, x, y, return_points = false) {
    // x1 is 3 units below x
    var x1 = bound(x - 3);

    // x2 is 3 units above x
    var x2 = bound(x + 3);

    // A variable used to keep track of the values during a loop
    var prev = null;

    // It counts how many times a same value has accoured.
    var count = 0;

    // start from 3 in bottom to 3 on up
    for (var i = x1; i <= x2; i++) {

        // if cell is not empty
        if (board[y][i] == board[y][x]) {
            // if count is > 3 then the player has won
            if (count > 3) {
                break
            }

            // It sets value of current cell to prev
            if (prev == null) {
                prev = board[y][i];
                count = 1;
            }

            // count increases by one if the current value is same as previous.
            else if (prev == board[y][i]) {
                count++;
            }

            // if its deifferen then the prev changes to the current value.
            else {
                prev = board[y][i];
                count = 1;
            }

        }
    }
    if (return_points) {
        return count;
    }
    // return if the player won.
    return count >= 4;
}

function checky(board, x, y, return_points = false) {
    // Same logic as checkx but it checks from left to right.

    var y1 = bound(y - 3);
    var y2 = bound(y + 3);
    var prev = null;
    var count = 0;

    for (var i = y1; i <= y2; i++) {

        if (board[i][x] == board[y][x]) {
            if (count > 3) {
                break
            }
            if (prev == null) {
                prev = board[i][x];
                count = 1;
            }
            else if (prev == board[i][x]) {
                count++;
            }
            else {
                prev = board[i][x];
                count = 1;
            }

        }
    }
    if (return_points) {
        return count;
    }
    return count >= 4;
}

function checkDiagonalL2R(board, x, y, return_points = false) {
    // d1 is the 3rd diagonal element at bottom left
    var d1 = Math.min(bound(y - 3), bound(x - 3));

    // d1 is the 3rd diagonal element at top right. 
    var d2 = Math.min(bound(y + 3), bound(x + 3));

    // variables to store loop values
    var prev = null;
    var count = 0;

    for (var i = d1; i <= d2; i++) {
        if (board[i][i] == board[y][x]) {
            // breaks if count>4
            if (count > 3) {
                break
            }

            // Checks items diagonally.
            if (prev == null) {
                prev = board[i][i];
                count = 1;
            }
            else if (prev == board[i][i]) {
                count++;
            }
            else {
                prev = board[i][i];
                count = 1;
            }

        }
    }
    if (return_points) {
        return count;
    }
    return count >= 4;
}

function checkDiagonalR2L(board, x, y, return_points = false) {
    // Same as checkDiaognalL2R but it checks right to left diagonally.
    var d1 = Math.min(bound(y - 3), bound(x - 3));
    var d2 = Math.min(bound(y + 3), bound(x + 3));
    var prev = null;
    var count = 0;
    for (var i = d1; i <= d2; i++) {

        if (board[i][6 - i] == board[y][x]) {
            if (count > 3) {
                break
            }
            if (prev == null) {
                prev = board[i][6 - i];
                count = 1;
            }
            else if (prev == board[i][6 - i]) {
                count++;
            }
            else {
                prev = board[i][6 - i];
                count = 1;
            }

        }
    }
    if (return_points) {
        return count;
    }
    return count >= 4;
}

function check(x, y, board = null, return_points = false) {
    if (board == null) {
        board = base;
    }
    // If it matches in any of the way, return true else return false
    if (return_points) {
        return Math.max.apply(null, [checkx(board, x, y, return_points), checky(board, x, y, return_points), checkDiagonalL2R(board, x, y, return_points), checkDiagonalR2L(board, x, y, return_points)]);
    }

    return checkx(board, x, y, return_points) || checky(board, x, y, return_points) || checkDiagonalL2R(board, x, y, return_points) || checkDiagonalR2L(board, x, y, return_points);
}

function reset() {
    // Get all the sockets in the window
    var elements = window.document.getElementsByClassName('socket');

    // Turn all Sockets bacck to normal
    for (var i = 0; i < 7 * 7; i++) {
        elements[i].style.backgroundColor = null;
    }

    // Reset the array value of the game.
    base = [[0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],];
}