chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null,	{
    code: 'var isDark = document.getElementsByClassName("dark");if(isDark.length > 0){document.body.classList.remove("dark");}else{document.body.classList.add("dark");}'
	});
});