//-----------------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------------
var profileURL      = "https://game.capcom.com/cfn/sfv/profile/[your url here]"
var pollingInterval = 15

//-----------------------------------------------------------------------------
// Create child window to send broadcast channel message
//-----------------------------------------------------------------------------
var child = window.open("");

// Insert CSS styling here
child.document.head.innerHTML = `<link rel="preconnect" href="https://fonts.gstatic.com">
                                <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
                                <style>
                                    #lp{
                                        font-size: 32px;
                                        font-family: 'Anton', sans-serif;
                                    }
                                </style>`

//-----------------------------------------------------------------------------
// Recursive function for fetching LP
//-----------------------------------------------------------------------------
function fetchLP(){
    fetch(profileURL)
    .then(response => response.text())
    .then(innerHtml => {
        var doc = document.createElement('html')
        doc.innerHTML = innerHtml

        return doc.getElementsByClassName('leagueInfo')[0].querySelectorAll('dd')[1].innerText
    })
    .then(lp =>{
        child.document.body.innerHTML = `<div id="lp">${lp}</div>`
    })
}

// Start the whole thing
setInterval(fetchLP, pollingInterval * 1000)