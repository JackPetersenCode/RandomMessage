//Program prints out a random message. We will have three different properties with a list of strings for each.
//The program will select three random items and place them into a random
//sentence like in a mad-lib. There will be a couple different sentence outlines.
//Factory function will contain three lists of options for random words, and
//every time the program is run it will generate a random number correlating to
//the word in the list of strings. 
//Next, it will generate another random number that will correlate to one of 5 random
//sentences that it will fetch.
//When the user runs the program, it won't ask for input, it will just generate the 
//random numbers and print out the random sentence with the random words inserted in.


const RandomFactory = function() {
    let item1 = ['whistles', 'pickles', 'sugar', 'muffins', 'potatoes']
    let item2 = ['chicken', 'anteloupe', 'bird', 'worm', 'bear', 'hornet']
    let item3 = ['Beaverton', 'San Luis Obispo', 'New York', 'Green Bay', 'Memphis', 'Atlanta']
    let rando1 = Math.floor(Math.random() * item1.length)
    let rando2 = Math.floor(Math.random() * item2.length)
    let rando3 = Math.floor(Math.random() * item3.length)
11
}