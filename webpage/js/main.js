;$(function(){
	'use strict';
	
	var sidebar=$("#sidebar"),//选择侧栏
	    mask=$(".mask"),
	    backButton=$(".back-to-top"),
	    sidebar_trigger=$("#sidebar_trigger"),
	    know_me=$(".kme"),
	    icons=$(".icon-group .icon"),
	    me=$("#target"),
	    html=$('html,body'),
	    l1=$('nav ul li:eq(1)'),
	    l2=$('nav ul li:eq(2)');
	know_me.on("mouseover",function(){
		know_me.css("cursor" , "pointer");
		know_me.css("background","rgba(70, 184, 229, 0.9)");
	});
	know_me.on("mouseout",function(){
		know_me.css("background","rgba(70, 184, 229, 0.6)");
	});
	know_me.on("click",function(){
		html.animate({scrollTop:$('.gray-section').offset().top},800)
	});
	me.
	
	l1.on("click",function(){
		html.animate({scrollTop:$('.gray-section').offset().top},800)
	});	
	l2.on("click",function(){
		html.animate({scrollTop:$('.purplr-section').offset().top},800)
	});	
	function showSideBar()
	{
		mask.fadeIn();
		sidebar.css('right',0);
	}
	function hideSideBar()
	{
		mask.fadeOut();
		sidebar.css('right',-sidebar.width());
	}
	sidebar_trigger.on('click',showSideBar)
	mask.on('click',hideSideBar)
	backButton.on('click',function()
	{
		html.animate({
			scrollTop:0
		},800)
	})
	$(window).on('scroll',function(){
		if ($(window).scrollTop()>$(window).height()){
			backButton.fadeIn();
		}
		else{
			backButton.fadeOut();
		}
	})
	$(window).trigger('scroll');
})
var username=document.getElementById("username");
	username.addEventListener('blur',rename);
function rename(){
	var rule=/^1(3|5|6|7|8|9)\d{9}$/i;
	usernametips=document.getElementById("username-tips");
	if (!(rule.test(username.value))){
		usernametips.innerHTML="手机号不正确";
	}
	else
		usernametips.innerHTML=null;
}
	