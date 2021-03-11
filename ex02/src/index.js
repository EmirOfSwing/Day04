function main(){
    var myRes = 75;

myRes++;

    return myRes;
}

console.log(main(main()));
module.exports = main;