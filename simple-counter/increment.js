let incrButton = document.getElementById("incr");

incrButton.onclick = function () {
    chrome.storage.local.get("solved", function (currentVal) {
        updateCount(parseInt(currentVal.solved) + 1);
    });
};