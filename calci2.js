function display(val){
document.getElementById('result').value+=val
return val
}
function solve(){
    let x=document.getElementById('result').value
    let y=eval(x);
    document.getElementById('result').value=y
    return y
}
function clearscreen(){
    document.getElementById('result').value=''
}
function deleted(result){
    let x=document.getElementById('result').value
   document.getElementById('result').value=x.replace(x.slice(-1),'')
}