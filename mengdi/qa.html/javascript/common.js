$(function(){

	var browserHeight = document.documentElement.clientHeight,
		contentHeight = browserHeight - $(".header").height() - $(".tab-frame").height();

	$("#left-bar").height(browserHeight)
	$("#right-container").height(browserHeight)
	$(".content-list").height(contentHeight)
	console.log($(".tab-frame").height())

	window.onresize = function(){
		browserHeight = document.documentElement.clientHeight;
		contentHeight = browserHeight - $(".header").height() - $(".tab-frame").height();

		$("#masker").height(browserHeight);
		$("#left-bar").height(browserHeight)
		$("#right-container").height(browserHeight)
		$(".content-list").height(contentHeight)
	}

	$(".qa-list li").each(function(i){
		$(this).click(function(){
			$("#masker").show().height(browserHeight);
			$("#pop-window").show()
		})
	})

	$(".close").click(function(){
		$("#masker").hide()
		$("#pop-window").hide()
	})
})