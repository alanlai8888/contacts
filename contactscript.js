var names = document.getElementById("name");
var show = document.getElementById("show");
var hidden = document.getElementById("hide");
var info1s = document.getElementsByClassName('info1');
var info2s = document.getElementsByClassName('info2');
//"accordion-body collapse" for emails
function dropfunction(){
	document.getElementById("mydropdown").classList.toggle("show");
}
function clickname2(){
	if(hidden.style.display == "none")
		hidden.style.display == "block";
	else{
		hidden.style.display = "none";
	}
}
function showphone_hidemail(){
	var i, j;
	for (i=0; i<info1s.length; i++){
		info1s[i].style.display = 'block';
	}
	for (j=0; j<info2s.length; j++){
		info2s[j].style.display = 'none'; 
	}
}
function showemail_hidephone(){
	var i, j;
	for (i=0; i<info1s.length; i++){
		info2s[i].style.display = 'block';
	}
	for (j=0; j<info2s.length; j++){
		info1s[j].style.display = 'none'; 
	}
}
function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}

function information(type) {
	switch(type){
		case "phone":
			console.log("clicked phone");
			showphone_hidemail();
			break;
		case "email":
			console.log("clicked email");
			showemail_hidephone();
			break;
	}

}