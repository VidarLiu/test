$(function(){
	var browserHeight = window.document.documentElement.clientHeight;
	$("#hongbao").height(browserHeight);
	$(".hongbao-open").on("click",function(){
		console.log(1)
		$("#masker").height(browserHeight)
		$("#masker").show()
	})
})