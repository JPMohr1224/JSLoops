console.log("test")

// Exercise 1 Section

for (let i = 1; i < 100; i++) {
    if (i % 2 == 1) {
        console.log(i)
     } //else continue;
}

// Exercise 2 Section
for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        
        console.log( i + " " + "Fizzbuzz")
    } else if (i % 5 == 0 ) {
        console.log( i + " " + "Buzz")
    } else if (i % 3 == 0) {
        console.log( i + " " + "Fizz")
    
    } //else continue
}

//exercise 3 part 1
let i = 1
do {
    
    if (i % 2 == 1){
        console.log(i)
       
    }  i++

  
} while (i < 100)


//Exercise 3 part 2
 let x = 1 
    do { 
        if (x % 5 == 0 && x % 3 == 0) {
        
            console.log( x + " " + "Fizzbuzz")
        } else if (x % 5 == 0 ) {
            console.log( x + " " + "Buzz")
        } else if (x % 3 == 0) {
            console.log( x + " " + "Fizz")
        
        } x++

    } while (x<=100)