//Can use this, or async and defer.
//<script src=... async/defer></script>
document.addEventListener("DOMContentLoaded", function(){


});

var myImage = document.querySelector("img");
var myImage2 = document.querySelector("img");
myImage.onclick = function(){
var mySrc = myImage.getAttribute('src');
	if(mySrc==='src/img/MythBusters.jpg'){

	} else {
		alert("This is the other img");
	}
}


