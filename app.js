function check(){
var score = 0
var right_awnser_1 = document.getElementById('a1');
var q1_awnser_2 = document.getElementById('a2');
var q1_awnser_3 = document.getElementById('a3');
var q1_awnser_4 = document.getElementById('a4');



if (right_awnser_1.checked == true){

score++
alert("Q1 Answer rgiht")



}

else{
   alert ("Q1 Answer wrong")


}


}
var right_awnser_2 = document.getElementById('q2-a1');
var q1_awsner_2 = document.getElementById('q2-a2');
var q2_awnser_2 = document.getElementById('q2-a3');
var q3_awnser_2 = document.getElementById('q2-a4');


if (right_awnser_2.checked == true){
score++

alert("Q2 Answer 2 right");

}


else{
    alert("q2 answer is wrong")
}


var right_awnser_3 = document.getElementById('q3-a1');
var q3_awnser_1 = document.getElementById('q3-a2');
var q4_awnser_4 = document.getElementById('q3-a3');
var q3_awnser_2 = document.getElementById('q3-a4');

if (right_awnser_3.checked == true) {
score++
alert("q3 answer is right")

}
else{
    alert("your answer is wrong")
}


alert("your score is " + score);








