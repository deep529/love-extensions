function updateCount(n) {
    chrome.storage.local.set({ 'solved': n });
    document.getElementById("currentVal").innerHTML = n;
}