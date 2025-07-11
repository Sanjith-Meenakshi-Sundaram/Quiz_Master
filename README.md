# Quiz_Master
## Date:11/7/2025
## Objective:
To demonstrate the concepts of callback functions and higher-order functions in JavaScript by building a simple quiz scoring system where the evaluation logic is passed as a callback to a higher-order function.

## Tasks:

#### 1. Create the HTML Layout:
Add a heading ```<h1>QuizMaster</h1>```

Add a few mock questions (or inputs for answers — optional)

Add a “Check Score” button

Display the final score in a ```<div> or <p>```

#### 2. Add CSS Styling:
Style the layout with a clean font and spacing

Add background color and rounded buttons

Keep the output score in a prominent style

#### 3. JavaScript Functionality:
Create a higher-order function called calculateScore(callback)

The callback will contain the logic for checking answers (or mocked results)

Pass different callback functions to demonstrate modular scoring (e.g., strict or lenient scoring)
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Master</title>
    <link rel="stylesheet" href="color.css">
</head>
<body>
    <div class="container">
        <h1>QuizMaster</h1>
        <p>Q1: what is 77+9?</p>
        <input type="text" id="q1" placeholder="Enter your answer here" />
        <p>Q2: what is the national bird for India?</p>
        <input type="text" id="q2" placeholder="Enter your answer here" />
        <button id="check">Check</button>
        <p id="score"></p>
    </div>
    <script src="src.js"></script>
</body>
</html>
```
## CSS Code:
```
body{
  background-color: darkcyan;
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
  padding-top: 50px;
}
.container{
  background: lightblue;
  padding: 30px;
  max-width: 400px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
}
input{
  width: 80%;
  padding: 10px;
  margin: 10px 0;
}
button{
  background-color: #4CAF50;
  border: none;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
#score{
  font-size: 24px;
  margin-top: 20px;
  font-weight: bold;
  color: #4CAF50;
}

```
## JavaScript Code:
```
function calculate(callback){
    const q1=document.getElementById("q1").value.trim().toLowerCase();
    const q2=document.getElementById("q2").value.trim().toLowerCase();
    const ans=[q1,q2];
    const correct=["86","peacock"];
    return callback(ans,correct);
}
function correction(ans,correct){
    let score=0;
    ans.forEach((userans,index)=> {
        if(userans==correct[index]){
            score++;
        }
    });
    return score;
}
document.getElementById("check").addEventListener("click", () => {
    const score=calculate(correction);
    document.getElementById("score").innerText=`Your score is ${score} out of 2`;
});

```
## Output:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1c08cda0-d275-448c-90c7-1814ca9a4491" />


## Result:
A mini module using JavaScript callbacks and higher-order functions is successfully created. This reinforces real-world use of passing functions as arguments to other functions and modularizes logic for reusability.
