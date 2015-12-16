$(function(){
	var nowGroup="",groupArr=[];
	$(".vote-list li.group").each(function(n){
		$(this).hover(function(){
			nowGroup=$(this).attr("class").split(" ");
			groupArr.push(nowGroup[1]);
			if(groupArr.length<2){
				$("."+groupArr[0]+" .group-description").fadeIn()
				$("."+groupArr[0]+" .left-line").show()
			}else if(groupArr[0]!=groupArr[1]){
				$("."+groupArr[1]+" .group-description").fadeIn("slow")
				$("."+groupArr[0]+" .group-description").fadeOut()
				$("."+groupArr[1]+" .left-line").show()
				$("."+groupArr[0]+" .left-line").hide()
			}
		},function(){
			if(groupArr.length<2&&groupArr.length>1){
				$("."+nowGroup[1]+" .group-description").fadeOut()
				$("."+nowGroup[1]+" .left-line").hide()
			}
			if(groupArr.length>1){
				groupArr.shift()
			}
		})
	})
	$(".group").each(function(i){
		$(this).attr("id","item-"+i)
	})
	$(".group").hover(function(){
		var obj=$(this).attr("id");
		test(obj)
	})
	function test(nowline){
		$("#"+nowline+" em").each(function(val){
			var obj=$(this);
			var v=0,vv=0,vvv=0,vvvv,statu="";
			obj.click(function(){

				v=(val+1)*5;
				vv=(v/10).toFixed(1);
				vvv=vv.split('.');
				statu=obj.parent().attr("statu");

				$("#"+nowline+" .red-star").width(v+"%")
				$("#"+nowline+" .num").html(vvvv)
				$("#"+nowline+" input[type=hidden]").val(vv)
				$("#"+nowline+" .num").css({color:'#ea878b'})
				if(statu=="true"){
					obj.parent().attr('statu','false')
				}
			})
			obj.hover(function(){
				v=(val+1)*5;
				vv=(v/10).toFixed(1);
				vvv=vv.split('.');
				statu=obj.parent().attr("statu");
				var lastVal=$("#"+nowline+" input[type=hidden]").val();

				changeTag(vv,nowline);
				
				if(vv==10){
					vvvv=10;
				}else{
					vvvv=vvv[0]+'<strong>.'+vvv[1]+'</strong>';
				}
				$("#"+nowline+" .red-star").width(v+"%")
				$("#"+nowline+" .num").html(vvvv)
				$("#"+nowline+" .num").css({color:'#e2e2e2'})

			},function(){
				var statu=obj.parent().attr("statu"),
					lastVal=$("#"+nowline+" input[type=hidden]").val();

				if(statu=="true"){
					$("#"+nowline+" .red-star").width("1%")
					$("#"+nowline+" .tag").css({background:"none"})
				}else{
					$("#"+nowline+" .num").css({color:'#ea878b'})
				}
				if($("#"+nowline+" input[type=hidden]").val()){
					$("#"+nowline+" .red-star").width(lastVal*10+"%")
					$("#"+nowline+" .num").html(formatNum(lastVal))
					changeTag(lastVal,nowline)
				}else{
					$("#"+nowline+" .num").html("")
				}
				
			})
		})	
	}
	$(".name-list").each(function(i){
		$(".name-list:eq("+i+") li:eq(0)").css({background:"#82ca9d"})
		$(".name-list:eq("+i+") li:eq(1)").css({background:"#438cca"})
		$(".name-list:eq("+i+") li:eq(2)").css({background:"#855fa8"})
		$(".name-list:eq("+i+") li:eq(3)").css({background:"#f68e55"})
		$(".name-list:eq("+i+") li:eq(4)").css({background:"#f06ea9"})
	})
	function formatNum(val){
		var endVal=[]
		endVal=val.split('.');
		if(val==10){
			return Number(val);
		}else{
			return endVal[0]+'<strong>.'+endVal[1]+'</strong>';
		}
	}
	function changeTag(val,nowline){
		if(val>8){
			$("#"+nowline+" .tag").html("优秀")
			$("#"+nowline+" .tag").css({background:"#76b643"})
		}else if(val>6){
			$("#"+nowline+" .tag").html("良好")
			$("#"+nowline+" .tag").css({background:"#cccf2b"})
		}else if(val>4){
			$("#"+nowline+" .tag").html("一般")
			$("#"+nowline+" .tag").css({background:"#fdd304"})
		}else if(val>2){
			$("#"+nowline+" .tag").html("较差")
			$("#"+nowline+" .tag").css({background:"#de923d"})
		}else{
			$("#"+nowline+" .tag").html("极差")
			$("#"+nowline+" .tag").css({background:"#b44d4c"})
		}
	}
})