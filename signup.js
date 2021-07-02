obj2 =
{
	init: function()
	{
		passbox = document.getElementById("spwd");
		passbox.onkeypress = obj2.checkKey;
	},
	checkKey: function(e)
	{
		if(e.keyCode == 13)
		{
			obj2.signup();
		}
	},
	xhr: new XMLHttpRequest(),
	user: "",
	signup: function()
	{
		userbox = document.getElementById("susr");
		obj2.user = userbox.value;
		userbox.value = "";
		passbox = document.getElementById("spwd");
		pass = passbox.value;
		passbox.value = "";
		if((obj2.user == "") || (pass == ""))
		{
			
		}
		else
		{
			obj2.xhr.onreadystatechange = obj2.verify;
			obj2.xhr.open("POST", "http://localhost/project/signup.php", true);
			obj2.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			obj2.xhr.send("usr="+obj2.user+"&pwd="+pass);
		}
	},
	verify: function()
	{
		if(this.readyState == 4 && this.status == 200)
		{
			if(this.responseText == 1)
			{
				out = document.getElementById("serror");
				out.innerHTML = "Sign up successful!<br/>";
				out.style.color = "blue";
				localStorage.setItem('user', obj2.user);
				out.innerHTML += "Click <a href=\"http://localhost/project/list/index.html\"> here</a> to continue";
			}
			else
			{
				out = document.getElementById("serror");
				out.innerHTML = this.responseText + "<br/>Sign up failed; retry";
				out.style.color = "red";
			}
		}
	}
};