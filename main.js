var  imageNo=16; // how many img you want
// console.log("in Java");
var myObj, clickedN,clickedid, clickedA,oldClicked,c="0", counter=25 ,rightClicks=0;
var s=0,m=0;
var Rclicks=document.getElementById("Rclicks");
var Rchoose=document.getElementById("Rchoose");
var time=document.getElementById("timer");
Rclicks.innerHTML=counter;
Rchoose.innerHTML=rightClicks;

CreatElement();
calll(myObj);
//fuction to create elements and overlay
function CreatElement(){
    // console.log("in function");
    for(i=1; i<=imageNo; i++)
    {
        // console.log("in for function");
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
        // console.log(myObj);
    }
}
//get JSON 
function calll(){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(myObj) {
    if (this.readyState == 4 && this.status == 200) {
       myObj = JSON.parse(this.responseText);
        addimg(myObj);
        // console.log(myObj); 
    }
    return myObj;
}
xmlhttp.open("GET", "img.json", true);
xmlhttp.send();
}

//adding URL to img
function addimg(myObj){
    shuffle();
    // console.log("arr");
    // console.log(arr);
    for (x in myObj) 
    {
        document.getElementsByClassName("img")[arr[x]].alt=myObj[x].name;
        document.getElementsByClassName("overlay")[arr[x]].title=myObj[x].name;
        document.getElementsByClassName("img")[arr[x]].src=myObj[x].URL;
    }
    clk();

}

// add click listner 
function clk(){
    var getDiv=document.getElementsByClassName("overlay");
    for(i=0 ;i<getDiv.length ;i++)
    {getDiv[i].addEventListener("click", comp)}
    console.log("in click")
}

//enable clicks again
function Eclicks(){
    var getDiv=document.getElementsByClassName("overlay");
        for(i=0 ;i<getDiv.length ;i++)
        {getDiv[i].style.pointerEvents = "auto";}
}

//stop clicking
function stp(){
    var getDiv=document.getElementsByClassName("overlay");
    for(i=0 ;i<getDiv.length ;i++)
    {getDiv[i].style.pointerEvents = "none";}
}
//Compare function


function comp(myVar){
    // console.log("compare")
    clickedid=this.id;
    if(clickedN!=this.id){
    clickedA=this.title;
    c++;
    document.getElementById(this.id).style.display="none";
    var audio = new Audio('./button-3.mp3');
    audio.play();
    // right choise
    if(oldClicked==clickedA && c=="2"){
        console.log("good");
        var x=clickedN;
        var audio = new Audio('./cheering.mp3');
        audio.play();
        c=0;
        rightClicks++;
        Rchoose.innerHTML=rightClicks;
        counter--;
        Rclicks.innerHTML=counter;
        // end of game "all choices"
        if(rightClicks==8){
            myStopFunction();
            // alert("you ar goood");
            // Get the modal
        var audio = new Audio('./elrgala.mp3');
        audio.play();
        var modal = document.getElementById('myModal');
        var modalImg= document.getElementById('modalImg')
        var textt=document.getElementById('textt')
        modal.style.display = "block";
        modalImg.src="https://media1.tenor.com/images/6e787cd3d24a79136578afbdcfc776b3/tenor.gif?itemid=3411621";
        textt.innerHTML="congraaaaaaaaats You did it";
        document.getElementById("timerf").innerHTML=timee;
        }
    }
    //wrong
    if(oldClicked!=clickedA && c=="2"){
        counter--;
        Rclicks.innerHTML=counter;
        var x=clickedN;
        if(counter>0){
            var audio = new Audio('./Wrong Buzzer.wav');
            audio.play();
            setTimeout(function(){ 
                document.getElementById(clickedid).style.display="block";
                document.getElementById(x).style.display="block";
                c=0;
                Eclicks();
                },500);
        }
        stp();
        console.log("wrong");
    }
    // console.log(c);
    oldClicked=this.title;
    clickedN=this.id;
}
 // no remainig wrong choises
 if(counter<=0){
    var overlay= document.getElementsByClassName("overlay")
    myStopFunction();
    var audio = new Audio('./looser.mp3');
    audio.play();
     for(i=0 ; i<overlay.length; i++)
     {
        overlay[i].style.display="none";
        console.log(i);
        console.log(overlay[i]);
     }
     var modal = document.getElementById('myModal');
     var modalImg= document.getElementById('modalImg')
     var textt=document.getElementById('textt')
     modal.style.display = "block";
     modalImg.src="https://vignette.wikia.nocookie.net/epicrapbattlesofhistory/images/d/d3/You-Fail-random-35627282-607-360.gif/revision/latest?cb=20140201023616"
     textt.innerHTML="You faaaaaaaild Looooser";
     document.getElementById("timerf").innerHTML=timee;
    }
}


var myVar=setInterval(timer,1000);
// stop timer
function myStopFunction() {
    clearInterval(myVar);
} 
//start timer
function timer(){
    s++;
    if(s<10){
        s="0"+s;
        
    }
    
    if(s==60){
        m++;
        s=0;
    }
    timee= m+":"+s
    time.innerHTML= m+":"+s;
    return timee;
}
var arr=[ ];
// shuffle the imges 
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
    // console.log(arr);
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