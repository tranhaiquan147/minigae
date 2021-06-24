let p = document.querySelectorAll('.rotage');
let btnStart = document.querySelector('button');
function restart(){
    p[0].src='images/images/closed_door.svg';  
    p[1].src='images/images/closed_door.svg'; 
    p[2].src='images/images/closed_door.svg';   
}
btnStart.onclick=restart;
let point = {
    curent:0,
    listCurrent:[0],
}
window.onload=pastePoint();
let turn = 2;
p=Array.from(p);
p.forEach(item=>{
    item.addEventListener('click',()=>{
        let a = Math.floor(Math.random()*3);
        if(a==0)
            item.src='images/images/robot.svg';    
        if(a==1)
            item.src='images/images/beach.svg';  
        if(a==2)
            item.src='images/images/space.svg';  
        if(a!=0){
           turn--;
           console.log(`turn ${turn}`);
           if(turn==0){
               turn = 2;
               point.curent++;
               console.log(`diem hien tai${point.curent}`);
               setTimeout(()=>{
                  turn = 2;
                  alert('You so lucky');
               },500);
               pastePoint();
           }
        }else if(a==0){
           turn = 2;
           point.listCurrent.push(point.curent);
           console.log(`Chuoi diem ${point.ListCurent}`);
           point.curent = 0;
           setTimeout(()=>{alert('You lose')},500);   
           pastePoint();  
        }
    });
});
function pastePoint(){
    document.getElementById('current').innerText=point.curent;
    point.listCurrent.sort((a,b)=>{
      return a-b;
    });
    document.getElementById('streak').innerText=point.listCurrent[point.listCurrent.length-1];
}
function makeColor(){
    p[0].style.transform='rotateX(0) rotateY(60deg)';  
    p[1].style.transform='rotateX(0) rotateY(60deg)'; 
    p[2].style.transform='rotateX(0) rotateY(60deg)'; 
let stop = setInterval(()=>{
    p[0].style.transform='rotateX(0) rotateY(0deg)';  
    p[1].style.transform='rotateX(0) rotateY(0deg)'; 
    p[2].style.transform='rotateX(0) rotateY(0deg)'; 
},1000);
setInterval(()=>{
    clearInterval(stop);
},1500);
}
window.onload=makeColor();