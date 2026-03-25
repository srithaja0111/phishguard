const WHITELIST = ["google.com", "facebook.com", "amazon.com"];
const SUSPICIOUS_TLDS = [".xyz", ".top", ".zip", ".pw"];

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url && tab.url.startsWith('http')) {
    
    const url = new URL(tab.url);
    const domain = url.hostname.toLowerCase();
    const isHttps = tab.url.startsWith('https://');

    // 1. Check if the user already bypassed this site
    const storage = await chrome.storage.local.get({ bypassedSites: [] });
    if (storage.bypassedSites.includes(domain)) return;

    // 2. Skip if it's on the WHITELIST
    if (WHITELIST.some(site => domain === site || domain.endsWith("." + site))) return;

    let isPhishing = false;
    let warningReason = "";

    // NEW FEATURE: HTTPS/SSL CHECKER
    // If it's a login page but NOT secure (http), block it.
    const loginKeywords = ["login", "signin", "bank", "account", "verify"];
    const isAskingForData = loginKeywords.some(word => tab.url.toLowerCase().includes(word));
    
    if (!isHttps && isAskingForData) {
        isPhishing = true;
        warningReason = "Insecure Connection (No SSL)";
    }

    // Existing Logic: Homoglyph/Typo check (g00gle.com)
    const cleanDomain = domain.replace(/0/g, 'o').replace(/1/g, 'l').replace(/3/g, 'e');
    if (WHITELIST.some(site => cleanDomain.includes(site) && domain !== site)) {
        isPhishing = true;
        warningReason = "Brand Impersonation";
    }

    // Existing Logic: TLD check (.xyz)
    if (SUSPICIOUS_TLDS.some(tld => domain.endsWith(tld))) {
        isPhishing = true;
        warningReason = "Untrusted Domain Extension";
    }

    // BLOCK ACTION
    if (isPhishing) {
      console.log(`Blocked: ${domain} | Reason: ${warningReason}`);
      const blockedPage = chrome.runtime.getURL(`blocked.html?url=${encodeURIComponent(tab.url)}&reason=${encodeURIComponent(warningReason)}`);
      chrome.tabs.update(tabId, { url: blockedPage });
    }
  }
});