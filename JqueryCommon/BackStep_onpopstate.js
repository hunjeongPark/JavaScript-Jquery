//Jquery - HTML5, Chrome, FireFox, Edge .... > onpopstate Backstep Controll To current Page
window.onpopstate = function () {
	var prevUrl = location.href;
	alert(prevUrl);

	//Controll To CurrentPage And Use Id For Step div match
	if(prevUrl.indexOf("template_list") >= 0 && $("#step1").hasClass("hide")) {
		UIHandler.showStep1();
	} else {
		history.back();
	}
};

// UIHandler Controll show step
//step1,2,3,4.... Step Show the One Page Jquery Script
let UIHandler = {
	showStep1 : function() {
		this.hideAllStep();
		$("#step1").removeClass("hide");
	},
	showStep2 : function() {
		this.hideAllStep();
		$("#step2").removeClass("hide");
	},
	hideAllStep : function() {
		$(".step").addClass("hide");
	}
}

//history.pushstate(state, title, url) > 뒤로가기 클릭 시 현재 페이지의 window.onpopstate를 호출하도록 지정
history.pushstate(null, null, location.href); // => 제자리 호출을 위하여 현재 location.href URL을 넣어줍니다. 호출 위치는 뒤로가기 클릭을 하는 순간에 위치시켜줍니다.
