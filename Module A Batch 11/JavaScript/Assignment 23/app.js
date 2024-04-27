document.addEventListener("DOMContentLoaded", function () {
  var timer;
  var minutes = 0;
  var seconds = 0;
  var milliseconds = 0;
  var running = false;

  function startTimer() {
    running = true;
    timer = setInterval(updateTime, 10);
  }

  function stopTimer() {
    running = false;
    clearInterval(timer);
  }

  function resetTimer() {
    running = false;
    clearInterval(timer);
    minutes = seconds = milliseconds = 0;
    updateTime();
  }

  function updateTime() {
    milliseconds++;
    if (milliseconds >= 100) {
      milliseconds = 0;
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }
    }
    var timeStr =
      padTime(minutes) + ":" + padTime(seconds) + ":" + padTime(milliseconds);
    document.querySelector(".time").textContent = timeStr;
  }

  function padTime(val) {
    return val < 10 ? "0" + val : val;
  }

  document.querySelector(".start").addEventListener("click", function () {
    if (!running) startTimer();
  });

  document.querySelector(".stop").addEventListener("click", function () {
    if (running) stopTimer();
  });

  document.querySelector(".reset").addEventListener("click", function () {
    resetTimer();
  });
});
