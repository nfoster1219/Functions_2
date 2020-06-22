const mainElement = document.querySelector('main')

const kata1 = document.createElement('h1')
mainElement.append(kata1)
kata1.append('Kata 1')

let counter1 = 0
  while (counter1 < 20) {
    counter1 += 1 
    mainElement.append(counter1 + ", ") 
  }


  const kata2 = document.createElement('h1')
mainElement.append(kata2)
kata2.append('Kata 2')
  
  let counter2 = 0
  while (counter2 < 20) {
    console.log(counter2)
    counter2 += 2
    mainElement.append(counter2 + ", ") 
  }


  const kata3 = document.createElement('h1')
mainElement.append(kata3)
kata3.append('Kata 3')

// Tyler helped with the counter stoping at 19
  let counter3b = 1
  while (counter3b < 19) {
    console.log(counter3b)
    counter3b += 2
    mainElement.append(counter3b + ", ") 
  }

  const kata4 = document.createElement('h1')
  mainElement.append(kata4)
  kata4.append('Kata 4')

let counter4 = 5
while (counter4 < 100) {
  console.log(counter4)
  counter4 += 5
  mainElement.append(counter4 + ", ") 
}


const kata5 = document.createElement('h1')
mainElement.append(kata5)
kata5.append('Kata 5')

  
  let counter5b = 1
  while (counter5b < 100) {
    const isSquare = Number.isInteger(Math.sqrt(counter5b));
    if (isSquare) {
    console.log(counter5b)
    mainElement.append(counter5b + ", ")
    }
    counter5b += 1

  }


  const kata6 = document.createElement('h1')
mainElement.append(kata6)
kata6.append('Kata 6')
//tyler helped me get my counter to stop at 1 it was going to 0
  let counter6 = 21
  while (counter6 >=2) {
    console.log(counter6)
    counter6 -= 1
    mainElement.append(counter6 + ", ")
  }


  const kata7 = document.createElement('h1')
  mainElement.append(kata7)
  kata7.append('Kata 7')

  let counter7 = 20
  while (counter7 >= 1) {
    if (counter7 % 2 === 0) {
    console.log(counter7)
    mainElement.append(counter7 + ", ")
    }
    counter7 -= 1
  }

  const kata8 = document.createElement('h1')
mainElement.append(kata8)
kata8.append('Kata 8')
  let counter8 = 20
  while (counter8 >= 1) {
    if (counter8 % 2 !== 0) {
    console.log(counter8)
    mainElement.append(counter8 + ", ")
    }
    counter8 -= 1
  }

  const kata9 = document.createElement('h1')
mainElement.append(kata9)
kata9.append('Kata 9')
//Roy helped with my code displaying by showing me his code
  let counter9 = 105
  while (counter9 >= 10) {
    console.log(counter9)
    counter9 -= 5
    mainElement.append(counter9 + ", ")
  }

  const kata10 = document.createElement('h1')
mainElement.append(kata10)
kata10.append('Kata 10')

  let counter10 = 100
  while (counter10 >= 1) {
    const isSquare = Number.isInteger(Math.sqrt(counter10));
    if (isSquare) {
    console.log(counter10)
    mainElement.append(counter10 + ", ")
    }
    counter10 -= 1
  }
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

  const kata11 = document.createElement('h1')
mainElement.append(kata11)
kata11.append('Kata 11')

for (i = 0; i <= 0; i ++) {
    mainElement.append(sampleArray + ", ")
}



const kata12 = document.createElement('h1')
mainElement.append(kata12)
kata12.append('Kata 12')

    
    for (let i = 0; i < sampleArray.length; i++){
      if (sampleArray[i] % 2 === 0){
        mainElement.append(sampleArray[i] + ", ")
      }

    }



const kata13 = document.createElement('h1')
mainElement.append(kata13)
kata13.append('Kata 13')


for (let i = 0; i < sampleArray.length; i++){
    if (sampleArray[i] % 2 != 0){
      mainElement.append(sampleArray[i] + ", ")
        }
    }



const kata14 = document.createElement('h1')
mainElement.append(kata14)
kata14.append('Kata 14')

for (let i = 0; i < sampleArray.length; i++) {

mainElement.append((sampleArray[i] *sampleArray[i]) + ", ")
}



const kata15 = document.createElement('h1')
mainElement.append(kata15)
kata15.append('Kata 15')

let sum = 0
for (let counter15 = 0; counter15 <= 20; counter15 += 1) {
    sum += counter15
}
mainElement.append(sum + ', ')



const kata16 = document.createElement('h1')
mainElement.append(kata16)
kata16.append('Kata 16')

let sum2 = 0 
for (let counter16 = 0; counter16 < sampleArray.length; counter16 +=1) {
    sum2 += sampleArray[counter16]
}

mainElement.append(sum2)

const kata17 = document.createElement('h1')
mainElement.append(kata17)
kata17.append('Kata 17')

/*where I found the code for the smallest number-https://stackoverflow.com/questions/8934877/obtain-smallest-value-from-array-in-javascript*/

min = Number.POSITIVE_INFINITY
for (i = 0, l = sampleArray.length; i < l; i++) {
    min = Math.min(min, sampleArray[i])
}
mainElement.append(min)

const kata18 = document.createElement('h1')
mainElement.append(kata18)
kata18.append('Kata 18')

let largestNumber = 0
for (let index = 0; index < sampleArray.length; index += 1) {
    let currentNumber = sampleArray[index]
    if (currentNumber > largestNumber) {
        largestNumber = (currentNumber)
    }
}
mainElement.append(largestNumber)


/* i worked with Tyler and Roy to complete this assignment */