var  imageNo=16; // how many img you want
console.log("in Java");
//fuction to create elements and overlay
var myObj, clickedN,clickedid, clickedA,oldClicked,c="0", counter=25 ,rightClicks=0;
var s=0,m=0;
var Rclicks=document.getElementById("Rclicks");
var Rchoose=document.getElementById("Rchoose");
var time=document.getElementById("timer");
Rclicks.innerHTML=counter;
Rchoose.innerHTML=rightClicks;

CreatElement();
calll(myObj);
clk(counter);
function CreatElement(){
    console.log("in function");
    for(i=1; i<=imageNo; i++)
    {
        console.log("in for function");
        var divv = document.createElement('div');
        var imgg =document.createElement('img');
        var overlay= document.createElement('div');
        imgg.className="img";
        // imgg.id="id"+i;
        overlay.id="id"+i;
        overlay.className="overlay";
        divv.className="imgcont";
        divv.appendChild(imgg);
        divv.appendChild(overlay);
        document.getElementById('gamee').appendChild(divv);
        console.log(myObj);
    }
}
function calll(){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(myObj) {
    if (this.readyState == 4 && this.status == 200) {
       myObj = JSON.parse(this.responseText);
        addimg(myObj);
        console.log(myObj); 
    }
    return myObj;
}
xmlhttp.open("GET", "img.json", true);
xmlhttp.send();
}

function addimg(myObj){
    shuffle();
    console.log("arr");
    console.log(arr);
    for (x in myObj) 
    {
        document.getElementsByClassName("img")[arr[x]].alt=myObj[x].name;
        document.getElementsByClassName("overlay")[arr[x]].title=myObj[x].name;
        document.getElementsByClassName("img")[arr[x]].src=myObj[x].URL;
    }
}

function clk(){
    var getDiv=document.getElementsByClassName("overlay");
    for(i=0 ;i<getDiv.length ;i++)
    {getDiv[i].addEventListener("click", comp);}
}

function comp(myVar){
    console.log("compare")
    clickedid=this.id;
    clickedA=this.title;
    c++;
    document.getElementById(this.id).style.display="none";
    if(oldClicked==clickedA && c=="2"){
        console.log("good");
        c=0;
        rightClicks++;
        Rchoose.innerHTML=rightClicks;
        counter--;
        Rclicks.innerHTML=counter;
        if(rightClicks==8){
            myStopFunction();
        }
    }
    if(oldClicked!=clickedA && c=="2"){
        console.log("wrong");
        c=0;
        counter--;
        Rclicks.innerHTML=counter;
        var x=clickedN;
        if(counter==0){
            var overlay= document.getElementsByClassName("overlay")
            myStopFunction();
             for(i in overlay)
             {
                overlay[i].style.display="none";
             }
             alert("you failed");
            }
        else{
        setTimeout(function(){ document.getElementById(clickedid).style.display="block";
        document.getElementById(x).style.display="block";console.log("time out")},500);
        }
        
    }
    console.log(c);
    oldClicked=this.title;
    clickedN=this.id;
}
var myVar=setInterval(timer,1000);
function myStopFunction() {
    clearInterval(myVar);
} 
function timer(){
    s++;
    if(s<10){
        s="0"+s;
        
    }
    
    if(s==60){
        m++;
        s=0;
    }

    time.innerHTML= m+":"+s;
}
var arr=[ ];
function shuffle() {
   
    arr.length=imageNo;
    for(i=0; i<arr.length; i++) {
    arr[i]=i;
    }
    var i = arr.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

    }
    console.log(arr);
    return arr
}

/*
function comp(){
    console.log(this.id);
    document.getElementById(this.id).style.display="none";
    if(clickedN!=this.id){
        clickedA=this.title;
        if(oldClicked!=clickedA && c<2){
            oldClicked=clickedA;
            c++;
            console.log(c);
        }
        else if(oldClicked==clickedA){
            console.log("right  answer");
            document.getElementById(this.id).style.display="none";
        }
        else if(oldClicked!=clickedA && c=="2"){
            console.log("wrong  answer");
            document.getElementById(this.id).style.display="block"
            document.getElementById(clickedN).style.display="block";
            c="0";
        }
        clickedN=this.id;
    }
    console.log("clickedN"+clickedN);
    console.log("clickedA"+clickedA);
} 
*/