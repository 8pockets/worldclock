google.load("feeds", "1");

function initialize() {

    var cityElement = document.getElementById("city");
    if (cityElement.selectedIndex == 0) var feed = new google.feeds.Feed('http://www.google.co.jp/trends/hottrends/atom/feed?pn=p1');
    if (cityElement.selectedIndex == 1) var feed = new google.feeds.Feed('http://www.google.co.jp/trends/hottrends/atom/feed?pn=p1');
    if (cityElement.selectedIndex == 2) var feed = new google.feeds.Feed('http://www.google.co.jp/trends/hottrends/atom/feed?pn=p9');
    if (cityElement.selectedIndex == 3) var feed = new google.feeds.Feed('http://www.google.co.jp/trends/hottrends/atom/feed?pn=p15');
    if (cityElement.selectedIndex == 4) var feed = new google.feeds.Feed('http://www.google.co.jp/trends/hottrends/atom/feed?pn=p4');

    feed.setNumEntries(15);
    feed.load(function(result) {

            if (!result.error) {

                for (var i = 0; i < 15; i++) {
                    var entry = result.feed.entries[i];
                    var container = document.getElementById('feed');

                    var link = document.createElement("a");
                    link.href = entry.link;
                    link.target = "_blank";
                    link.appendChild(document.createTextNode(entry.title));

                    var li = document.createElement("li");
                    li.appendChild(link);

                    container.appendChild(li);

                }
            }
        });
}
google.setOnLoadCallback(initialize);

function cityselect() {

    var cityElement = document.getElementById("city");
    if (cityElement.selectedIndex == 0) var feed = new google.feeds.Feed('http://www.google.co.jp/trends/hottrends/atom/feed?pn=p1');
    if (cityElement.selectedIndex == 1) var feed = new google.feeds.Feed('http://www.google.co.jp/trends/hottrends/atom/feed?pn=p1');
    if (cityElement.selectedIndex == 2) var feed = new google.feeds.Feed('http://www.google.co.jp/trends/hottrends/atom/feed?pn=p9');
    if (cityElement.selectedIndex == 3) var feed = new google.feeds.Feed('http://www.google.co.jp/trends/hottrends/atom/feed?pn=p15');
    if (cityElement.selectedIndex == 4) var feed = new google.feeds.Feed('http://www.google.co.jp/trends/hottrends/atom/feed?pn=p4');

    feed.setNumEntries(15);
    feed.load(function(result) {

            if (!result.error) {
                //document.getElementById('feed').li.a = null;
                var container = document.getElementById('feed');

                for (var i = 0; i < 15; i++) {
                    var entry = result.feed.entries[i];
                    var container = document.getElementById('feed');

                    //既にあった要素の削除。item[0]の0であることが大事。iだとバグる。
                    container.removeChild(container.childNodes.item(0));

                    var link = document.createElement("a");
                    link.href = entry.link;
                    link.target = "_blank";
                    link.appendChild(document.createTextNode(entry.title));

                    var li = document.createElement("li");
                    li.appendChild(link);

                    container.appendChild(li);
                    console.log(li);

                }
            }
        });
}
