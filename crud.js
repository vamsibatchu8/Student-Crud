
let id="no";
let pid= "no";
let did = "no";
let eid = "no";
//localStorage.clear();
selectData();
function manageData(){
	document.getElementById('msg').innerHTML="";
	let name=document.getElementById('name').value;
	let phone=document.getElementById('phone').value;
	let dob=document.getElementById('dob').value;
	let mail=document.getElementById('mail').value;
	if(name==''){
		//document.getElementById('msg').innerHTML='Please enter your name!';
		alert("Name cannot be empty!");
		return
	}else{
		console.log(id);
		if(id=='no'){
			let narr=getCrudData();
			if(narr==null){
				let data=[name];
				setCrudData(data);
			}else{
				narr.push(name);
				setCrudData(narr);
			}
			//document.getElementById('msg').innerHTML='Data added';
		}else{
			let narr=getCrudData();
			narr[id]=name;
			setCrudData(narr);
			//document.getElementById('msg').innerHTML='Data updated';
		}
		document.getElementById('name').value='';
		selectData();
	}

	// phone number 
	if(phone==''){
		alert("Number cannot be empty!");
		return;
	}else{
		console.log(id);
		if(pid=='no'){
			let pharr=getCrudDataph();
			if(pharr==null){
				let data1=[phone];
				setCrudDataph(data1);
			}else{
				pharr.push(phone);
				setCrudDataph(pharr);
			}
			//document.getElementById('msg').innerHTML='Data added';
		}else{
			let pharr=getCrudDataph();
			pharr[pid]=phone;
			setCrudDataph(pharr);
			//document.getElementById('msg').innerHTML='Data updated';
		}
		document.getElementById('phone').value='';
		selectData();
	}
	
	// date of birth

	if(dob==''){
		document.getElementById('msg').innerHTML='Please enter a date!';
		//alert("Form can not have empty fields");
	}else{
		console.log(id);
		if(did=='no'){
			let darr=getCrudDatad();
			if(darr==null){
				let data2=[dob];
				setCrudDatad(data2);
			}else{
				darr.push(dob);
				setCrudDatad(darr);
			}
			//document.getElementById('msg').innerHTML='Data added';
		}else{
			let darr=getCrudDatad();
			darr[did]=dob;
			setCrudDatad(darr);
			//document.getElementById('msg').innerHTML='Data updated';
		}
		document.getElementById('dob').value='';
		selectData();
	}
		
	// Email
	// var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    // if(mail.value.match(mailformat)){}
    // else
    // {
    //   alert("You have entered an invalid email address!");
    //   return
    // }
	if(mail==''){
		document.getElementById('msg').innerHTML='Please enter a mail id!';
		//alert("Form can not have empty fields");
	}else{
		console.log(id);
		if(eid=='no'){
			let earr=getCrudDataem();
			if(earr==null){
				let data3=[mail];
				setCrudDataem(data3);
			}else{
				earr.push(mail);
				setCrudDataem(earr);
			}
			//document.getElementById('msg').innerHTML='Data added';
		}else{
			let earr=getCrudDataem();
			earr[eid]=mail;
			setCrudDataem(earr);
			//document.getElementById('msg').innerHTML='Data updated';
		}
		document.getElementById('mail').value='';
		selectData();
	}
}

function selectData(){
	let narr=getCrudData();
	let pharr = getCrudDataph();
	let darr = getCrudDatad();
	let earr = getCrudDataem();
	if(narr!=null && pharr!=null && darr!=null && earr!=null){
		let html='';
		let sno=1;
		for(let k in narr, pharr, darr, earr){
			html=html+`<tr><td>${sno}</td><td>${narr[k]}</td><td>${pharr[k]}</td><td>${darr[k]}</td><td>${earr[k]}</td><td><a href="javascript:void(0)" onclick="editData(${k})">Edit</a>&nbsp;<a href="javascript:void(0)" onclick="deleteData(${k})">Delete</a></td></tr>`;
			sno++;
		}
		document.getElementById('root').innerHTML=html;
		
	}
}

function editData(rid){
	id=rid;
	pid=rid;
	did=rid;
	eid=rid;
	let narr=getCrudData();
	let pharr=getCrudDataph();
	let darr =getCrudDatad();
	let earr =getCrudDataem();
	document.getElementById('name').value=narr[rid];
	document.getElementById('phone').value=pharr[rid];
	document.getElementById('dob').value=darr[rid];
	document.getElementById('mail').value=earr[rid];
}

function deleteData(rid){
	let narr=getCrudData();
	let pharr=getCrudDataph();
	let darr=getCrudDatad();
	let earr=getCrudDataem();
	narr.splice(rid,1);
	setCrudData(narr);
	pharr.splice(rid,1);
	setCrudDataph(pharr);
	darr.splice(rid,1);
	setCrudDatad(darr);
	earr.splice(rid,1);
	setCrudDataem(earr);
	selectData();
}

function getCrudData(){
	let narr=JSON.parse(localStorage.getItem('crud'));
	return narr;
}

function setCrudData(narr){
	localStorage.setItem('crud',JSON.stringify(narr));
}

function getCrudDataph(){
	let pharr=JSON.parse(localStorage.getItem('crud1'));
	return pharr;
}

function setCrudDataph(pharr){
	localStorage.setItem('crud1',JSON.stringify(pharr));
}

function getCrudDatad(){
	let darr=JSON.parse(localStorage.getItem('crud2'));
	return darr;
}

function setCrudDatad(darr){
	localStorage.setItem('crud2',JSON.stringify(darr));
}

function getCrudDataem(){
	let earr=JSON.parse(localStorage.getItem('crud3'));
	return earr;
}

function setCrudDataem(earr){
	localStorage.setItem('crud3',JSON.stringify(earr));
}

