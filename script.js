let time=document.getElementById("time");
setInterval(()=>{
    time.innerHTML=new Date().toTimeString();
},1000)