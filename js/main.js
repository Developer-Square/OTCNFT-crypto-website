let page;
let buttonClicked;


// Read the json file with the token list and display it,
// onclick of the button
const loadTokens = (buttonClickedClassName) => {
  buttonClicked = buttonClickedClassName

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

// Changes 'select-token' button to a button with actual currency.
const setSecondTokenButton = (imageUrl, titleText, imgClassName, titleClassName) => {
  let selectSwapTokenButton = document.querySelector('.select-token-container-swap')
  let selectPurchaseTokenButton = document.querySelector('.select-token-container-purchase')
  let swapTokenButton = document.querySelector('.to-swap')
  let purchaseTokenButton = document.querySelector('.to-purchase')
  let toSwapInput = document.querySelector('.to-input-swap')
  let toPurchaseInput = document.querySelector('.to-input')
  let swapTokenIcon = document.querySelector('.to-swap-image')
  let swapTokenTitle = document.querySelector('.to-swap-title')
  let purchaseTokenIcon = document.querySelector('.to-purchase-image')
  let purchaseTokenTitle = document.querySelector('.to-purchase-title')

  if (buttonClicked.includes('to-swap')) {
    // Hide the 'select a token' button.
    selectSwapTokenButton.style.display = 'none'
  } else if (buttonClicked.includes('to-purchase')) {
    selectPurchaseTokenButton.style.display = 'none'
  }

  // Check if element already exists,
  // If yes then just replace the text.
  if (swapTokenIcon && swapTokenTitle && buttonClicked.includes('to-swap')) {
    swapTokenIcon.src = imageUrl
    swapTokenTitle.innerHTML = titleText
  } else if (purchaseTokenIcon && purchaseTokenTitle && buttonClicked.includes('to-purchase')) {
    purchaseTokenIcon.src = imageUrl
    purchaseTokenTitle.innerHTML = titleText
  } else {

    // Create the token, same as the one from section.
    let textContainer = document.createElement('span')
    let img = document.createElement('img')
    let title = document.createElement('span')
    let icon = document.createElement('span')
    let dropDownIcon = document.createElement('i')

    textContainer.className = 'ETH-span'
    img.className = imgClassName
    img.src = imageUrl
    title.className = `eth-title ${titleClassName}`
    title.innerHTML = titleText
    icon.className = 'eth-icon'
    dropDownIcon.className = 'fa fa-angle-down'
    dropDownIcon.setAttribute('aria-hidden', 'true')

    // Arrange how the elements will appear on the page.
    icon.appendChild(dropDownIcon)
    textContainer.appendChild(img)
    textContainer.appendChild(title)
    textContainer.appendChild(icon)
    // Place the button on the page depending on which,
    // page the user is on.
    if (buttonClicked.includes('to-swap')) {
      swapTokenButton.appendChild(textContainer)
      // Make the input in the 'to section' larger as we make the button smaller.
      toSwapInput.className = 'col-md-7 to-swap-input'
    } else if (buttonClicked.includes('to-purchase')) {
      purchaseTokenButton.appendChild(textContainer)
      // Make the input in the 'to section' larger as we make the button smaller.
      toPurchaseInput.className = 'col-md-7 to-input'
    }
  }

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
            if (buttonClicked.includes('to-swap')) {
              setSecondTokenButton(token.imageUrl, token.title, 'to-swap-image', 'to-swap-title')
            } else {
              swapFromImg.src = token.imageUrl
              swapFromTitle.innerHTML = selectedTitle
            }
          }
        })
      }
    } else if (page === 'purchase') {
      if (purchaseFromImg && purchaseFromTitle) {
        tokenData.map(token => {
          // Find the token with the same title as the selected title,
          // then display its image.
          if (token.title === selectedTitle) {
          // Select whether to modify the button in the 'from section' or,
          // 'to section'.
          if (buttonClicked.includes('to-purchase')) {
            setSecondTokenButton(token.imageUrl, token.title, 'to-purchase-image', 'to-purchase-title')
          } else {
            purchaseFromImg.src = token.imageUrl
            purchaseFromTitle.innerHTML = selectedTitle
          }
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