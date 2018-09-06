var arr=[];
var flag=true;
$(function(){
	

});var send=$("#send"),//发送按钮
		sreste=$("#reste"),//清除按钮
		info=$("#info"),//输入框
		img=$(".fakeimg"),//图片
		heights=img.height(),//div高度
		widths = img.width();//div宽度
		sreste.on("click",function(){
			$(".dm-show").empty();
			arr=[];
		})
		function sends(){
			infos=info.val();//获取输入框的值
			arr.push(infos);
			
			var texts=$("<div></div>");
			texts.text(infos);//把文字写入div中
			$(".dm-show").append(texts);//把文字div放到
			info.val("").focus();
			move(texts);

		}
		var topMin = $(".row").offset().top-200;//计算div到HTML顶部的高度
		var topMax = heights+topMin;//div底部到HTML顶部高度
		var _top = topMin;//弹幕出现的位置
		var move = function(obj){
			obj.css({
				display: "inline",
				position:"absolute"
			})
			_top = _top + 50;
		var _left = widths - obj.width();
	    if (_top > (topMax+50)) {
	      _top = topMin;
	    }
	    obj.css({
		   
		    left: _left,
		    top: _top,
		    color: getrandomcolor()
	    });
	    var time = 20000 + 10000 * Math.random();
	    obj.animate({
	      left: "-" + _left + "px"
	    }, time, function() {
	      obj.remove();
	    });
	  }
		var getrandomcolor = function(){
			return '#' + (function(h) {
	      return new Array(7 - h.length).join("0") + h
	    })((Math.random() * 0x1000000 << 0).toString(16))
	}
	
	var autorun = function(){
		if (arr.length > 0){
			var n =Math.floor(Math.random() * arr.length + 1)-1;
			var texts=$("<div>"+ arr[n] +"</div>");
			$(".dm-show").append(texts);
			move(texts);
		}
		setTimeout(autorun, 100);
	}
	send.on("click",sends);
	autorun();