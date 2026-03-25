document.getElementById('proceedBtn').addEventListener('click', () => {
    // Get the original URL we were trying to visit
    const params = new URLSearchParams(window.location.search);
    const originalUrl = params.get("url");

    if (originalUrl) {
        // Save this URL to a 'temporary safe' list so it doesn't get blocked again immediately
        chrome.storage.local.get({ bypassedSites: [] }, (data) => {
            const newList = [...data.bypassedSites, new URL(originalUrl).hostname];
            chrome.storage.local.set({ bypassedSites: newList }, () => {
                window.location.href = originalUrl;
            });
        });
    } else {
        alert("Could not find the original URL. Please go back.");
    }
});

const params = new URLSearchParams(window.location.search);
const reason = params.get("reason");

if (reason) {
    document.getElementById('reasonText').innerText = "Reason: " + reason;
}