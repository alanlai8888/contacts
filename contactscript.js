var names = document.getElementById("name");
var show = document.getElementById("show");
var hidden = document.getElementById("hide");

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
function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}
$('#name').click(function(){
	if(hidden.style.display == "none")
		hidden.style.display == "block";
	else{
		hidden.style.display = "none";
	}
});
$("#phone").click(function(){
})

$("#email").click(function(e){
})