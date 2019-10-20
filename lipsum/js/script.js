
// function check(){
// 	if(checkbox.checked){
// 		menu.style.display="block";
// 	}else{
// 		console.log('no');
// 	}
// }

var icon;
var check;
var nav;

function checked(){
	icon = document.getElementById('burger-menu');
	check = document.getElementById('toggle');
	nav =document.getElementById('top-menu');

	if(check.checked){
		nav.style.display='';
	}else{
		nav.style.display='block';
	}
}

