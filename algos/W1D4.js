// FUNCTIONS - What are they?
// functions are like a blueprint and they are a two part process

// DEFINING A FUNCTION
// keyword | name of the function | (optional parameters) | { code block }
function greetings(aName){
    if(aName== undefined){
        console.log("Hellow Ninja!!");
    } else {
        console.log(`Hello ${aName}, Great to see a fellow Ninja!!`);
    }
    // 1000 more lines of code 
}

// CALLING THE FUNCTION
// to call a functuon reference it by name with parens.
greetings();
greetings("Joseph");