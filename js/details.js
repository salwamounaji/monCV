function showDetails(x){

	var divid=document.getElementById(x);

		var visibles = document.getElementsByClassName("visible");

		[].forEach.call(visibles, function (i) {i.classList.remove("visible");
			if(i!==divid)
			i.style.display="none";
});

		if(divid.style.display == 'none'){
		divid.classList.add("visible");
		divid.style.display='inline';
}
		else{

		divid.style.display='none';
		}
}


function masquer_div(id){

if( document.getElementById(id).style.display == "none"){

   document.getElementById(id).style.display = "block";
                                                        }
else{
     document.getElementById(id).style.display = "none";
    }
}

function SizeProgress(multiple) {
	var divid=document.getElementById(multiple);
	var list = document.getElementsByClassName("listeformation");
	[].forEach.call(list, function (i) {i.classList.remove("listeformation");
	if(i!==divid)
	i.style.display="none";
	});
	if(divid.style.display == 'none'){
	divid.classList.add("listeformation");
	divid.style.display='inline';
	}
	else{
	divid.style.display='none';
	}	
	var myAwesomeVar = 2;
	//let timerId = setInterval(function (){var liste = document.getElementsByClassName("p2");liste[0].style.fontSize= myAwesomeVar++ + "px";}, 50);

	//let timerId = setInterval(function (){[].forEach.call(list, function (i) {i.style.fontSize= myAwesomeVar + "px";myAwesomeVar++;})}, 150);

	let timerId = setInterval(function (){var i=0;list[i].style.fontSize= myAwesomeVar++ + "px";i++;}, 70);
	// after 2 seconds stop
	setTimeout(() => { clearInterval(timerId);}, 1000);
}



