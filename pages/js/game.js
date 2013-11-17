// create the XMLHttpRequest object, according browser
function get_XmlHttp() {
  // create the variable that will contain the instance of the XMLHttpRequest object (initially with null value)
  var xmlHttp = null;

  if(window.XMLHttpRequest) {		// for Forefox, IE7+, Opera, Safari, ...
    xmlHttp = new XMLHttpRequest();
  }
  else if(window.ActiveXObject) {	// for Internet Explorer 5 or 6
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  return xmlHttp;
}//varible returned
// sends data to a php file, via POST, and displays the received answer
function ajaxrequest(php_file, tagID) {
  var request =  get_XmlHttp();		// call the function for the XMLHttpRequest instance

  // create pairs index=value with data that must be sent to server
  //var  the_data = 'test='+document.getElementById('txt2').innerHTML;
  var  the_data = 'data='+'56';
  //var  the_data = "THIS IS THE DATA DISPLAYES";

  request.open("POST", php_file, true);			// set the request

  // adds  a header to tell the PHP script to recognize the data as is sent via POST
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send(the_data);		// calls the send() method with datas as parameter

  // Check request status
  // If the response is received completely, will be transferred to the HTML tag with tagID
  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      document.getElementById(tagID).innerHTML = request.responseText;
    }
  }
}

/*
 above are two functions required for the ajax request.
 */



//type 3 is bottom 
//type 4 is right 
//type 1 is left 
//type 2 is top
var pos=0,pos2=590,pos4=800,mbox,stop=true,duration=10/*0.5*/,increment=4/*0.4*/,up=false,down=false,hits=0,count=0,level=1,mHits=0,hitIncrement=true,left=false,right=false;
//var pos1=pos+"px";
function startGame()
{
if(!stop)//if stop is false i e game is going on stop it
{
document.write("thank you for playing");
document.getElementById("start_stop").value="START";
}
else//stop is true game is not started yet then start it
{
document.getElementById("start_stop").value="STOP";
stop=false;
startMove();
}
}










function startMove()
{
if(mHits>=3)
{
//document.write(" you have crossed the maximum number of hits (3) in a single level. game over ");
//document.write(" summary: tries= "+count+" total hits= "+hits+" last level "+level+" please reload to play again ");
//use ajax and send the data to the server for storing in the database



ajaxrequest('js/addgamedata.php', 'instruction');







}
if(count>0)
{var x=count%10;}
if(x==0)
{
//you go to next level
level++;
document.getElementById("myPlayer1").src="images/player.png";
duration=duration-1;
if(duration<=0)
{
increment=increment+2;
}
mHits=0;//new level
}
 var mRandom=Math.random();
 //document.write(mRandom);
 if(mRandom>=0&&mRandom<0.125)
 {
 mDelay("b1",1);
 }
 else if(mRandom>=0.125&&mRandom<0.25)
 {
 mDelay("b2",1);
 }
 else if(mRandom>=0.25&&mRandom<0.375)
 {
 mDelay("b3",2);
 }
 else if(mRandom>=0.375&&mRandom<0.5)
 {
 mDelay("b4",2);
 }
 //-------------------------------------------------
 //other four boxes
 else if(mRandom>=0.5&&mRandom<0.625)
 {
 mDelay("b5",3);//bottom left
 }
 else if(mRandom>=0.625&&mRandom<0.75)
 {
 mDelay("b6",3);//bottom right
 }
 else if(mRandom>=0.75&&mRandom<0.875)
 {
 mDelay("b7",4);//right top
 }
 else 
 {
 mDelay("b8",4);//right bottom
 }
 //-------------------------------------------------
}
