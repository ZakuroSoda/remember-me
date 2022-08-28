function getCitation(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0]["url"];
        let original = "https://api.citeas.org/product/";
        let targetURL = original + activeTab;
        fetch(targetURL)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let citation = data["citations"][0]["citation"];
            document.getElementById("citation").value = citation;
        });
     });  
}
getCitation()

function copy(){
  var copyText = document.getElementById("citation");
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  /* Alert the copied text */
  document.getElementById("copybtn").className = "btn btn-success"
  document.getElementById("copybtn").innerHTML = "Success"
  const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
  const alertCopied = async () => {
    await sleep(1500)
    document.getElementById("copybtn").className = "btn btn-primary"
    document.getElementById("copybtn").innerHTML = "Copied to Clipboard"
  }
  alertCopied();
}

document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('copybtn');
    // onClick's logic below:
    btn.addEventListener('click', function() {
        copy();
    });
});