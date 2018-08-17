(function () {
    "use strict";
    console.log('Original Planets');
    var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
    console.log(planets);
    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */
    console.log('Adding "The Sun" using ".unshift" to the front of the array');
    planets.unshift('The Sun'); //'Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);

    console.log('Adding "Pluto" to the end of array using ".push"');
    planets.push('Pluto'); //'Adding "Pluto" to the end of the planets array.');
    console.log(planets);

    console.log('Completing the last item: ' + planets[planets.length -1]);
    console.log(planets)

    var removedItem = planets.pop(); // putting planets.pop(); in variable removedItem

    console.log('Task completed: ' + removedItem); // let's remove the last item - 'Pluto'
    console.log(planets)

// log what we did
    console.log('Completing the First item: ' + planets[planets.length -9]); //'Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);

    var removedItem = planets.shift(); //.shift removes the first element

    console.log('Task completed(Removing the first element): ' + removedItem); // removing the first element
    console.log(planets)

    console.log('Finding and logging the index of "Earth" in the planets array.');
    var index = planets.indexOf('Earth');
    console.log(index);

    console.log("Reversing the order of the planets array");
    planets.reverse();
    console.log(planets);

    //Now we want to sort 'Planets'
    console.log("Now sort the array using '.sort' ");
    planets.sort();
    console.log(planets);
    console.log("Planets are now 'abc' sorted!");
})();
