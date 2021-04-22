let page;


// Read the json file with the token list and display it,
// onclick of the button
const loadTokens = () => {
  let tokenContainer = document.querySelector('#token-container')
    tokenData.map(token => {
        if(tokenContainer) {
            // First create the outer container.
            let selectOption = document.createElement('div')
            selectOption.className = 'select-otion'

            // Then create the inner elements.
            let img = document.createElement('img')
            img.src = token.imageUrl
            img.className = 'token-img'
            // Add a title so that we can easily identify which token was clicked.
            img.title = token.title
            selectOption.appendChild(img)

            let span = document.createElement('span')
            span.className = 'token'

            let tokenTitle = document.createElement('div')
            tokenTitle.className = 'token-title'
            // Add the actual title to the div
            tokenTitle.innerHTML = token.title
            let tokenSubtitle = document.createElement('div')
            tokenSubtitle.className = 'token-subtitle'
            tokenSubtitle.innerHTML = token.content

            // Add the the subtitle and title to the span.
            span.appendChild(tokenTitle)
            span.appendChild(tokenSubtitle)

            // Then add the span to the selectOption.
            selectOption.appendChild(span)

            // And finally to the tokenContainer.
            tokenContainer.appendChild(selectOption)
        }
    })
}

// Set the chosen token to the page.
const setTokens = (evt) => {
    let swapFromImg = document.querySelector('.from-swap-image')
    let purchaseFromImg = document.querySelector('.from-purchase-image')
    let swapFromTitle = document.querySelector('.from-swap-title')
    let purchaseFromTitle = document.querySelector('.from-purchase-title')
    let selectedTitle = evt.currentTarget.firstChild.title

    if (page === 'swap') {
      if (swapFromImg && swapFromTitle) {
        tokenData.map(token => {
          // Find the token with the same title as the selected title,
          // then display its image.
          if(token.title === selectedTitle) {
            swapFromImg.src = token.imageUrl
            swapFromTitle.innerHTML = selectedTitle
          }
        })
      }
    } else if (page === 'purchase') {
      if (purchaseFromImg && purchaseFromTitle) {
        tokenData.map(token => {
          // Find the token with the same title as the selected title,
          // then display its image.
          if(token.title === selectedTitle) {
            purchaseFromImg.src = token.imageUrl
            purchaseFromTitle.innerHTML = selectedTitle
          }
        })
      }
    }
}


// Toggle the tabs on th page through the toggle buttons
function toggleTabs(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tabToggleButtons = document.getElementsByClassName("tab-toggle-buttons");
    for (i = 0; i < tabToggleButtons.length; i++) {
      tabToggleButtons[i].className = tabToggleButtons[i].className.replace(" active-tab", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active-tab";
    // Set which page the user is on
    const buttonClicked = evt.currentTarget.innerHTML.toLowerCase()
    if (buttonClicked.includes('swap')) {
      page = 'swap'
    } else if (buttonClicked.includes('purchase')) {
      page = 'purchase'
    }
  }
  
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

$(function () {
    var pull = $('#pull');
    menu = $('nav ul');
    menuHeight = menu.height();

    $(pull).on('click', function (e) {
      e.preventDefault();
      menu.slideToggle();
    });


    $(window).resize(function () {
      var w = $(window).width();
      if (w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });