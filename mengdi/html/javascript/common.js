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
		$("#login-container .login-frame").css({top:browserHeight/2})
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

	$(".answer-btn").click(function(){
		$("#masker").show().height(browserHeight);
		$(".pop-qa-detail").show()
	})

	$(".close").click(function(){
		$("#masker").hide()
		$(".pop-window").hide()
	})
	console.log(navigator.userAgent.search("MSIE"),navigator.userAgent)
	if(navigator.userAgent.search("MSIE") !== -1 || navigator.userAgent.search("Windows") !== -1){
		console.log(11)
		var ph = '';
		placeholder("input");
		placeholder("textarea");
		function placeholder(elems){
			$(elems).each(function(i){
			if($(this).attr("placeholder") && $(this).attr("type") !== "password"){
				$(this).val($(this).attr("placeholder"))
			}else if($(this).attr("type") == "password"){
				$(this).attr("type","text").attr("data-type","password")
				$(this).val($(this).attr("placeholder"))
			}

			$(this).focus(function(){
				ph = $(this).attr("placeholder");
				if($(this).val() == ph && $(this).attr("data-type") !== "password"){
					$(this).val('')
				}else if($(this).attr('data-type') == "password"){
					$(this).attr("type","password")
					$(this).val('')
				}
			})
			$(this).blur(function(){
				if($(this).val() == '' && $(this).attr("data-type") !== "password"){
					$(this).val(ph)
				}else if($(this).val() == '' && $(this).attr('data-type') == "password"){
					$(this).attr("type","text")
					$(this).val(ph)
				}
				
			})
		})
		}
		
	}

	function isIE(ver){
		var b = document.createElement("b");
		b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->';
		return b.getElementsByTagName('i').length === 1;
	}
})