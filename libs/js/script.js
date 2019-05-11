var userObj = {};

var fName = document.getElementById('fname');
var fnameError = document.getElementById('fnameError');
var fnameCorrect = document.getElementById('fnameCorrect');
var firname = /^[A-Za-z]+$/;
function myName() {
	if(fName.value.match(firname)) {
		fnameError.style.display ='none';
		fnameCorrect.style.display ='block';
		userObj.fName = fName.value;
	    return false;
	} else {
		//fName.value="";
		//fName.value.splice(0, 1);
		fnameCorrect.style.display ='none';
		fnameError.style.display = 'block';
	}
}
var lName = document.getElementById('lname');
var lasname =/^[A-Za-z]+$/;
var lnameError = document.getElementById('lnameError');
function myLName(){
	if(lName.value.match(firname)) {
		lNameError.style.display ='none';
		lNameCorrect.style.display ='block';
		userObj.fName = lName.value;
	    return false;
	} else {
		//lName.value="";
		//lName.value.slice(0, 1);
		lNameCorrect.style.display ='none';
		lNameError.style.display = 'block';
	}
}

	var email = document.getElementById('email');
	var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var emailError = document.getElementById('emailError');
	var emailCorrect = document.getElementById('emailCorrect');
	function myEmail(){
	if(email.value.match(emailRegex)){
		emailError.style.display = 'none';
		emailCorrect.style.display = 'block';
		userObj.email = email.value;
		return false;
	} else {
		//email.value = "";
		emailError.style.display = 'block';
		emailCorrect.style.display = 'none';
		document.getElementById("emailError").innerHTML  = "Email Cannot be Empty and please type correct email.";
	}
}
	var pwd = document.getElementById('password');
	var passwd =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
	var passwordError = document.getElementById('passwordError');
	var passwordCorrect = document.getElementById('passwordCorrect');
	function myPassword(){
		if(pwd.value.match(passwd)){
		passwordError.style.display = 'none';
		passwordCorrect.style.display = 'block';
		userObj.pwd = pwd.value;
		return false;
		}else{
			passwordError.style.display = 'block';
			passwordCorrect.style.display = 'none';
			document.getElementById("passwordError").innerHTML = "Please Enter password between 8 to 15 characters and it <br>should have atleast one number and one special character <br>with an uppercase and lowercase letter.";
		}
	}
	
	var rpwd = document.getElementById('re-password');
	var repasswordError = document.getElementById('repasswordError');
	var repasswordCorrect = document.getElementById('repasswordCorrect');
	var pwd = document.getElementById('password');
	function myRpassword(){
		if (rpwd.value == pwd.value){
			repasswordError.style.display = 'none';
			repasswordCorrect.style.display = 'block';
			userObj.value = pwd.value;
			return false;
		}else{
			repasswordError.style.display = 'block';
			repasswordCorrect.style.display = 'none';
		}
	}
	
	var SecQuestions = [{'monther':'What is your Mothers Name?'},{'father':'What is your Fathers Name?'},{'nickname':'What is your Nick name?'}, {'brother':'What is your brothers or sisters Name?'}]
	var CopySecQuestions = JSON.parse(JSON.stringify(SecQuestions));
	var copy2;
	var bindDropDown = function(obj){	

	
	var SelectVal;
	var index;
	if (obj === undefined){	
		var dropdown = document.getElementById('question1');
	}else if(obj.id === 'question1'){
		var dropdown = document.getElementById('question2');
		dropdown.disabled ='';
		SelectVal = obj.value;
		CopySecQuestions = JSON.parse(JSON.stringify(SecQuestions));
		
		document.getElementById('question3').options.length = 0;
		dropdown.options.length =0;
		
	}else if(obj.id === 'question2'){
		var dropdown = document.getElementById('question3');
				dropdown.disabled ='';
				SelectVal = obj.value;
				dropdown.options.length =0;
				
				//CopySecQuestions = JSON.parse(JSON.stringify(copy2));
}

		CopySecQuestions.forEach(function(item, indx){
			var opt = document.createElement('option');
			
			for(ind in item){
				if (ind == SelectVal){
					index = indx;
				}else{
				opt.value = ind;
				opt.innerHTML =item[ind];
				dropdown.appendChild(opt);
				}
				
			}		
			
		})
		
		
		if (index !== undefined){
			CopySecQuestions.splice(index,1);
				
			}	
			
			dropdown.selectedIndex = -1;
				
	}
	bindDropDown();
	
	//var ValidationError = document.getElementById('ValidationError');
	//function myValidation(){
	//	if (fName.value == ""||lName.value == ""||email.value == ""){
	//		ValidationError.style.display = 'block';
	//	}else{
	//	var window = window.open("#regsuccessful")	
	//	}
	//}
	var ids=["mother", "father", "nicname", "brother"];
    var dropDown = document.getElementById("roleSel");

    dropDown.onchange = function cbx(){
    for(var x = 0; x < ids.length; x++){   
        document.getElementById(ids[x]).style.display="block";``
    }    
    document.getElementById(this.value).style.display = "none";
}