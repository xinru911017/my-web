window.onload = function () {
  startTime();
};

today = new Date();
dateValue =
  today.getYear() +
  1900 +
  "年" +
  (today.getMonth() + 1) +
  "月" +
  today.getDate() +
  "日";
window.alert(
  "\n👋👋👋歡迎光臨👋👋👋\n\n XinRu's 個人網頁\n\n今天是" + dateValue + "🔎"
);

function startTime() {
  var today = new Date();
  var hh = today.getHours();
  var mm = today.getMinutes();
  var ss = today.getSeconds();
  mm = checkTime(mm);
  ss = checkTime(ss);
  document.getElementById("clock").innerHTML = hh + ":" + mm + ":" + ss;
  var timeoutId = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
