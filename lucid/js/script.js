function validation(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	var valid = false;
	var regEx =/^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/;

	if (name==''){
		document.getElementById("un-name").style.display ="inline";
		return false;
	}

		if (subject==''){
		document.getElementById("un-subj").style.display ="inline";
		return false;
	}


	if (email==""){
		document.getElementById("un-email").style.display ="inline";
		return false;
	}

	else if(regEx.test(email) == false){
		document.getElementById("un-email").innerHTML= "** invalid email";
		document.getElementById("un-email").style.display="inline";
		return false;
	}

	else{
		valid = true;
		console.log("success");
		alert("success")
	}

}
