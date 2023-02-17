
//input sentence on the function call
let phraseToConvert = document.getElementById('phraseToConvert');


function printHalfBold(){
    convertToHalfBold(phraseToConvert.value);
}

let targetDiv = document.getElementById('right');
console.log(targetDiv);



function convertToHalfBold(inputPhrase) {

    console.log(inputPhrase);

    //seperate into array of indiv words
    const splitWords = inputPhrase.split(' ');


    splitWords.forEach(word => {
        // export first half of each word by looping through the array and looping through each word

        if (word.length > 1) {

            // add first half of letters to letterHolder in caps
            

                for (let i = 0; i < Math.floor(word.length/2); i++) { // round down or odd numers cause errors

                    let letterCollector = ''; //empty string to hold word before is is pushed into the new array (local scope)
                    
                    //console.log(word[i].toUpperCase()); //testing first with capitals before I figure out the bolding in DOM
                    letterCollector += word[i];


                    let strongSpan = document.createElement("STRONG");
                    let letterHolder = document.createTextNode(letterCollector);
                
                    strongSpan.appendChild(letterHolder);
                    targetDiv.appendChild(strongSpan); //return words in order 
                    
                }
                


            // add remaining letters of word in lowercase
            for (let i = Math.floor(word.length/2); i < word.length; i++) {

                let letterCollector = ''; //empty string to hold word before is is pushed into the new array (local scope)

                letterCollector += word[i];

                let weakSpan = document.createElement("span");
                let letterHolder = document.createTextNode(letterCollector);

                weakSpan.appendChild(letterHolder);
                targetDiv.appendChild(weakSpan);
            }

            //newWords.push(letterCollector); //

        } else {
                let oneLetterSpan = document.createElement("span");
                let letterHolder = document.createTextNode(word);

                oneLetterSpan.appendChild(letterHolder);
                targetDiv.appendChild(oneLetterSpan);
                //append the words that have 2 or less letters without editing ^
        } 

        // also need to add a space in between each word in the DOM
        let spaceSpan = document.createElement("span");
        let spaceHolder = document.createTextNode(' ');

        spaceSpan.appendChild(spaceHolder);
        targetDiv.appendChild(spaceSpan);

    });
}





/* There is def a better overall way to have done this. It doesn't work if a word has an odd number of characters >1. 
Also I assume there is a cleaner way of pushing these things to the dom all at once after being put into some kind of
pre-formatted array/object. 

*/



