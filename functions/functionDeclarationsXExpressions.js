// Function Declaration
function walk() {
    console.log('walk')
}

// Function Expression
const run = function() {
    console.log('run')
};
let move = run;
run();
move();