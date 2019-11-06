window.addEventListener("load",start,false);
var btns=new Array(31);
var str="";
var p;
var today,h,m,s,title,show,flag=0;
var histStr="";
function showHistory() {
  var history=document.getElementById('history');
  var rgb=btns[31].value;
  if(flag==0)
  {
    history.setAttribute("style","display:block;background-color:"+rgb);
    flag=1;
  }
  else {
    history.setAttribute("style","display:none;background-color:"+rgb);
    flag=0;
  }
}
function start()
 {
  for(var i=1;i<=33;i++)
    btns[i]=document.getElementById(i);
  title=document.getElementsByClassName('title');
  show=document.getElementById('h');
  show.addEventListener("click",showHistory)
  ////////////////////////////////////////////////////////////////////////////
  btns[31].addEventListener('input',function() {
    var rgb=btns[31].value;
    title[0].setAttribute("style","text-shadow:4px 4px "+rgb)
    for(var i=1;i<=30;i++)
        btns[i].style.background=rgb;
  },false)
  /////////////////////////////////////////////////////////////////////////////
  btns[32].addEventListener('input',function() {
    var rgb=btns[32].value;
    var bg=document.getElementsByClassName('cal');
    bg[0].style.background=rgb;
  },false)
  /////////////////////////////////////////////////////////////////////////////
  btns[33].addEventListener('input',function() {
    var rgb=btns[33].value;
    var bg=document.getElementById('out');
    bg.style.background=rgb;
  },false)
  //////////////////////////////////////////////////////////////////////////////
  p=document.getElementById('out');
  check();
}
////////////////////////////////////////////////////////////////////////////////
function check() {
  btns[6].addEventListener('click',function()
  {
    var newStr="";
    for(var i=0;i<str.length-1;i++)
      newStr+=str[i];
    str=newStr;
    p.innerHTML=str;
  },false);
  btns[8].addEventListener('click',function()
  {
    str="";
    p.innerHTML=str;
  },false);
  btns[9].addEventListener('click',function()
  {
    str+=btns[9].value;
    p.innerHTML=str;
  },false);
  btns[10].addEventListener('click',function()
  {
    str="Math.sqrt("+str+")";
    p.innerHTML=str;
  },false);

  btns[11].addEventListener('click',function()
  {
    str+=btns[11].value;
    p.innerHTML=str;
  },false);
  btns[12].addEventListener('click',function()
  {
    str+=btns[12].value;
    p.innerHTML=str;
  },false);
  btns[13].addEventListener('click',function()
  {
    str+=btns[13].value;
    p.innerHTML=str;
  },false);
  btns[14].addEventListener('click',function()
  {
    str+=btns[14].value;
    p.innerHTML=str;
  },false);
  btns[15].addEventListener('click',function()
  {
    str+=btns[15].value;
    p.innerHTML=str;
  },false);
  btns[16].addEventListener('click',function()
  {
    str+=btns[16].value;
    p.innerHTML=str;
  },false);
  btns[17].addEventListener('click',function()
  {
    str+=btns[17].value;
    p.innerHTML=str;
  },false);
  btns[18].addEventListener('click',function()
  {
    str+=btns[18].value;
    p.innerHTML=str;
  },false);
  btns[19].addEventListener('click',function()
  {
    str+=btns[19].value;
    p.innerHTML=str;
  },false);
  btns[20].addEventListener('click',function()
  {
    str="1/"+str;
    p.innerHTML=str;
  },false);
  btns[21].addEventListener('click',function()
  {
    str+=btns[21].value;
    p.innerHTML=str;
  },false);
  btns[22].addEventListener('click',function()
  {
    str+=btns[22].value;
    p.innerHTML=str;
  },false);
  btns[23].addEventListener('click',function()
  {
    str+=btns[23].value;
    p.innerHTML=str;
  },false);
  btns[24].addEventListener('click',function()
  {
    str+=btns[24].value;
    p.innerHTML=str;
  },false);
  btns[25].addEventListener('click',function()
  {
    str+=btns[25].value;
    p.innerHTML=str;
  },false);
  btns[26].addEventListener('click',function()
  {
    str+=btns[26].value;
    p.innerHTML=str;
  },false);
  btns[27].addEventListener('click',function()
  {
    str+=btns[27].value;
    p.innerHTML=str;
  },false);
  btns[28].addEventListener('click',function()
  {
    str+=btns[28].value;
    p.innerHTML=str;
  },false);
  btns[29].addEventListener('click',function()
  {
    str+=btns[29].value;
    p.innerHTML=str;
  },false);
  btns[30].addEventListener('click',function()
  {
    var history=document.getElementById('history');
    today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    histStr+="<br>"+h+":"+m+":"+s+"    "+str+"=";
    str=eval("("+str+")");
    histStr+=str;
    history.innerHTML=histStr;
    p.innerHTML=str;
  },false);
}
