var i = 1;
while (i < 65536) {
    i = i * 2
    console.log(i);
}

for (var i = 100; i >= 5; i--) {

    if (i % 5 !== 0) {
        continue;
    }
    console.log(i);
}


var random = Math.floor((Math.random() * 50) + 1);
console.log("Random odd number to skip is: " + random);
for (var i = 1; i <= 49; i++) {

    if (i % 2 === 0) {
        continue;
    }
    if (random === i) {
        console.log("Yikes! Skipping number: " + i);
    } else {
        console.log("Here is an odd number: " + i)
    }

    if (i >= 49) {
        break;
    }
}

var a = 7;
var b;

for (var i = 1; i <= 10; i++) {
    b = a * i;
    console.log("" + a + " * " + i + " =", + b);
}
var i = Math.floor(Math.random() * 20) + 150;
for (var i = 20; i < 200; i++) {

    if (i % 2 !== 0) {
        // number isn't even
        // odd numbers aren't as cool
        // skip the rest of the loop and continue with the next iteration
        continue;
    }

    console.log("here is a odd number: " + i);
}

//where do you start?
//where do you end?
//what changes between each time the loop runs?
//what's the condition by which we run the loop