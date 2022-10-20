function search(text, pattern) {
  const matchIndexes = []
  for (let i = 0; i <= text.length; i++) {//loop length of text
    let match = true; //bool that turns false if we dont match the pattern
    for (j = 0; j < pattern.length; j++) {//loop length of pattern
      // if characters does match break, i represents the start, j matches the index of our pattern 
      if (text[i + j] != pattern[j]) { 
        match = false; //pattern doesnt match
      }
    }
    if (match) {
      matchIndexes.push(i)// add match index to our array 
    }
  }
  if(matchIndexes.length >0){ // if we have matches
    return matchIndexes
  }
  return -1
}
 

const text = 'SPOOKYHALLOWEENGHOULPUMPKINTRICKSTREATSVAMPIREGHOULPUMPKIN'
const pattern = 'GHOUL'
console.log(search(text, pattern));