var ewtvideos = document.getElementsByTagName("video");
var ewtvideo = ewtvideos[0];
var video_rate = ewtvideo.playbackRate;
var num_cycle = Math.ceil(ewtvideo.duration / 4 / video_rate);
var num_now = 0;
function checkgo(){
	console.log("Running");
	ewtvideos = document.getElementsByTagName("video");
	ewtvideo = ewtvideos[0];
	if(ewtvideo.paused == true){
		ewtvideo.play();
		console.log("Playing");
	}
	if(num_now <= num_cycle){
		num_now++;
		_setTimeout(checkgo,4000);
	}
	else{
		alert("Video is completed!视频看完了！");
	}
}
function fuch(){
	_setTimeout(checkgo,4000);
}
function _setTimeout(callback,timeout){
	console.log("Timing");
    var args = Array.prototype.slice.call(arguments,2);
    var _cb = function(){
        callback.apply(null,args);
    }
    setTimeout(_cb,timeout);
}

fuch();

//----------我上面是代码------------
/*
《e网通刷视频》
注：这个代码就是瞎写的，虽然有用，也的确可以刷进度。
使用说明:
把上面的所有代码一次性复制到电脑浏览器F12的控制台里(不会的请自行百度),回车。代码会自动执行。
自动16倍速。 :)
然后就不用管了，可以开很多个同时刷 :)
记住看一下标签栏的提示，看完会提示你，会有一个小点。
已通过Microsoft Edge测试。
注：出问题找我。
另注：GitHub上有大佬写了更加完备的：https://github.com/lc6464/ewtPrograms。
*/