	var sel_email = 0;
	var sel_phone = 1;

$( document ).ready(function () {

	$("a").click(function () {  
		var that = $(this);  
		toggle_visibility();
		function toggle_visibility(){
			var k,l;
			var info1s = document.getElementsByClassName('info1');
			var info2s = document.getElementsByClassName('info2');

			$(function(){
				var datacolumn = $(that).parent().siblings(); 
				var i, j, index;
				datacolumn.children().children().each(function(){
					//phone selected
					if(sel_phone == 1){
						if($(this).hasClass('info1') && ($(this).siblings().is(':visible'))){
							//hide
							$(this).siblings().css('display', 'none');
						}
						else if($(this).hasClass('info1') && ($(this).siblings().is(':hidden'))){
							//show
							$(this).siblings().css('display', 'block');
						}
					}
					//email selected
					if(sel_email == 1){
						if($(this).hasClass('info2') && ($(this).siblings().is(':visible'))){
							//hide
							$(this).siblings().css('display', 'none');
						}
						else if($(this).hasClass('info2') && ($(this).siblings().is(':hidden'))){
							//show
							$(this).siblings().css('display', 'block');
						}
					}
				}) 
			});
		}
	});
})
function showphone_hidemail(){
	var info1s = document.getElementsByClassName('info1');
	var info2s = document.getElementsByClassName('info2');
	var i, j;
	for (i=0; i<info1s.length; i++){
		info1s[i].style.display = 'block';
	}
	for (j=0; j<info2s.length; j++){
		info2s[j].style.display = 'none'; 
	}
}
function showemail_hidephone(){
	var info1s = document.getElementsByClassName('info1');
	var info2s = document.getElementsByClassName('info2');
	var i, j;
	for (i=0; i<info1s.length; i++){
		info2s[i].style.display = 'block';
	}
	for (j=0; j<info2s.length; j++){
		info1s[j].style.display = 'none'; 
	}
}
function information(type) {
	switch(type){
		case "phone":
			sel_phone = 1;
			sel_email = 0; 
			showphone_hidemail();
			break;
		case "email":
			sel_email = 1;
			sel_phone = 0;
			showemail_hidephone();
			break;
	}
}
