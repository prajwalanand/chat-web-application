obj =
{
	xhr: new XMLHttpRequest(),
	init: function()
	{
		obj.xhr.onreadystatechange = obj.getusers;
		obj.xhr.open("GET", "http://localhost/project/getusers.php", true);
		obj.xhr.send();
	},
	getusers: function()
	{
		if(this.readyState == 4 && this.status == 200)
		{
			users = this.responseText.split(",");
			count = 1;
			for(var u in users)
			{
				if(users[u] != localStorage.getItem("user"))
				{
					ui = document.getElementById("usr"+count);
					count++;
					ui.innerHTML = users[u];
				}
			}
			setTimeout(obj.getimgs, 2000);
		}
	},
	getimgs: function()
	{
		count = 1;
		for(var u in users)
		{
			if(users[u] != localStorage.getItem("user"))
			{	
				pp = document.getElementById("img"+count);
				count++;
				pp.src = "http://localhost/project/" + users[u] + ".jpg" + '?' + (new Date()).getTime();
			}
		}
	},
	gotochat: function(e)
	{
		f = document.getElementById(e).innerHTML;
		localStorage.setItem("friend", f);
		location.href = "http://localhost/project/client.html";
	},
	dp: function()
	{
		dpdiv = document.createElement("div");
		dpdiv.id = "dpdiv";
		dpdiv.style = "background-color: white; border: 2px solid black; position: absolute; top: 150px; left: 500px; height: 500px; width: 500px;";
		clos = document.createElement("a");
		clos.href = "#";
		clos.innerHTML = "Close";
		clos.onclick = obj.closeDiv;
		clos.stlye = "position: relative; left: 300px;";
		dpdiv.appendChild(clos);
		br = document.createElement("br");
		dpdiv.appendChild(br);
		br = document.createElement("br");
		dpdiv.appendChild(br);
		cur = document.createElement("img");
		cur.src = "http://localhost/project/" + localStorage.getItem("user") + ".jpg" + '?' + (new Date()).getTime();
		cur.height = "200";
		cur.width = "200";
		cur.id = "cur";
		cur.style = "position: relative; left: 150px;";
		dpdiv.appendChild(cur);
		br = document.createElement("br");
		dpdiv.appendChild(br);
		br = document.createElement("br");
		dpdiv.appendChild(br);
		l = document.createElement("label");
		change = document.createElement("input");
		change.type = "file";
		change.id = "file";
		l.appendChild(change);
		l.innerHTML = "Change pic " + l.innerHTML;
		l.style="position: relative; left: 200px;";
		dpdiv.appendChild(l);
		br = document.createElement("br");
		dpdiv.appendChild(br);
		br = document.createElement("br");
		dpdiv.appendChild(br);
		but = document.createElement("button");
		but.innerHTML = "Upload";
		but.onclick = obj.changePic;
		but.style = "position: relative; left: 210px;";
		dpdiv.appendChild(but);
		document.body.appendChild(dpdiv);
	},
	closeDiv: function()
	{
		dpdiv = document.getElementById("dpdiv");
		document.body.removeChild(dpdiv);
	},
	changePic: function()
	{
		file = document.getElementById("file");
		upload = file.files[0];
		if(upload)
		{
			form = new FormData();
			form.append("user", localStorage.getItem("user"));
			form.append("file", upload);
			obj.xhr.onreadystatechange = obj.picUploaded;
			obj.xhr.open("POST", "http://localhost/project/changedp.php", true);
			obj.xhr.send(form);
			document.getElementById("cur").src += ('?' + (new Date()).getTime());
		}
	},
	picUploaded()
	{
		if(this.readyState == 4 && this.status == 200)
		{
			this.abort();
		}
	},
	logout: function()
	{
		p = document.createElement("p");
		p.style = "background-color: white; position: absolute; top: 300px; left: 450px; font-size: 30px;";
		p.innerHTML = "Logged out. Click <a href=\"http://localhost/project/homepage/index.html\">here</a> to go back.";
		document.body.innerHTML = "";
		document.body.appendChild(p);
	}
};