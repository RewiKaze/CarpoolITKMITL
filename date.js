
var tmonth = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];

function GetClock() {
    var d = new Date();
    var nmonth = d.getMonth(), ndate = d.getDate(), nyear = d.getFullYear();


    var clocktext = "วันที่ : " + ndate + " " + tmonth[nmonth] + " " + nyear + "";
    document.getElementById('clockbox').innerHTML = clocktext;
}

GetClock();
setInterval(GetClock, 1000);
