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

var z = 0;

function progressif(){
	var mydiv = document.getElementsByClassName('ajoutcom')[0];
	if(mydiv.style.height != '150px'){
		mydiv.style.height = z + 'px';     
		z += 10;
		setTimeout('progressif()', 30);
	}
}
