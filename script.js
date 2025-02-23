
//your JS code here. If required.
let fname=document.getElementById("name")
let age=document.getElementById("age")
let btn=document.getElementById("btn")


btn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(fname.value=="" || age.value==""){
        // console.log("hifghjm")
		alert("Please enter valid details")
        return;
	}
    // console.log("copleted")
    let promise=new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(age.value>18){
                resolve(`Welcome, ${fname.value}. You can vote.`)
            }else{
                reject(`Oh sorry ${fname.value}. You aren't old enough.`)
            }
        },4000)
    })
    promise.then(msg=>alert(msg)).catch(err=>alert(err))
})
