let decrButton = document.getElementById("decr");

decrButton.onclick = function () {
    chrome.storage.local.get("solved", function (currentVal) {
        updateCount(parseInt(currentVal.solved) - 1);
    });
}