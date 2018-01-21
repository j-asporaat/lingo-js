var random = Math.floor( Math.random() * 479);
var answer = words[random];
var answerArray = answer.split('');

console.log(answer);

var checkBtn = document.getElementById('check');

checkBtn.setAttribute("onclick", "check();");

function check(){

  for(var i = 0; i <=4; i++){

  var input = document.getElementById("letter_" + i );
  console.log(input.value);

  if(input.value == answerArray[i]) {
    input.style.backgroundColor = "red";
      }
    }
  }
