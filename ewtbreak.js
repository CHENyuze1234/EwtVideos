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
