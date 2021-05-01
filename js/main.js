let page;
let buttonClicked;
let lightMode = true;
let popUpFormVisible = false;

let navbar = document.querySelector('.navbar')
let navbarBrand = document.querySelector('.navbar-brand')
let connectWalletBtnAppBar = document.querySelectorAll('.connect-wallet-appbar')
let navbarLinks = document.querySelectorAll('.nav-link')
let themeButton = document.querySelectorAll('.theme-toggle-button')
let mobileFooter = document.querySelector('.mobile-footer')
let inputBorder = document.querySelectorAll('.form-input')





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
            tokenTitle.className = `token-title ${!lightMode ? 'dark-mode-app-logo': ''}`
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

// Adds the dark mode styling to the token list,
// so that the tokens can be visible on dark mode.
const addDarkMode = () => {
  let ethTitle = document.querySelectorAll('.token-title')

  Array.from(ethTitle).map(title => {
    title.classList.add('dark-mode-app-logo')
  })
}

// Removes the dark mode styling from the token list,
// so that the tokens can be visible on light mode.
const removeDarkMode = () => {
  let ethTitle = document.querySelectorAll('.token-title')

  Array.from(ethTitle).map(title => {
    title.classList.remove('dark-mode-app-logo')
  })
}

// Changes 'select-token' button to a button with actual currency.
const setSecondTokenButton = (imageUrl, titleText, imgClassName, titleClassName) => {
  let selectSwapTokenButton = document.querySelector('.select-token-container-swap')
  let selectPurchaseTokenButton = document.querySelector('.select-token-container-purchase')
  let swapTokenButton = document.querySelector('.to-swap')
  let purchaseTokenButton = document.querySelector('.to-purchase')
  // let toSwapInput = document.querySelector('.to-input-swap')
  // let toPurchaseInput = document.querySelector('.to-input')
  let swapTokenIcon = document.querySelector('.to-swap-image')
  let swapTokenTitle = document.querySelector('.to-swap-title')
  let purchaseTokenIcon = document.querySelector('.to-purchase-image')
  let purchaseTokenTitle = document.querySelector('.to-purchase-title')
  let fromSwapBtn = document.querySelector('.from-swap-btn')
  let fromPurchaseBtn = document.querySelector('.from-purchase-btn')
  let tokenButtonContainerSwap = document.querySelector('.token-button-container-swap')
  let tokenButtonContainerPurchase = document.querySelector('.token-button-container-purchase')


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
    // If the user is dark mode, add dark mode styles to the title,
    // and icon
    title.className = `eth-title ${titleClassName} ${!lightMode ? 'dark-mode-token-title': ''}`
    title.innerHTML = titleText
    icon.className = `eth-icon ${!lightMode ? 'dark-mode-token-icon': ''}`
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
      // toSwapInput.className = `${screen.width < 375 ? 'col-6' : 'col-md-7'} to-swap-input`
      fromSwapBtn.className ='col-6 col-md-5 from-swap-btn'

      // Make the button smaller.
      tokenButtonContainerSwap.classList.add('col-6')

    } else if (buttonClicked.includes('to-purchase')) {
      purchaseTokenButton.appendChild(textContainer)
      // Make the input in the 'to section' larger as we make the button smaller.
      // toPurchaseInput.className = `${screen.width < 375 ? 'col-5' : 'col-md-7'} to-input`
      fromPurchaseBtn.className = 'col-6 col-md-5 from-purchase-btn'
      // Make the button smaller.
      tokenButtonContainerPurchase.classList.add('col-6')
    }
  }

}

// Set the chosen token to the page.
const setTokens = (evt) => {
  console.log(evt.currentTarget)
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

  const toggleClass = (element, className) => {
    element.classList.toggle(className)
  }

  // Helper function to help toggle classes in a node list
  const toggleNodeListClasses = (nodeList, className) => {
    // Make an array out of a nodelist so that we can map over it.
    Array.from(nodeList).map(link => link.classList.toggle(className))
  }
 
  const switchToDarkMode = () => {
      let body = document.getElementsByTagName('body')
      let appBarLogo = document.querySelector('.navbar-brand-logo')
      let swapPurchaseForm = document.querySelector('.swap-purchase-form')
      let formFields = document.querySelectorAll('.form-field')
      let formTitles = document.querySelectorAll('#form-title')
      let inputTitles = document.querySelectorAll('.input-title')
      let inputs = document.querySelectorAll('.token-amount-input')
      let swapPurchaseButtons = document.querySelectorAll('.ETH')
      let tokenTitle = document.querySelectorAll('.eth-title')
      let tokenIcon = document.querySelectorAll('.eth-icon')
      let settingIcon = document.querySelector('.fa-cog')
      let connectWalletBtns = document.querySelectorAll('.connect-btn')
      let tabContainer = document.querySelector('.tabs-container')
      let popUpForm23 = document.querySelector('.pop-up-form23')
      let tabIcontitle = document.querySelector('.title')
      let footerManage = document.querySelector('.footer-manage')
      let closeIcon = document.querySelector('.close-icon')

      let toggleClassNames = [
        'navbar-dark',
        'dark-mode-app-logo',
        'dark-mode-form',
        'dark-mode-setting-icon',
        'dark-mode-tab-container',
        'dark-mode-pop-up-form-23',
        'dark-mode-form-title',
        'dark-mode-pop-up-form-23',
        'dark-mode-form-title',
        'dark-mode-form'
    ]

    let toggleElements = [
      navbar,
      appBarLogo,
      swapPurchaseForm,
      settingIcon,
      tabContainer,
      popUpForm23,
      tabIcontitle,
      footerManage,
      closeIcon,
      mobileFooter
    ]

    // Map over both arrays and add toggle classes to all,
    // of them.
    toggleClassNames.map((className, index) => {
      toggleClass(toggleElements[index], className)
    })

      body[0].classList.toggle('dark-mode-body')
      toggleNodeListClasses(themeButton, 'dark-mode-theme-button')
      toggleNodeListClasses(connectWalletBtnAppBar, 'dark-mode-connect-wallet-appbar')
      toggleNodeListClasses(navbarLinks, 'dark-mode-appbar-links')
      toggleNodeListClasses(formTitles, 'dark-mode-form-title')
      toggleNodeListClasses(inputTitles, 'dark-mode-input-title')
      toggleNodeListClasses(inputs, 'dark-mode-input')
      toggleNodeListClasses(formFields, 'dark-mode-form-field')
      toggleNodeListClasses(swapPurchaseButtons, 'dark-mode-swap-purchase-button')
      toggleNodeListClasses(tokenTitle, 'dark-mode-token-title')
      toggleNodeListClasses(tokenIcon, 'dark-mode-token-icon')
      toggleNodeListClasses(connectWalletBtns, 'dark-mode-connectbtn')
      toggleNodeListClasses(inputBorder, 'dark-mode-input-border')
  }

  const toggleNodeListAttributes = (nodeList, attribute, value) => {
    if (value) {
      Array.from(nodeList).map(item => {
        item.setAttribute(attribute, value)
      })
    } else {
      Array.from(nodeList).map(item => {
        item.removeAttribute(attribute)
      })
    }
  }

  // Hide the pop-up forms when a user clicks,
  // outside the form.
  const hideForms = (element) => {
    if (popUpFormVisible) {
      $(document).click(function(event) { 
        var $target = $(event.target);
        if(!$target.closest(element).length && 
        $(element).is(":visible")) {
          $(".pop-up-form23").hide();
          $(".pop-up-form33").hide();
          $(".pop-up-form34").hide();
          // Reduce the opacity of all other elements and disable them.
          addOverlay('close')
          $(".connect-wallet-form").hide();
          // Reduce the opacity of all other elements and disable them.
          addOverlay('close')
          let popUpForm = document.querySelector('.pop-up-form23')
          // Remove the styling that positions the popup form a bit lower.
          popUpForm.classList.remove('connect-wallet-styling')
          $(".bottom").show();
          if (lightMode) {
            $("body").removeClass("intro");
          } else {
            removeDarkMode()
            $("body").removeClass("dark-mode-intro")
          }
        }        
      })
    }
  }

  const addOverlay = (action) => {
    if (action === 'open') {
      navbar.classList.add('dark-mode-opacity')
      navbarBrand.setAttribute('disabled', true)
      toggleNodeListAttributes(connectWalletBtnAppBar, 'disabled', true)
      mobileFooter.style.display = 'none'

      toggleNodeListAttributes(navbarLinks, 'disabled', true)
      toggleNodeListAttributes(themeButton, 'disabled', true)
    } else if (action === 'close') {
      navbar.classList.remove('dark-mode-opacity')
      navbarBrand.removeAttribute('disabled')
      toggleNodeListAttributes(connectWalletBtnAppBar, 'disabled', false)
      toggleNodeListAttributes(navbarLinks, 'disabled', false)
      toggleNodeListAttributes(themeButton, 'disabled', false)
      mobileFooter.style.display = 'block'
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

  $(document).ready(function () {

    $(".pop-up-form23").hide();
    $(".pop-up-form33").hide();
    $(".pop-up-form34").hide();
    $('.token-button-container-swap').hide();  
    $('.token-button-container-purchase').hide();  
    $('.dark').hide();  

    $('.theme-toggle-button').click(function (evt) {
      // To nullify the $(window).click from the hideForms(),
      // function.
      evt.stopPropagation()
    
      // Switch between the light and dark icons
      if (lightMode) {
        $('.light').hide()
        $('.dark').show()
        lightMode = !lightMode
      } else {
        $('.light').show()
        $('.dark').hide()
        lightMode = !lightMode
      }
      switchToDarkMode();
    })

    $(".ETH, .select-token").click(function (buttonEvt) {
      buttonEvt.stopPropagation()
      // Popup form is visible.
      popUpFormVisible = true;
      hideForms('.pop-up-form23')
      if (lightMode) {
        $("body").addClass("intro");
      } else {
        $("body").addClass("dark-mode-intro")
      }
      // Reduce the opacity of all other elements and disable them.
      addOverlay('open')
      // Hide the bottom so that the page does not scroll on mobile screens,
      // while the popup is visible.
      $(".bottom").hide();
      // Show the elements that we're hiding when showing the,
      // connect wallet popup
      $(".Search-form").show();
      $(".second-search-field").show();
      $(".token-listing").show();
      $(".footer-manage").show();
      let popUpForm = document.querySelector('.pop-up-form23')
      // Remove the styling that positions the popup form a bit lower.
      popUpForm.classList.remove('connect-wallet-styling')
      let popUpFormTitle = document.querySelector('.pop-up-form-title')
      popUpFormTitle.innerHTML = 'Select a token'
      const buttonClicked = buttonEvt.currentTarget.className

      $(".pop-up-form23").show();

      // First check whether the token list had already been rendered.
      let ethTitle = document.querySelector('.token-title')
      if (ethTitle && !lightMode) {
        addDarkMode()
      } else {
        loadTokens(buttonClicked)
      }
      $(".select-otion").click(function (evt) {
        $(".pop-up-form23").hide();
        $(".bottom").show();
        popUpFormVisible = false
        // Return elments to original opacity
        addOverlay('close')
        // Decide which button to show depending on which page,
        // the user is on.
        if (buttonClicked.includes('to-purchase')) {
          $('.token-button-container-purchase').show();
        } else if (buttonClicked.includes('to-swap')) {
          $('.token-button-container-swap').show();  
        }
        if (lightMode) {
          $("body").removeClass("intro");
        } else {
          removeDarkMode()
          $("body").removeClass("dark-mode-intro")
        }
        setTokens(evt)
      });
    });

    $(".close-icon").click(function () {
      if (!lightMode) {
        removeDarkMode()
      }
      $(".pop-up-form23").hide();
      $(".bottom").show();
      popUpFormVisible = false;
      // Return elments to original opacity
      addOverlay('close')
    });

    $(".close-icon").click(function () {
      if (lightMode) {
        $("body").removeClass("intro");
      } else {
        $("body").removeClass("dark-mode-intro")
      }
    });
  });