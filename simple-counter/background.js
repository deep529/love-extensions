chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.local.set({ 'solved': 0 }, function () {
        chrome.storage.local.set({ 'lastTime': "not set" }, function () {
        });
    });
});