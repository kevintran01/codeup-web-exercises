/*function wordWithoutPunctuation(word) {
    var characters = word.split("");
    if (characters[characters.length - 1] == "," ||
        characters[characters.length - 1] == "." ||
        characters[characters.length - 1] == "!" ||
        characters[characters.length - 1] == "?" ||
        characters[characters.length - 1] == ";" ||
        characters[characters.length - 1] == "-") {
        characters.pop()
        console.log(characters);
    }
    return characters.join("");
}

function lengthOfLongestWord(sentence) {
    var longest = 0;
    var indexOfLongest = 0;

    var wordsArray = sentence.split(" ");
    console.log(wordsArray)
    for (var i = 0; i < wordsArray.length; i++) {
        var word = wordWithoutPunctuation(wordsArray[i]);
        if (wordWithoutPunctuation(wordsArray[i]).length > longest) {
            longest = wordsArray[i].length;
            indexOfLongest = i;
        }
    }

    return longest;
}

// var testSentence = "I like going to
var testSentence = "I like going out to parties with friends or watching TV.";
console.log(testSentence);
console.log(lengthOfLongestWord(testSentence)); */

//OBJECTS
var car1 = {
    make: "Toyota",
    model: "Corolla",
    year: "1976",
};

car1.honk = function () {
    alert("toot toot");
}

var car2 = {
    make: "Nissan",
    model: "Batmobile",
    year: 2045,
    isCool: true,
    themeSong: {
        lyrics: "Dadadadadada-Batman!!",
        time: 120,
    },
    revEngine: function () {
        console.log("Beepbeep");
    },
    rollTape: function () {
        console.log("My model is " + this.model);
    }

}
console.log(car2.model)

var cars = [];
cars.push(car1, car2);