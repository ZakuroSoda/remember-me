function getCitation(url){
    let original = "https://api.citeas.org/product/";
    let targetURL = original + url;
    fetch(targetURL)
        .then(response => {
            return response.json();
        })
        .then(data => {
            var citation =  data["citations"][0]["citation"];
        });
        //not working now
    return citation;
}
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0]["url"];
 });