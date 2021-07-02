obj =
{
	init: function()
	{
		passbox = document.getElementById("pwd");
		passbox.onkeypress = obj.checkKey;
	},
	checkKey: function(e)
	{
		if(e.keyCode == 13)
		{
			obj.signup();
		}
	},
	xhr: new XMLHttpRequest(),
	user: "",
	signup: function()
	{
		userbox = document.getElementById("usr");
		obj.user = userbox.value;
		userbox.value = "";
		passbox = document.getElementById("pwd");
		pass = passbox.value;
		passbox.value = "";
		if((obj.user == "") || (pass == ""))
		{
			
		}
		else
		{
			obj.xhr.onreadystatechange = obj.verify;
			obj.xhr.open("POST", "http://localhost/project/login.php", true);
			obj.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			obj.xhr.send("usr="+obj.user+"&pwd="+pass);
		}
	},
	verify: function()
	{
		if(this.readyState == 4 && this.status == 200)
		{
			if(this.responseText == 1)
			{
				out = document.getElementById("error");
				out.innerHTML = "Login successful!<br/>";
				out.style.color = "blue";
				localStorage.setItem('user', obj.user);
				out.innerHTML += "Click <a href=\"http://localhost/project/list/index.html\"> here</a> to continue";
			}
			else
			{
				out = document.getElementById("error");
				out.innerHTML = this.responseText + "<br/>Login failed; retry<br/>";
				out.style.color = "red";
			}
		}
	}
};