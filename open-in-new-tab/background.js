chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.windows.create(
        {
            "url": "https://www.youtube.com/watch?v=TUkBi_rskUw",
            "incognito": true
        });
});