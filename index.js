var readlineSync=require('readline-sync');


var questionsArr = [
   { que: "Who is You-know-who?", rightAns: 'voldemort' },
  { que: "In what house did sorting hat almost put harry in ?", rightAns: 'slytherin' },
 
  { que: "who is harry's friend?", rightAns: 'ron' },
  { que: "how did harry and ron get to hogwarts in their second year?", rightAns: 'flyingcar' },
  { que: "who is the principal of hogwarts?", rightAns:'dumbledore' },
];
var topScores = [
  { name: 'Krishna', score: 5 },
  { name: 'Tanmay', score: 4 },
];

function startGameAndGetScore(ourUser) {
  var score = 0;
  for (var i = 0; i < questionsArr.length; i++) {
    var userAns = readlineSync.question(questionsArr[i].que);
    if (userAns.toLowerCase() === questionsArr[i].rightAns) {
      score += 1;
      console.log(`✅ Correct`);
    } else {
      console.log(`❌ Wrong !!`);
    }

    console.log('Your current score is ' + score);
   enter();
    dash();
  }

  return { name: ourUser, score };
}

function enter() {
  console.log('\n');
}
function dash() {
  console.log('-------------------------------------------------');
}

function showHighScore() {
  topScores.sort((a, b) => b.score - a.score);
  dash();
  console.log(
    '                 ➡  LEADERBOARD ⬅                      '
  );
  topScores.forEach((singleData) =>
    console.log(singleData.name + ' : ' +singleData.score));
  dash();
}
function welcome(){
  
var userName=readlineSync.question('Whats your name?!');
console.log('Hi '+userName+'\nWelcome to You-know-who the ultimate harry potter quiz');
  console.log('Lets start!!');
  enter();
  var userNameWithScore=startGameAndGetScore(userName);
  enter();
  
  console.log(
      `${userNameWithScore.name}, your final score is ${userNameWithScore.score}/${questionsArr.length} ✔`
 
  );

  enter();
  topScores.push(userNameWithScore);
  showHighScore();
}
welcome();
