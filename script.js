function chk() {
  var y = document.getElementById("year").value;
  var m = document.getElementById("month").value;
  var d = document.getElementById("p1");
  var a = '<select name="day" id="day">';
  for (let i = 1; i <= 28; i++) {
    a += `<option value="${i}">${i}</option>`;
  }

  if (y % 4 == 0) {
    a += `<option value="29">29</option>`;
  } else {
    if (
      m == "jan" ||
      m == "march" ||
      m == "may" ||
      m == "july" ||
      m == "aug" ||
      m == "oct" ||
      m == "dec"
    ) {
      a += `<option value="29">29</option>`;
      a += `<option value="30">30</option>`;
      a += `<option value="31">31</option>`;
    } else if (m == "feb") {
    } else {
      a += `<option value="29">29</option>`;
      a += `<option value="30">30</option>`;
    }
  }
  a += "</select>";
  d.innerHTML = a;
}

function print() {
  var y = document.getElementById("year").value;
  var m = document.getElementById("month").value;
  var d = document.getElementById("day").value;
  document.getElementById("p2").innerHTML = `Date : ${d} ${m} ${y}`;
}
