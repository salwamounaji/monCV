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

function SizeProgress(x) {

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

	var y = 2;
	

	let timerId = setInterval(function (){var i=0;visibles[i].style.fontSize= y++ + "px";i++;}, 70);

	setTimeout(() => { clearInterval(timerId);}, 1000);
}

var levels = {
  PHP : 4,
  JS :2,
  JAVAEE :4,
     HTML :5,
    CSS :5
    
};

for (field in levels) {
  var stars = document.getElementsByClassName(field).item(0);
  var children = stars.children;
  for (var i = 0; i < levels[field]; i++) {
    var star = children.item(i);
    star.className = "fa fa-star";
  }
}




