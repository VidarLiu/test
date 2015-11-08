$(function(){

	var browserHeight = document.documentElement.clientHeight,
		contentHeight = browserHeight - $(".header").height() - $(".tab-frame").height();

	$("#left-bar").height(browserHeight)
	$("#right-container").height(browserHeight)
	$(".content-list").height(contentHeight)
	$("#login-container").height(browserHeight)
	$("#login-container .login-frame").css({top:browserHeight/2,marginTop:-$("#login-container .login-frame").height()/2-60})

	window.onresize = function(){
		browserHeight = document.documentElement.clientHeight;
		contentHeight = browserHeight - $(".header").height() - $(".tab-frame").height();

		$("#masker").height(browserHeight);
		$("#left-bar").height(browserHeight)
		$("#right-container").height(browserHeight)
		$(".content-list").height(contentHeight)
		$("#login-container").height(browserHeight)
		$("#login-container .login-frame").top(browserHeight/2)
	}

	$(".qa-list li").each(function(i){
		$(this).click(function(){
			$("#masker").show().height(browserHeight);
			$(".pop-qa-detail").show()
		})
	})

	$(".ask-btn").click(function(){
		$("#masker").show().height(browserHeight);
		$(".pop-qa-ask").show().height(560).css({top:"5%"})
	})

	$(".ask-tab span").each(function(i){
		$(this).click(function(){
			$(".ask-tab span").removeClass("current")
			$(this).addClass("current")
			$(".ask-frame").hide()
			$(".ask-frame:eq("+i+")").show()
		})
	})

	$(".close").click(function(){
		$("#masker").hide()
		$(".pop-window").hide()
	})
})