chrome.webNavigation.onCompleted.addListener((details) => {
  if (details.url.includes("courses.iitm.ac.in")) {
    chrome.scripting.executeScript({
      target: { tabId: details.tabId },
      files: ["content.js"]
    });
  }
}, { url: [{ urlMatches: 'courses.iitm.ac.in' }] });