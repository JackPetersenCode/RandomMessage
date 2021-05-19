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


const MessageObj = {
    item1: ['whistles', 'pickles', 'sugar', 'muffins', 'potatoes'],
    item2: ['chicken', 'anteloupe', 'bird', 'worm', 'bear', 'hornet'],
    item3: ['Beaverton', 'San Luis Obispo', 'New York', 'Green Bay', 'Memphis', 'Atlanta'],
    makeMessage() {
        let rando1 = Math.floor(Math.random() * item1.length)
        let rando2 = Math.floor(Math.random() * item2.length)
        let rando3 = Math.floor(Math.random() * item3.length)
        let thing1 = this.item1[rando1]
        let thing2 = this.item2[rando2]
        let thing3 = this.item3[rando3]
        let randNum = Math.floor(Math.random() * 3)
        switch (randNum) {
            case 0:
                console.log(`The ${thing1} was very big, almost too big. It got in the way \n
                of the ${thing2}. This even occured in real time, in ${thing3}`)
            case 1:
                console.log(`You will do well with ${thing1}. The body cam footage showed \n
                ${thing2}. Your future in ${thing3} looks bright.`)
            case 2:
                console.log(`Bad news, your ${thing2} was in the way. The ${thing1} was bad for \n
                your fortune, try again in ${thing3}.`)
            default:
                console.log(`Why didn't this work.`)
        }
    }
}