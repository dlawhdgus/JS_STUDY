var name = 'zero';
function log() {
    console.log(name);
}

function wrapper() {
    var name = 'nero'
    log()
    console.log(name);
}
wrapper();
