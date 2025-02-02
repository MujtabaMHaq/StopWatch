var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');
var resetBtn = document.getElementById('reset');

var hour = 00;
var minute = 00;
var second = 00;
var count = 00;

startBtn.addEventListener('click', function () {
	timer = true;
	stopWatch();
});

stopBtn.addEventListener('click', function () {
	timer = false;
});

resetBtn.addEventListener('click', function () {
	timer = false;
	hour = 0;
	minute = 0;
	second = 0;
	count = 0;
	document.getElementById('hr').innerHTML = "00";
	document.getElementById('min').innerHTML = "00";
	document.getElementById('sec').innerHTML = "00";
	document.getElementById('count').innerHTML = "00";
});

function stopWatch() {
	if (timer) {
		count++;

		if (count > 99) {
			second++;
			count = 0;
		}

		if (second > 59) {
			minute++;
			second = 0;
		}

		if (minute > 59) {
			hour++;
			minute = 0;
			second = 0;
		}

		var hrString = hour;
		var minString = minute;
		var secString = second;
		var countString = count;

		if (hour < 10) {
			hrString = "0" + hrString;
		}

		if (minute < 10) {
			minString = "0" + minString;
		}

		if (second < 10) {
			secString = "0" + secString;
		}

		if (count < 10) {
			countString = "0" + countString;
		}

		document.getElementById('hr').innerHTML = hrString;
		document.getElementById('min').innerHTML = minString;
		document.getElementById('sec').innerHTML = secString;
		document.getElementById('count').innerHTML = countString;
		setTimeout(stopWatch, 10);
	}
}

startBtn.addEventListener('click', function () {
	timer = true;

	startBtn.setAttribute("disabled", "true")

	stopWatch();
});

stopBtn.addEventListener('click', function () {
	timer = false;

	startBtn.removeAttribute("disabled")
});
resetBtn.addEventListener('click', function () {
	timer = false;

	startBtn.removeAttribute("disabled")
});