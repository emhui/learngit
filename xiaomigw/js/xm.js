var jBtn = document.getElementsByClassName('J_tips')[0];
var count = 0;
// 找到所有btn-biglarge属性的按钮
var btns = document.getElementsByClassName('btn-biglarge');
setInterval(function(){
	// 方法一：
	// var btn = document.getElementsByClassName('J_proBuyBtn')[0];
	
	// 方法二：	该属性的最后一个按钮就是
	var  btn = document.getElementsByClassName('btn-biglarge')[btns.length-1];
	// 选择白色版本
	document.getElementsByClassName('btn-biglarge')[4].click();
	var flag = true ;
	// 检测该按钮是否存在
	if((btn!=null)&&(flag)){
		// 点击购买按钮
		btn.click();
		flag = false;
	}
	// 测试是否可用
	if(jBtn!=null){
		jBtn.innerHTML='小米'+(btns.length-1)+'怒点击了' + (count++) + '次' ;
	}
	
},0);