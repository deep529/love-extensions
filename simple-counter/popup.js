chrome.storage.local.get('solved', function (data) {
    document.getElementById("currentVal").innerHTML = parseInt(data.solved);

    chrome.storage.local.get('lastTime', function (time) {
        document.getElementById("lastTime").innerHTML = time.lastTime;
    });
});