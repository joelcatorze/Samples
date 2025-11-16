window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  var player = GetPlayer();

Int_Timer = player.GetVar("Num_Timer");


//var time_sec = 0;

function startTimer(){
	
	Int_Timer += 1;
	
	player.SetVar("Num_Timer",Int_Timer);
	
}

timeID = setInterval(startTimer, 1000);
}

window.Script2 = function()
{
     var player = GetPlayer();

n1 = player.GetVar("Num_Array_1");
n2 = player.GetVar("Num_Array_2");
n3 = player.GetVar("Num_Array_3");
n4 = player.GetVar("Num_Array_4");
n5 = player.GetVar("Num_Array_5");
//n6 = player.GetVar("Num_Array_6");
//n7 = player.GetVar("Num_Array_7");
//n8 = player.GetVar("Num_Array_8");
//n9 = player.GetVar("Num_Array_9");
//n10 = player.GetVar("Num_Array_10");

var list = new Array(n1,n2,n3,n4,n5);//,n6,n7,n8,n9,n10);
	
var list2 = new Array();
for(var i=0; i<10; i++){
	if(!list.includes(i)){
		list2.push(i);
	}	
}
    
var rand = list2[Math.floor(Math.random() * list2.length)];


//alert(rand);

console.log(rand);
/*for(var j=0; j<4; j++){
	alert(list[j]);
}*/
	
	var nset = 0;
	
	if(n1>9 && nset == 0){
		player.SetVar("Num_Array_1",rand);
		nset = 1;
	}

	if(n2>9 && nset == 0){
		player.SetVar("Num_Array_2",rand);
		nset = 1;
	}
	
	if(n3>9 && nset == 0){
		player.SetVar("Num_Array_3",rand);
		nset = 1;
	}
	
	if(n4>9 && nset == 0){
		player.SetVar("Num_Array_4",rand);
		nset = 1;
	}
	
	if(n5>9 && nset == 0){
		player.SetVar("Num_Array_5",rand);
		nset = 1;
	}
	
	player.SetVar("Layer_Show",rand);
}

window.Script3 = function()
{
  clearInterval(timeID);
}

window.Script4 = function()
{
     var player = GetPlayer();

n1 = player.GetVar("Num_Array_1");
n2 = player.GetVar("Num_Array_2");
n3 = player.GetVar("Num_Array_3");
n4 = player.GetVar("Num_Array_4");
n5 = player.GetVar("Num_Array_5");
//n6 = player.GetVar("Num_Array_6");
//n7 = player.GetVar("Num_Array_7");
//n8 = player.GetVar("Num_Array_8");
//n9 = player.GetVar("Num_Array_9");
//n10 = player.GetVar("Num_Array_10");

var list = new Array(n1,n2,n3,n4,n5);//,n6,n7,n8,n9,n10);
	
var list2 = new Array();
for(var i=0; i<10; i++){
	if(!list.includes(i)){
		list2.push(i);
	}	
}
    
var rand = list2[Math.floor(Math.random() * list2.length)];


//alert(rand);

console.log(rand);
/*for(var j=0; j<4; j++){
	alert(list[j]);
}*/
	
	var nset = 0;
	
	if(n1>9 && nset == 0){
		player.SetVar("Num_Array_1",rand);
		nset = 1;
	}

	if(n2>9 && nset == 0){
		player.SetVar("Num_Array_2",rand);
		nset = 1;
	}
	
	if(n3>9 && nset == 0){
		player.SetVar("Num_Array_3",rand);
		nset = 1;
	}
	
	if(n4>9 && nset == 0){
		player.SetVar("Num_Array_4",rand);
		nset = 1;
	}
	
	if(n5>9 && nset == 0){
		player.SetVar("Num_Array_5",rand);
		nset = 1;
	}
	
	player.SetVar("Layer_Show",rand);
}

window.Script5 = function()
{
     var player = GetPlayer();

n1 = player.GetVar("Num_Array_1");
n2 = player.GetVar("Num_Array_2");
n3 = player.GetVar("Num_Array_3");
n4 = player.GetVar("Num_Array_4");
n5 = player.GetVar("Num_Array_5");
//n6 = player.GetVar("Num_Array_6");
//n7 = player.GetVar("Num_Array_7");
//n8 = player.GetVar("Num_Array_8");
//n9 = player.GetVar("Num_Array_9");
//n10 = player.GetVar("Num_Array_10");

var list = new Array(n1,n2,n3,n4,n5);//,n6,n7,n8,n9,n10);
	
var list2 = new Array();
for(var i=0; i<10; i++){
	if(!list.includes(i)){
		list2.push(i);
	}	
}
    
var rand = list2[Math.floor(Math.random() * list2.length)];


//alert(rand);

console.log(rand);
/*for(var j=0; j<4; j++){
	alert(list[j]);
}*/
	
	var nset = 0;
	
	if(n1>9 && nset == 0){
		player.SetVar("Num_Array_1",rand);
		nset = 1;
	}

	if(n2>9 && nset == 0){
		player.SetVar("Num_Array_2",rand);
		nset = 1;
	}
	
	if(n3>9 && nset == 0){
		player.SetVar("Num_Array_3",rand);
		nset = 1;
	}
	
	if(n4>9 && nset == 0){
		player.SetVar("Num_Array_4",rand);
		nset = 1;
	}
	
	if(n5>9 && nset == 0){
		player.SetVar("Num_Array_5",rand);
		nset = 1;
	}
	
	player.SetVar("Layer_Show",rand);
}

window.Script6 = function()
{
  var player = GetPlayer();
	
	txt_lname = player.GetVar("Txt_LastName");
	txt_fname = player.GetVar("Txt_FirstName");
	QuestionNumber = player.GetVar("Layer_Show");
 	//QuestionNumber = 5;
	
	var Name_List = new Array("John Smith",
								"Emily Johnson",
								"David Davis",
								"Sarah Brown",
								"Michael Wilson",
								"Jessica Thompson",
								"Matthew Taylor",
								"Olivia Martinez",
								"Christopher Anderson",
								"Ava White")

	txt_correct_name =  txt_fname.concat(" ", txt_lname);
	
	if(txt_correct_name == Name_List[QuestionNumber]){		
		//alert("correct")
		int_correct = 1;
		player.SetVar("Int_Correct",int_correct);		
	}else{
		//alert("incorrect")
		int_correct = 0;
		player.SetVar("Int_Correct",int_correct);		
	}
}

window.Script7 = function()
{
     var player = GetPlayer();

n1 = player.GetVar("Num_Array_1");
n2 = player.GetVar("Num_Array_2");
n3 = player.GetVar("Num_Array_3");
n4 = player.GetVar("Num_Array_4");
n5 = player.GetVar("Num_Array_5");
//n6 = player.GetVar("Num_Array_6");
//n7 = player.GetVar("Num_Array_7");
//n8 = player.GetVar("Num_Array_8");
//n9 = player.GetVar("Num_Array_9");
//n10 = player.GetVar("Num_Array_10");

var list = new Array(n1,n2,n3,n4,n5);//,n6,n7,n8,n9,n10);
	
var list2 = new Array();
for(var i=0; i<10; i++){
	if(!list.includes(i)){
		list2.push(i);
	}	
}
    
var rand = list2[Math.floor(Math.random() * list2.length)];


//alert(rand);

console.log(rand);
/*for(var j=0; j<4; j++){
	alert(list[j]);
}*/
	
	var nset = 0;
	
	if(n1>9 && nset == 0){
		player.SetVar("Num_Array_1",rand);
		nset = 1;
	}

	if(n2>9 && nset == 0){
		player.SetVar("Num_Array_2",rand);
		nset = 1;
	}
	
	if(n3>9 && nset == 0){
		player.SetVar("Num_Array_3",rand);
		nset = 1;
	}
	
	if(n4>9 && nset == 0){
		player.SetVar("Num_Array_4",rand);
		nset = 1;
	}
	
	if(n5>9 && nset == 0){
		player.SetVar("Num_Array_5",rand);
		nset = 1;
	}
	
	player.SetVar("Layer_Show",rand);
}

window.Script8 = function()
{
  clearInterval(timeID);
}

window.Script9 = function()
{
     var player = GetPlayer();

n1 = player.GetVar("Num_Array_1");
n2 = player.GetVar("Num_Array_2");
n3 = player.GetVar("Num_Array_3");
n4 = player.GetVar("Num_Array_4");
n5 = player.GetVar("Num_Array_5");
//n6 = player.GetVar("Num_Array_6");
//n7 = player.GetVar("Num_Array_7");
//n8 = player.GetVar("Num_Array_8");
//n9 = player.GetVar("Num_Array_9");
//n10 = player.GetVar("Num_Array_10");

var list = new Array(n1,n2,n3,n4,n5);//,n6,n7,n8,n9,n10);
	
var list2 = new Array();
for(var i=0; i<10; i++){
	if(!list.includes(i)){
		list2.push(i);
	}	
}
    
var rand = list2[Math.floor(Math.random() * list2.length)];


//alert(rand);

console.log(rand);
/*for(var j=0; j<4; j++){
	alert(list[j]);
}*/
	
	var nset = 0;
	
	if(n1>9 && nset == 0){
		player.SetVar("Num_Array_1",rand);
		nset = 1;
	}

	if(n2>9 && nset == 0){
		player.SetVar("Num_Array_2",rand);
		nset = 1;
	}
	
	if(n3>9 && nset == 0){
		player.SetVar("Num_Array_3",rand);
		nset = 1;
	}
	
	if(n4>9 && nset == 0){
		player.SetVar("Num_Array_4",rand);
		nset = 1;
	}
	
	if(n5>9 && nset == 0){
		player.SetVar("Num_Array_5",rand);
		nset = 1;
	}
	player.SetVar("Layer_Show",rand);
}

window.Script10 = function()
{
     var player = GetPlayer();

n1 = player.GetVar("Num_Array_1");
n2 = player.GetVar("Num_Array_2");
n3 = player.GetVar("Num_Array_3");
n4 = player.GetVar("Num_Array_4");
n5 = player.GetVar("Num_Array_5");
//n6 = player.GetVar("Num_Array_6");
//n7 = player.GetVar("Num_Array_7");
//n8 = player.GetVar("Num_Array_8");
//n9 = player.GetVar("Num_Array_9");
//n10 = player.GetVar("Num_Array_10");

var list = new Array(n1,n2,n3,n4,n5);//,n6,n7,n8,n9,n10);
	
var list2 = new Array();
for(var i=0; i<10; i++){
	if(!list.includes(i)){
		list2.push(i);
	}	
}
    
var rand = list2[Math.floor(Math.random() * list2.length)];


//alert(rand);

console.log(rand);
/*for(var j=0; j<4; j++){
	alert(list[j]);
}*/
	
	var nset = 0;
	
	if(n1>9 && nset == 0){
		player.SetVar("Num_Array_1",rand);
		nset = 1;
	}

	if(n2>9 && nset == 0){
		player.SetVar("Num_Array_2",rand);
		nset = 1;
	}
	
	if(n3>9 && nset == 0){
		player.SetVar("Num_Array_3",rand);
		nset = 1;
	}
	
	if(n4>9 && nset == 0){
		player.SetVar("Num_Array_4",rand);
		nset = 1;
	}
	
	if(n5>9 && nset == 0){
		player.SetVar("Num_Array_5",rand);
		nset = 1;
	}
	
	player.SetVar("Layer_Show",rand);
}

window.Script11 = function()
{
  var player = GetPlayer();
	
	txt_lname = player.GetVar("Txt_LastName");
	txt_fname = player.GetVar("Txt_FirstName");
	QuestionNumber = player.GetVar("Layer_Show");
 	//QuestionNumber = 5;
	
	var Name_List = new Array("Benjamin Collins",
								"Natalie Reed",
								"Jonathan Ellis",
								"Samantha Hughes",
								"Andrew Lopez",
								"Madison Price",
								"Joshua Morgan",
								"Chloe Patterson",
								"Ethan Ramirez",
								"Sophia Foster")


	txt_correct_name =  txt_fname.concat(" ", txt_lname);
	
	if(txt_correct_name == Name_List[QuestionNumber]){		
		//alert("correct")
		int_correct = 1;
		player.SetVar("Int_Correct",int_correct);		
	}else{
		//alert("incorrect")
		int_correct = 0;
		player.SetVar("Int_Correct",int_correct);		
	}
}

window.Script12 = function()
{
     var player = GetPlayer();

n1 = player.GetVar("Num_Array_1");
n2 = player.GetVar("Num_Array_2");
n3 = player.GetVar("Num_Array_3");
n4 = player.GetVar("Num_Array_4");
n5 = player.GetVar("Num_Array_5");
//n6 = player.GetVar("Num_Array_6");
//n7 = player.GetVar("Num_Array_7");
//n8 = player.GetVar("Num_Array_8");
//n9 = player.GetVar("Num_Array_9");
//n10 = player.GetVar("Num_Array_10");

var list = new Array(n1,n2,n3,n4,n5); //,n6,n7,n8,n9,n10);
	
var list2 = new Array();
for(var i=0; i<10; i++){
	if(!list.includes(i)){
		list2.push(i);
	}	
}
    
var rand = list2[Math.floor(Math.random() * list2.length)];


//alert(rand);

console.log(rand);
/*for(var j=0; j<4; j++){
	alert(list[j]);
}*/
	
	var nset = 0;
	
	if(n1>9 && nset == 0){
		player.SetVar("Num_Array_1",rand);
		nset = 1;
	}

	if(n2>9 && nset == 0){
		player.SetVar("Num_Array_2",rand);
		nset = 1;
	}
	
	if(n3>9 && nset == 0){
		player.SetVar("Num_Array_3",rand);
		nset = 1;
	}
	
	if(n4>9 && nset == 0){
		player.SetVar("Num_Array_4",rand);
		nset = 1;
	}
	
	if(n5>9 && nset == 0){
		player.SetVar("Num_Array_5",rand);
		nset = 1;
	}
	
	player.SetVar("Layer_Show",rand);
}

window.Script13 = function()
{
  clearInterval(timeID);
}

window.Script14 = function()
{
     var player = GetPlayer();

n1 = player.GetVar("Num_Array_1");
n2 = player.GetVar("Num_Array_2");
n3 = player.GetVar("Num_Array_3");
n4 = player.GetVar("Num_Array_4");
n5 = player.GetVar("Num_Array_5");
//n6 = player.GetVar("Num_Array_6");
//n7 = player.GetVar("Num_Array_7");
//n8 = player.GetVar("Num_Array_8");
//n9 = player.GetVar("Num_Array_9");
//n10 = player.GetVar("Num_Array_10");

var list = new Array(n1,n2,n3,n4,n5);//,n6,n7,n8,n9,n10);
	
var list2 = new Array();
for(var i=0; i<10; i++){
	if(!list.includes(i)){
		list2.push(i);
	}	
}
    
var rand = list2[Math.floor(Math.random() * list2.length)];


//alert(rand);

console.log(rand);
/*for(var j=0; j<4; j++){
	alert(list[j]);
}*/
	
	var nset = 0;
	
	if(n1>9 && nset == 0){
		player.SetVar("Num_Array_1",rand);
		nset = 1;
	}

	if(n2>9 && nset == 0){
		player.SetVar("Num_Array_2",rand);
		nset = 1;
	}
	
	if(n3>9 && nset == 0){
		player.SetVar("Num_Array_3",rand);
		nset = 1;
	}
	
	if(n4>9 && nset == 0){
		player.SetVar("Num_Array_4",rand);
		nset = 1;
	}
	
	if(n5>9 && nset == 0){
		player.SetVar("Num_Array_5",rand);
		nset = 1;
	}
	
	player.SetVar("Layer_Show",rand);
}

window.Script15 = function()
{
     var player = GetPlayer();

n1 = player.GetVar("Num_Array_1");
n2 = player.GetVar("Num_Array_2");
n3 = player.GetVar("Num_Array_3");
n4 = player.GetVar("Num_Array_4");
n5 = player.GetVar("Num_Array_5");
//n6 = player.GetVar("Num_Array_6");
//n7 = player.GetVar("Num_Array_7");
//n8 = player.GetVar("Num_Array_8");
//n9 = player.GetVar("Num_Array_9");
//n10 = player.GetVar("Num_Array_10");

var list = new Array(n1,n2,n3,n4,n5);//,n6,n7,n8,n9,n10);
	
var list2 = new Array();
for(var i=0; i<10; i++){
	if(!list.includes(i)){
		list2.push(i);
	}	
}
    
var rand = list2[Math.floor(Math.random() * list2.length)];


//alert(rand);

console.log(rand);
/*for(var j=0; j<4; j++){
	alert(list[j]);
}*/
	
	var nset = 0;
	
	if(n1>9 && nset == 0){
		player.SetVar("Num_Array_1",rand);
		nset = 1;
	}

	if(n2>9 && nset == 0){
		player.SetVar("Num_Array_2",rand);
		nset = 1;
	}
	
	if(n3>9 && nset == 0){
		player.SetVar("Num_Array_3",rand);
		nset = 1;
	}
	
	if(n4>9 && nset == 0){
		player.SetVar("Num_Array_4",rand);
		nset = 1;
	}
	
	if(n5>9 && nset == 0){
		player.SetVar("Num_Array_5",rand);
		nset = 1;
	}
	
	player.SetVar("Layer_Show",rand);
}

window.Script16 = function()
{
  var player = GetPlayer();
	
	txt_lname = player.GetVar("Txt_LastName");
	txt_fname = player.GetVar("Txt_FirstName");
	QuestionNumber = player.GetVar("Layer_Show");
 	//QuestionNumber = 5;
	
	var Name_List = new Array("Xavier Vasquez",
								"Brianna Nguyen",
								"Jeremiah Patel",
								"Gabriella Chen",
								"Ezekiel Gonzalez",
								"Adriana Ibrahim",
								"Jeremiah Macias",
								"Isabella Kim",
								"Dominique Alvarado",
								"Seraphina Ngo")


	txt_correct_name =  txt_fname.concat(" ", txt_lname);
	
	if(txt_correct_name == Name_List[QuestionNumber]){		
		//alert("correct")
		int_correct = 1;
		player.SetVar("Int_Correct",int_correct);		
	}else{
		//alert("incorrect")
		int_correct = 0;
		player.SetVar("Int_Correct",int_correct);		
	}
}

window.Script17 = function()
{
     var player = GetPlayer();

n1 = player.GetVar("Num_Array_1");
n2 = player.GetVar("Num_Array_2");
n3 = player.GetVar("Num_Array_3");
n4 = player.GetVar("Num_Array_4");
n5 = player.GetVar("Num_Array_5");
//n6 = player.GetVar("Num_Array_6");
//n7 = player.GetVar("Num_Array_7");
//n8 = player.GetVar("Num_Array_8");
//n9 = player.GetVar("Num_Array_9");
//n10 = player.GetVar("Num_Array_10");

var list = new Array(n1,n2,n3,n4,n5);//,n6,n7,n8,n9,n10);
	
var list2 = new Array();
for(var i=0; i<20; i++){
	if(!list.includes(i)){
		list2.push(i);
	}	
}
    
var rand = list2[Math.floor(Math.random() * list2.length)];


//alert(rand);

console.log(rand);
/*for(var j=0; j<4; j++){
	alert(list[j]);
}*/
	
	var nset = 0;
	
	if(n1>9 && nset == 0){
		player.SetVar("Num_Array_1",rand);
		nset = 1;
	}

	if(n2>9 && nset == 0){
		player.SetVar("Num_Array_2",rand);
		nset = 1;
	}
	
	if(n3>9 && nset == 0){
		player.SetVar("Num_Array_3",rand);
		nset = 1;
	}
	
	if(n4>9 && nset == 0){
		player.SetVar("Num_Array_4",rand);
		nset = 1;
	}
	
	if(n5>9 && nset == 0){
		player.SetVar("Num_Array_5",rand);
		nset = 1;
	}
	
	player.SetVar("Layer_Show",rand);
}

window.Script18 = function()
{
  clearInterval(timeID);
}

window.Script19 = function()
{
  clearInterval(timeID);
}

window.Script20 = function()
{
     var player = GetPlayer();

n1 = player.GetVar("Num_Array_1");
n2 = player.GetVar("Num_Array_2");
n3 = player.GetVar("Num_Array_3");
n4 = player.GetVar("Num_Array_4");
n5 = player.GetVar("Num_Array_5");
//n6 = player.GetVar("Num_Array_6");
//n7 = player.GetVar("Num_Array_7");
//n8 = player.GetVar("Num_Array_8");
//n9 = player.GetVar("Num_Array_9");
//n10 = player.GetVar("Num_Array_10");

var list = new Array(n1,n2,n3,n4,n5);//,n6,n7,n8,n9,n10);
	
var list2 = new Array();
for(var i=0; i<20; i++){
	if(!list.includes(i)){
		list2.push(i);
	}	
}
    
var rand = list2[Math.floor(Math.random() * list2.length)];


//alert(rand);

console.log(rand);
/*for(var j=0; j<4; j++){
	alert(list[j]);
}*/
	
	var nset = 0;
	
	if(n1>9 && nset == 0){
		player.SetVar("Num_Array_1",rand);
		nset = 1;
	}

	if(n2>9 && nset == 0){
		player.SetVar("Num_Array_2",rand);
		nset = 1;
	}
	
	if(n3>9 && nset == 0){
		player.SetVar("Num_Array_3",rand);
		nset = 1;
	}
	
	if(n4>9 && nset == 0){
		player.SetVar("Num_Array_4",rand);
		nset = 1;
	}
	
	if(n5>9 && nset == 0){
		player.SetVar("Num_Array_5",rand);
		nset = 1;
	}
	
	player.SetVar("Layer_Show",rand);
}

window.Script21 = function()
{
  clearInterval(timeID);
}

window.Script22 = function()
{
     var player = GetPlayer();

n1 = player.GetVar("Num_Array_1");
n2 = player.GetVar("Num_Array_2");
n3 = player.GetVar("Num_Array_3");
n4 = player.GetVar("Num_Array_4");
n5 = player.GetVar("Num_Array_5");
//n6 = player.GetVar("Num_Array_6");
//n7 = player.GetVar("Num_Array_7");
//n8 = player.GetVar("Num_Array_8");
//n9 = player.GetVar("Num_Array_9");
//n10 = player.GetVar("Num_Array_10");

var list = new Array(n1,n2,n3,n4,n5);//,n6,n7,n8,n9,n10);
	
var list2 = new Array();
for(var i=0; i<20; i++){
	if(!list.includes(i)){
		list2.push(i);
	}	
}
    
var rand = list2[Math.floor(Math.random() * list2.length)];


//alert(rand);

console.log(rand);
/*for(var j=0; j<4; j++){
	alert(list[j]);
}*/
	
	var nset = 0;
	
	if(n1>9 && nset == 0){
		player.SetVar("Num_Array_1",rand);
		nset = 1;
	}

	if(n2>9 && nset == 0){
		player.SetVar("Num_Array_2",rand);
		nset = 1;
	}
	
	if(n3>9 && nset == 0){
		player.SetVar("Num_Array_3",rand);
		nset = 1;
	}
	
	if(n4>9 && nset == 0){
		player.SetVar("Num_Array_4",rand);
		nset = 1;
	}
	
	if(n5>9 && nset == 0){
		player.SetVar("Num_Array_5",rand);
		nset = 1;
	}
	
	player.SetVar("Layer_Show",rand);
}

window.Script23 = function()
{
  var player = GetPlayer();
	
	txt_MM = player.GetVar("Txt_Date_A_MM");
	txt_DD = player.GetVar("Txt_Date_B_DD");
	txt_YYYY = player.GetVar("Txt_Date_C_YYYY");
	QuestionNumber = player.GetVar("Layer_Show");
 	//QuestionNumber = 0;
	
	var Date_List = new Array("01-01-1990",
								"02-02-1985",
								"03-03-1992",
								"04-04-1988",
								"05-05-1995",
								"06-06-1997",
								"07-07-1991",
								"08-08-1993",
								"09-09-1986",
								"10-10-1998",
								"11-11-1984",
								"12-12-1996",
								"01-13-1989",
								"02-14-1994",
								"03-15-1987",
								"04-16-1999",
								"05-17-1983",
								"06-18-1990",
								"07-19-1992",
								"08-20-1985")

	txt_correct_date =  txt_MM.concat("-", txt_DD, "-", txt_YYYY);
	
	if(txt_correct_date == Date_List[QuestionNumber]){		
		int_correct = 1;
		player.SetVar("Int_Correct",int_correct);		
	}else{
		int_correct = 0;
		player.SetVar("Int_Correct",int_correct);		
	}
}

window.Script24 = function()
{
  var player = GetPlayer();

Int_Timer = player.GetVar("Num_Timer");


//var time_sec = 0;

function startTimer(){
	
	Int_Timer += 1;
	
	player.SetVar("Num_Timer",Int_Timer);
	
}

timeID = setInterval(startTimer, 1000);
}

window.Script25 = function()
{
     var player = GetPlayer();

n1 = player.GetVar("Num_Array_1");
n2 = player.GetVar("Num_Array_2");
n3 = player.GetVar("Num_Array_3");
n4 = player.GetVar("Num_Array_4");
n5 = player.GetVar("Num_Array_5");
n6 = player.GetVar("Num_Array_6");
n7 = player.GetVar("Num_Array_7");
n8 = player.GetVar("Num_Array_8");
n9 = player.GetVar("Num_Array_9");
n10 = player.GetVar("Num_Array_10");

var list = new Array(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10);
	
var list2 = new Array();
for(var i=0; i<20; i++){
	if(!list.includes(i)){
		list2.push(i);
	}	
}
    
var rand = list2[Math.floor(Math.random() * list2.length)];


//alert(rand);

console.log(rand);
/*for(var j=0; j<4; j++){
	alert(list[j]);
}*/
	
	var nset = 0;
	
	if(n1>9 && nset == 0){
		player.SetVar("Num_Array_1",rand);
		nset = 1;
	}

	if(n2>9 && nset == 0){
		player.SetVar("Num_Array_2",rand);
		nset = 1;
	}
	
	if(n3>9 && nset == 0){
		player.SetVar("Num_Array_3",rand);
		nset = 1;
	}
	
	if(n4>9 && nset == 0){
		player.SetVar("Num_Array_4",rand);
		nset = 1;
	}
	
	if(n5>9 && nset == 0){
		player.SetVar("Num_Array_5",rand);
		nset = 1;
	}
	
	if(n6>9 && nset == 0){
		player.SetVar("Num_Array_6",rand);
		nset = 1;
	}

	if(n7>9 && nset == 0){
		player.SetVar("Num_Array_7",rand);
		nset = 1;
	}
	
	if(n8>9 && nset == 0){
		player.SetVar("Num_Array_8",rand);
		nset = 1;
	}
	
	if(n9>9 && nset == 0){
		player.SetVar("Num_Array_9",rand);
		nset = 1;
	}
	
	if(n10>9 && nset == 0){
		player.SetVar("Num_Array_10",rand);
		nset = 1;
	}
	
	player.SetVar("Layer_Show",rand);
}

window.Script26 = function()
{
  clearInterval(timeID);
}

window.Script27 = function()
{
     var player = GetPlayer();

n1 = player.GetVar("Num_Array_1");
n2 = player.GetVar("Num_Array_2");
n3 = player.GetVar("Num_Array_3");
n4 = player.GetVar("Num_Array_4");
n5 = player.GetVar("Num_Array_5");
n6 = player.GetVar("Num_Array_6");
n7 = player.GetVar("Num_Array_7");
n8 = player.GetVar("Num_Array_8");
n9 = player.GetVar("Num_Array_9");
n10 = player.GetVar("Num_Array_10");

var list = new Array(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10);
	
var list2 = new Array();
for(var i=0; i<20; i++){
	if(!list.includes(i)){
		list2.push(i);
	}	
}
    
var rand = list2[Math.floor(Math.random() * list2.length)];


//alert(rand);

console.log(rand);
/*for(var j=0; j<4; j++){
	alert(list[j]);
}*/
	
	var nset = 0;
	
	if(n1>9 && nset == 0){
		player.SetVar("Num_Array_1",rand);
		nset = 1;
	}

	if(n2>9 && nset == 0){
		player.SetVar("Num_Array_2",rand);
		nset = 1;
	}
	
	if(n3>9 && nset == 0){
		player.SetVar("Num_Array_3",rand);
		nset = 1;
	}
	
	if(n4>9 && nset == 0){
		player.SetVar("Num_Array_4",rand);
		nset = 1;
	}
	
	if(n5>9 && nset == 0){
		player.SetVar("Num_Array_5",rand);
		nset = 1;
	}
	
	if(n6>9 && nset == 0){
		player.SetVar("Num_Array_6",rand);
		nset = 1;
	}

	if(n7>9 && nset == 0){
		player.SetVar("Num_Array_7",rand);
		nset = 1;
	}
	
	if(n8>9 && nset == 0){
		player.SetVar("Num_Array_8",rand);
		nset = 1;
	}
	
	if(n9>9 && nset == 0){
		player.SetVar("Num_Array_9",rand);
		nset = 1;
	}
	
	if(n10>9 && nset == 0){
		player.SetVar("Num_Array_10",rand);
		nset = 1;
	}
	
	player.SetVar("Layer_Show",rand);
}

window.Script28 = function()
{
     var player = GetPlayer();

n1 = player.GetVar("Num_Array_1");
n2 = player.GetVar("Num_Array_2");
n3 = player.GetVar("Num_Array_3");
n4 = player.GetVar("Num_Array_4");
n5 = player.GetVar("Num_Array_5");
n6 = player.GetVar("Num_Array_6");
n7 = player.GetVar("Num_Array_7");
n8 = player.GetVar("Num_Array_8");
n9 = player.GetVar("Num_Array_9");
n10 = player.GetVar("Num_Array_10");

var list = new Array(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10);
	
var list2 = new Array();
for(var i=0; i<20; i++){
	if(!list.includes(i)){
		list2.push(i);
	}	
}
    
var rand = list2[Math.floor(Math.random() * list2.length)];


//alert(rand);

console.log(rand);
/*for(var j=0; j<4; j++){
	alert(list[j]);
}*/
	
	var nset = 0;
	
	if(n1>9 && nset == 0){
		player.SetVar("Num_Array_1",rand);
		nset = 1;
	}

	if(n2>9 && nset == 0){
		player.SetVar("Num_Array_2",rand);
		nset = 1;
	}
	
	if(n3>9 && nset == 0){
		player.SetVar("Num_Array_3",rand);
		nset = 1;
	}
	
	if(n4>9 && nset == 0){
		player.SetVar("Num_Array_4",rand);
		nset = 1;
	}
	
	if(n5>9 && nset == 0){
		player.SetVar("Num_Array_5",rand);
		nset = 1;
	}
	
	if(n6>9 && nset == 0){
		player.SetVar("Num_Array_6",rand);
		nset = 1;
	}

	if(n7>9 && nset == 0){
		player.SetVar("Num_Array_7",rand);
		nset = 1;
	}
	
	if(n8>9 && nset == 0){
		player.SetVar("Num_Array_8",rand);
		nset = 1;
	}
	
	if(n9>9 && nset == 0){
		player.SetVar("Num_Array_9",rand);
		nset = 1;
	}
	
	if(n10>9 && nset == 0){
		player.SetVar("Num_Array_10",rand);
		nset = 1;
	}
	
	player.SetVar("Layer_Show",rand);
}

window.Script29 = function()
{
  var player = GetPlayer();
	
	txt_Phone_A = player.GetVar("Txt_Phone_A");
	txt_Phone_B = player.GetVar("Txt_Phone_B");
	QuestionNumber = player.GetVar("Layer_Show");
 	//QuestionNumber = 0;
	
	var Date_List = new Array("1234567890",
"2345678901",
"3451234321",
"4567890123",
"5678901234",
"6789012345",
"7890123456",
"8901234567",
"9012345678",
"0123456789",
"1234567890",
"2345678901",
"3456789012",
"4567890123",
"5678901234",
"6789012345",
"7890123456",
"8901234567",
"9012345678",
"0123456789")


	txt_correct_phone =  txt_Phone_A.concat(txt_Phone_B);
	
	if(txt_correct_phone == Date_List[QuestionNumber]){		
		int_correct = 1;
		player.SetVar("Int_Correct",int_correct);		
	}else{
		int_correct = 0;
		player.SetVar("Int_Correct",int_correct);		
	}

}

window.Script30 = function()
{
     var player = GetPlayer();

n1 = player.GetVar("Num_Array_1");
n2 = player.GetVar("Num_Array_2");
n3 = player.GetVar("Num_Array_3");
n4 = player.GetVar("Num_Array_4");
n5 = player.GetVar("Num_Array_5");
n6 = player.GetVar("Num_Array_6");
n7 = player.GetVar("Num_Array_7");
n8 = player.GetVar("Num_Array_8");
n9 = player.GetVar("Num_Array_9");
n10 = player.GetVar("Num_Array_10");

var list = new Array(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10);
	
var list2 = new Array();
for(var i=0; i<20; i++){
	if(!list.includes(i)){
		list2.push(i);
	}	
}
    
var rand = list2[Math.floor(Math.random() * list2.length)];


//alert(rand);

console.log(rand);
/*for(var j=0; j<4; j++){
	alert(list[j]);
}*/
	
	var nset = 0;
	
	if(n1>9 && nset == 0){
		player.SetVar("Num_Array_1",rand);
		nset = 1;
	}

	if(n2>9 && nset == 0){
		player.SetVar("Num_Array_2",rand);
		nset = 1;
	}
	
	if(n3>9 && nset == 0){
		player.SetVar("Num_Array_3",rand);
		nset = 1;
	}
	
	if(n4>9 && nset == 0){
		player.SetVar("Num_Array_4",rand);
		nset = 1;
	}
	
	if(n5>9 && nset == 0){
		player.SetVar("Num_Array_5",rand);
		nset = 1;
	}
	
	if(n6>9 && nset == 0){
		player.SetVar("Num_Array_6",rand);
		nset = 1;
	}

	if(n7>9 && nset == 0){
		player.SetVar("Num_Array_7",rand);
		nset = 1;
	}
	
	if(n8>9 && nset == 0){
		player.SetVar("Num_Array_8",rand);
		nset = 1;
	}
	
	if(n9>9 && nset == 0){
		player.SetVar("Num_Array_9",rand);
		nset = 1;
	}
	
	if(n10>9 && nset == 0){
		player.SetVar("Num_Array_10",rand);
		nset = 1;
	}
	
	player.SetVar("Layer_Show",rand);
}

window.Script31 = function()
{
  clearInterval(timeID);
}

window.Script32 = function()
{
  clearInterval(timeID);
}

window.Script33 = function()
{
     var player = GetPlayer();

n1 = player.GetVar("Num_Array_1");
n2 = player.GetVar("Num_Array_2");
n3 = player.GetVar("Num_Array_3");
n4 = player.GetVar("Num_Array_4");
n5 = player.GetVar("Num_Array_5");
n6 = player.GetVar("Num_Array_6");
n7 = player.GetVar("Num_Array_7");
n8 = player.GetVar("Num_Array_8");
n9 = player.GetVar("Num_Array_9");
n10 = player.GetVar("Num_Array_10");

var list = new Array(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10);
	
var list2 = new Array();
for(var i=0; i<20; i++){
	if(!list.includes(i)){
		list2.push(i);
	}	
}
    
var rand = list2[Math.floor(Math.random() * list2.length)];


//alert(rand);

console.log(rand);
/*for(var j=0; j<4; j++){
	alert(list[j]);
}*/
	
	var nset = 0;
	
	if(n1>9 && nset == 0){
		player.SetVar("Num_Array_1",rand);
		nset = 1;
	}

	if(n2>9 && nset == 0){
		player.SetVar("Num_Array_2",rand);
		nset = 1;
	}
	
	if(n3>9 && nset == 0){
		player.SetVar("Num_Array_3",rand);
		nset = 1;
	}
	
	if(n4>9 && nset == 0){
		player.SetVar("Num_Array_4",rand);
		nset = 1;
	}
	
	if(n5>9 && nset == 0){
		player.SetVar("Num_Array_5",rand);
		nset = 1;
	}
	
	if(n6>9 && nset == 0){
		player.SetVar("Num_Array_6",rand);
		nset = 1;
	}

	if(n7>9 && nset == 0){
		player.SetVar("Num_Array_7",rand);
		nset = 1;
	}
	
	if(n8>9 && nset == 0){
		player.SetVar("Num_Array_8",rand);
		nset = 1;
	}
	
	if(n9>9 && nset == 0){
		player.SetVar("Num_Array_9",rand);
		nset = 1;
	}
	
	if(n10>9 && nset == 0){
		player.SetVar("Num_Array_10",rand);
		nset = 1;
	}
	
	player.SetVar("Layer_Show",rand);
}

window.Script34 = function()
{
  clearInterval(timeID);
}

window.Script35 = function()
{
     var player = GetPlayer();

n1 = player.GetVar("Num_Array_1");
n2 = player.GetVar("Num_Array_2");
n3 = player.GetVar("Num_Array_3");
n4 = player.GetVar("Num_Array_4");
n5 = player.GetVar("Num_Array_5");
n6 = player.GetVar("Num_Array_6");
n7 = player.GetVar("Num_Array_7");
n8 = player.GetVar("Num_Array_8");
n9 = player.GetVar("Num_Array_9");
n10 = player.GetVar("Num_Array_10");

var list = new Array(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10);
	
var list2 = new Array();
for(var i=0; i<20; i++){
	if(!list.includes(i)){
		list2.push(i);
	}	
}
    
var rand = list2[Math.floor(Math.random() * list2.length)];


//alert(rand);

console.log(rand);
/*for(var j=0; j<4; j++){
	alert(list[j]);
}*/
	
	var nset = 0;
	
	if(n1>9 && nset == 0){
		player.SetVar("Num_Array_1",rand);
		nset = 1;
	}

	if(n2>9 && nset == 0){
		player.SetVar("Num_Array_2",rand);
		nset = 1;
	}
	
	if(n3>9 && nset == 0){
		player.SetVar("Num_Array_3",rand);
		nset = 1;
	}
	
	if(n4>9 && nset == 0){
		player.SetVar("Num_Array_4",rand);
		nset = 1;
	}
	
	if(n5>9 && nset == 0){
		player.SetVar("Num_Array_5",rand);
		nset = 1;
	}
	
	if(n6>9 && nset == 0){
		player.SetVar("Num_Array_6",rand);
		nset = 1;
	}

	if(n7>9 && nset == 0){
		player.SetVar("Num_Array_7",rand);
		nset = 1;
	}
	
	if(n8>9 && nset == 0){
		player.SetVar("Num_Array_8",rand);
		nset = 1;
	}
	
	if(n9>9 && nset == 0){
		player.SetVar("Num_Array_9",rand);
		nset = 1;
	}
	
	if(n10>9 && nset == 0){
		player.SetVar("Num_Array_10",rand);
		nset = 1;
	}
	
	player.SetVar("Layer_Show",rand);
}

window.Script36 = function()
{
  var player = GetPlayer();
	
	Txt_CRN_A = player.GetVar("Txt_CRN_A");
	Txt_CRN_B = player.GetVar("Txt_CRN_B");
	Txt_CRN_C = player.GetVar("Txt_CRN_C");
	Txt_CRN_D = player.GetVar("Txt_CRN_D");
	QuestionNumber = player.GetVar("Layer_Show");
 	//QuestionNumber = 0;
	
	var Date_List = new Array("1234-5678-9012-3456",
								"2345-6789-0123-4567",
								"3456-7890-1234-5678",
								"4567-8901-2345-6789",
								"5678-9012-3456-7890",
								"6789-0123-4567-8901",
								"7890-1234-5678-9012",
								"8901-2345-6789-0123",
								"9012-3456-7890-1234",
								"0123-4567-8901-2345",
								"1234-5678-9012-3456",
								"2345-6789-0123-4567",
								"3456-7890-1234-5678",
								"4567-8901-2345-6789",
								"5678-9012-3456-7890",
								"6789-0123-4567-8901",
								"7890-1234-5678-9012",
								"8901-2345-6789-0123",
								"9012-3456-7890-1234",
								"0123-4567-8901-2345")




	txt_correct_CRN = Txt_CRN_A.concat("-", Txt_CRN_B, "-", Txt_CRN_C, "-", Txt_CRN_D);
	
	if(txt_correct_CRN == Date_List[QuestionNumber]){		
		int_correct = 1;
		player.SetVar("Int_Correct",int_correct);		
	}else{
		int_correct = 0;
		player.SetVar("Int_Correct",int_correct);		
	}

}

window.Script37 = function()
{
          var player = GetPlayer();

//Total time;
Int_Timer = player.GetVar("Num_Timer");

var Time_Min = Math.floor(Int_Timer / 60);  
var Time_Sec = Int_Timer % 60;

	
if(Time_Sec<10){
	String_Time_Sec = "0".concat(Time_Sec);
	Num_Timer_Sec_Str = String_Time_Sec;
}else{
	String_Time_Sec = Time_Sec;
}	
	
//console.log(Time_Sec)

/*player.SetVar("Num_Timer_Min",Time_Min);
player.SetVar("Num_Timer_Sec",Time_Sec);
player.SetVar("Num_Timer_Sec_Str",String_Time_Sec);*/

Str_Time_Min = Time_Min.toString();
TMS_Time = Str_Time_Min.concat(":", String_Time_Sec);
//alert(TMS_Time);
player.SetVar("TMS_Total_Time_Consume",TMS_Time);	


//Get Score;
Level_1_Score = player.GetVar("Num_Level_1_Score");
Level_2_Score = player.GetVar("Num_Level_2_Score");

Total_Score = Level_1_Score + Level_2_Score;	
	
//Get Total Score;
//player.SetVar("Num_Level_Total_Score",Total_Score);
//end Get Total Score;

//console.log(Total_Score);
	
//Get Percentage;

if(Total_Score>0){
	Total_Score /= 40;
	Total_Score *= 100;
}

player.SetVar("TMS_Total_Score_Percent",Total_Score);

}

window.Script38 = function()
{
      var player = GetPlayer();

//Total time;
Int_Timer = player.GetVar("Num_Timer");

var Time_Min = Math.floor(Int_Timer / 60);  
var Time_Sec = Int_Timer % 60;

	
if(Time_Sec<10){
	String_Time_Sec = "0".concat(Time_Sec);
	Num_Timer_Sec_Str = String_Time_Sec;
}else{
	String_Time_Sec = Time_Sec;
}	
	
//console.log(Time_Sec)

player.SetVar("Num_Timer_Min",Time_Min);
player.SetVar("Num_Timer_Sec",Time_Sec);
player.SetVar("Num_Timer_Sec_Str",String_Time_Sec);
	


//Get Score;
Level_1_Score = player.GetVar("Num_Level_1_Score");
Level_2_Score = player.GetVar("Num_Level_2_Score");

Total_Score = Level_1_Score + Level_2_Score;	
	
//Get Total Score;
player.SetVar("Num_Level_Total_Score",Total_Score);
//end Get Total Score;

//console.log(Total_Score);
	
//Get Percentage;

if(Total_Score>0){
	Total_Score /= 40;
	Total_Score *= 100;
}

player.SetVar("Num_Level_Total_Percent",Total_Score);
//End get Percentage;

//console.log(Total_Score);


}

};
