function load() {
    var now = new Date();
    //nowのgettimeメソッドで東京の現在時間
    var timeTokyo = now.getTime();
    var timeUTC = timeTokyo - 8*60*60*1000;
    var cityElement = document.getElementById("city");
    var index = cityElement.selectedIndex;
    var timezone = cityElement.options[index].value;

    //この定義が大事
    var citytime = timeUTC + timezone*60*60*1000;
    now = new Date(citytime);
	
	var cuntoryArray = ["img/America.png", "img/Brazil.png", "img/uk.png", "img/Germany.png", "img/Japan.png"];
	if (cityElement.selectedIndex == 0) document.getElementById("flag").src = cuntoryArray[0];
	if (cityElement.selectedIndex == 1) document.getElementById("flag").src = cuntoryArray[1];
	if (cityElement.selectedIndex == 2) document.getElementById("flag").src = cuntoryArray[2];
	if (cityElement.selectedIndex == 3) document.getElementById("flag").src = cuntoryArray[3];
	if (cityElement.selectedIndex == 4) document.getElementById("flag").src = cuntoryArray[4];
	
/*
	var trendArray = ["http://www.google.co.jp/trends/hottrends/widget?pn=p1&amp;tn=10&amp;h=413","http://www.google.co.jp/trends/hottrends/widget?pn=p1&amp;tn=10&amp;h=413","http://www.google.co.jp/trends/hottrends/widget?pn=p9&amp;tn=10&amp;h=413","http://www.google.co.jp/trends/hottrends/widget?pn=p15&amp;tn=10&amp;h=413","http://www.google.co.jp/trends/hottrends/widget?pn=p4&amp;tn=10&amp;h=413"];

	if (cityElement.selectedIndex == 0) document.getElementById("trend").src = trendArray[0];
	if (cityElement.selectedIndex == 1) document.getElementById("trend").src = trendArray[1];
	if (cityElement.selectedIndex == 2) document.getElementById("trend").src = trendArray[2];
	if (cityElement.selectedIndex == 3) document.getElementById("trend").src = trendArray[3];
	if (cityElement.selectedIndex == 4) document.getElementById("trend").src = trendArray[4];
*/
	
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    var moodElement = document.getElementById("mood");
    var moodArray = ["img/mood7.png", "img/mood5.png", "img/mood11.png", "img/mood6.png", "img/mood3.png", "img/mood9.png"];
    switch(now.getHours()){
    case 8:
    case 9:
    case 10:
    case 11:
        moodElement.innerHTML = "おはよう！";
        document.getElementById("moodphoto").src = moodArray[0];
        //var daytime = document.getElementById("time");
        //    daytiime.classList.removeMany("yellow red green");
       // daytime.classList.add("blue");
        break;
    case 12:
    case 13:
    case 14:
        moodElement.innerHTML = "お昼ご飯をゆっくり食べよう！";
        document.getElementById("moodphoto").src = moodArray[1];
        //var daytime = document.getElementById("time");
        //    daytiime.classList.removeMany("red blue green");
       // daytime.classList.add("yellow");
        break;
    case 15:
    case 16:
    case 17:
    case 18:
        moodElement.innerHTML = "昼の活動時間だよ。";
        document.getElementById("moodphoto").src = moodArray[2];
        //var daytime = document.getElementById("time");
        //    daytiime.classList.removeMany("yellow blue green");
       // daytime.classList.add("red");
        break;
    case 19:
    case 20:
    case 21:
        moodElement.innerHTML = "夕飯を食べるよ。";
        document.getElementById("moodphoto").src = moodArray[3];
        //var daytime = document.getElementById("time");
        //    daytiime.classList.removeMany("red blue green");
       // daytime.classList.add("yellow");
        break;
    case 22:
    case 23:
    case 24:
    case 1:
        moodElement.innerHTML = "おやすみ。。";
        document.getElementById("moodphoto").src = moodArray[4];
        //var daytime = document.getElementById("time");
        //    daytiime.classList.removeMany("red blue yellow");
       // daytime.classList.add("green");
        break;
    default:
        moodElement.innerHTML = "ZZZzzz";
        document.getElementById("moodphoto").src = moodArray[5];
        //var daytime = document.getElementById("time");
        //    daytiime.classList.removeMany("red green yellow");
       // daytime.classList.add("blue");
        break;
    }
    // if ( hour >= 8 && hour <= 11){
    // var hour = now.getHours();
    // moodElement.innerHTML = "おはよう！";
    // }
    // else if (hour >= 12 && hour <= 14){
    // var hour = now.getHours();
    // moodElement.innerHTML = "お昼ご飯をゆっくり食べよう!";
    // }
    // else if (hour >= 15 && hour <= 18){
    // var hour = now.getHours();
    // moodElement.innerHTML = "昼の活動時間だよ！";
    // }
    // else if (hour >= 19 && hour <= 21){
    // var hour = now.getHours();
    // moodElement.innerHTML = "夕飯を食べるよ！";
    // }
    // else if (hour >= 22 || hour <= 1){
    // var hour = now.getHours();
    // moodElement.innerHTML = "おやすみ〜";
    // }
    // else if (hour >= 2 && hour <= 7){
    // var hour = now.getHours();
    // moodElement.innerHTML = "ZZZzzz";
    // }

    var timeElement = document.getElementById("time");
    if (hour < 10) hour = "0" + hour;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;
    timeElement.innerHTML = hour+"時"+min+"分"+sec+"秒";

    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    //nowのgetDayメソッドで曜日の０〜６を取得
    var dateElement = document.getElementById("date");
    dateElement.innerHTML = year+"年/"+month+"月/"+day+"日";

    var weekArray = ["日","月","火","水","木","金","土"];
    //nowのgetDayメソッドで曜日の０〜６を取得
    var week = weekArray[now.getDay()];
    var dateElement = document.getElementById("day");
    dateElement.innerHTML = week+"曜日";

    if (now.getDay() == 0){
        var weekend = document.getElementById("day");
        weekend.classList.add("sunday");
    }
    else if (now.getDay() == 6){
        var weekend = document.getElementById("day");
        weekend.classList.add("saturday");
    }
    else{
        var weekend = document.getElementById("day");
        weekend.classList.remove("sunday");
        weekend.classList.remove("saturday");
    }

    setTimeout("load()",1000);
}
window.onload = load;
