
function breakingRecords(scores) {
    // Write your code here
    let min = scores[0];
    let max = scores[0];
    let mini = 0
    let maxi = 0;
    for (let i = 0; i<scores.length; i++){
        if(scores[i]>max){
            max = scores[i]
            maxi++;   
        }else if(min>scores[i]){
            min = scores[i]
            mini++
            }           
        }
        return[max,min]
    }
console.log(breakingRecords([12,10,2,24,30,3]))
function mouseAndCat(x,y,z){
  const distAfrmM = Math.abs(x-z);
  const distBfrmM = Math.abs(y-z);
  if (distBfrmM > distAfrmM) return "Cat A";
  else if (distBfrmM < distAfrmM) return "Cat B";
  return "Mouse C"
}
console.log(mouseAndCat(1,4,2))
console.log("___________")
function hurdleRace(k,height){
  let maxCount = 0;
  for(let i = 0;i < height.length; i++){
    if(height[i]>k){
      let diff = height[i]-k;
      if(diff > maxCount){
        maxCount = diff;
      }
    }
  }
  if(maxCount=== 0){
    return 0;
  }
  return maxCount;
}
console.log(hurdleRace(7,[2,5,4,5,2]))
function getGrade(score){
  let grade;
  if(score > 25 && score <= 30){
    grade = "A"
  }
  if(score > 20 &&score <= 25){
    grade = "B"
  }
  if(score > 15 && score <= 20){
    grade = "C"
  }
  if(score > 10 && score <= 15){
    grade = "D"
  }
  if(score > 5 && score <= 10){
    grade = "E"
  } 
  if(score >=0 && score <= 5){
    grade = "F"
  }
    return grade;
}
console.log(getGrade(23))

function simpleArraySum(ar){
  let sum = 0;
  for(let i = 0; i<ar.length; i++){
    sum = sum+ar[i];
  }
  return sum;
}
let sum = simpleArraySum(7)
console.log(sum)
function secondGreatest(num){
  let greatest =  num[0];
  for (let i= 0; i < num.length; i++){
    if(num[i]>greatest){
      num[i] = greatest
    }
  }
  let secondGreatest = num[0];
  for(let i =0; i< num.length; i++){
  if(num[i]>secondGreatest && num[i]<greatest){
    secondGreatest= num[i];
  }  
  }
  return secondGreatest
}
console.log(secondGreatest([1,12,13,3,4,5]))

function vowelsAndConstants(s){
  const vowels = ['a','e','i','o','u'];
  const stringArray = s.split('');
  for(let i =0; i<s.length;i++){
   for(let j=0; j<vowels.length;j++){
     if(s[i]== vowels[j]){
       console.log(s[i]);
     }
   }
}
  const consonants = ('zqswdxrfctgvyhbjnklpm').split('');
  for(let i =0; i<s.length;i++){
   for(let j=0; j<consonants.length;j++){
     if(s[i]== consonants[j]){
       console.log(s[i]);
     }
   }
}
}