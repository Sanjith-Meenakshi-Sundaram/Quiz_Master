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
