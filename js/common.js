// 返回顶部
function backTop (btn) {
	var _btn = $(btn);
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1000) {
			_btn.fadeIn();
		} else {
			_btn.fadeOut();
		}
	});
	_btn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
}