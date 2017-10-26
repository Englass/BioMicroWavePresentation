//Can use this, or async and defer.
//<script src=... async/defer></script>
document.addEventListener("DOMContentLoaded", function(){
	title.innerHTML = "Origin of the Myth";
	loadOOM();
});
$(document).ready(function() {
    // all custom jQuery will go here

});
var title = document.getElementById('the_title');

var myImage = document.querySelector("img");
var myImage2 = document.querySelector("img");
var post_body = document.getElementById('the_post');
var oom_nav = document.getElementById('oom');
// oom_nav.onclick = function(){
// 	oom_nav.innerHTML = "blue";
// 	post_body.innerHTML="<img src='src/img/oven2.png'/>";
// 	     	// '<object http-equiv="content-type" type="text/html" charset="utf-8" data="content/origin_of_myth.html" ></object>';
// };

$("#oom").on("click", function() {
	loadOOM();
 });
$("#htw").on("click", function() {
	loadHTW();
 });
$("#sof").on("click", function() {
	loadSOF();
 });
$("#con").on("click", function() {
	loadCON();
 });
// $("#htw").click(function(){
// 	$(this).html("blue ");
// 	post_body.innerHTML = "blue red";
// });
function loadOOM(){
	var $this = $(this);

	$("#the_post").load("content/origin_of_myth.html");
	$("#the_title").html("Origin of the Myth");
}
function loadHTW(){
	var $this = $(this);
	$("#the_post").load("content/how_they_work.html");
	$("#the_title").html("How They Work");
}
function loadSOF(){
	var $this = $(this);
	$("#the_post").load("content/support_of_findings.html");
	$("#the_title").html("Support of Findings");
}
function loadCON(){
	var $this = $(this);
	$("#the_post").load("content/conclusion.html");
	$("#the_title").html("Conclusion");	

}
function changeClickedBackground(ob){
	ob.css({
		'background' : '#ccc'
	});
}
$(".navd").click(function(event){
	// event.target.id.css({
	// 	'background' : '#ccc'
	// });
	var $cur = event.target.id;
	if($cur.endsWith("s")){
		$cur = $cur.slice(0, -1);
	}
	var $this = $($cur);
	changeClickedBackground($this);

});