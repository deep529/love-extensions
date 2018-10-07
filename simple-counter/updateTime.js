let updateTime = document.getElementById("updateTime");

updateTime.onclick = function () {
    var date = new Date().toString();
    // cutoff the part starting from GMT & insert in HTML
    date = date.substr(0, date.search("GMT") - 1);

    chrome.storage.local.set({ 'lastTime': date });    
    document.getElementById("lastTime").innerHTML = date;
};