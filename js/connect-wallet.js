
  const setConnectWallet = () => {
    let popUpFormTitle = document.querySelector('.pop-up-form-title')
    if (popUpFormTitle) {
      popUpFormTitle.innerHTML = 'Connect to a wallet'
    }

    let availableButtonNames = [
        'Install Metamask',
        'WalletConnect',
        'Coinbase Wallet',
        'Fortmatic',
        'Portis',
    ]

    let availableButtonImages = [
        './images/metamask.png',
        './images/walletConnectIcon.svg',
        './images/coinbaseWalletIcon.svg',
        './images/fortmatic.png',
        './images/portisIcon.png'
    ]

    let connectWalletContainer = document.querySelector('.connect-wallet-form')
    // Create all the buttons and add them to the connectWalletContainer.
    availableButtonNames.map((buttonText, index) => {
        let connectWalletButtons = document.createElement('div')
        let connectWalletText = document.createElement('p')
        let connectWalletIcon = document.createElement('img')
        connectWalletButtons.className = `connect-wallet-buttons ${!lightMode ? 'dark-mode-connect-wallet-buttons' : ''}` 

        connectWalletText.innerHTML = buttonText
        connectWalletIcon.src = availableButtonImages[index]
        connectWalletButtons.appendChild(connectWalletText)
        connectWalletButtons.appendChild(connectWalletIcon)
        connectWalletContainer.appendChild(connectWalletButtons)
    })

    let connectWalletFooter = document.createElement('div')
    connectWalletFooter.className = 'connect-wallet-footer'
    let span = document.createElement('span')
    let span2 = document.createElement('span')
    span2.className = 'highlight-text'
    span.innerHTML = 'New to Ethereum?'
    span2.innerHTML = 'Learn more about wallets'
    connectWalletFooter.appendChild(span)
    connectWalletFooter.appendChild(span2)
    connectWalletFooter.className = 'connect-wallet-footer'
    
    connectWalletContainer.appendChild(connectWalletFooter)
  }

  const addConnectWalletDarkMode = () => {
    let connectWalletContainer = document.querySelector('.connect-wallet-form')
    let connectWalletFooter = document.querySelector('.connect-wallet-footer')
    let connectWalletButtons = document.querySelectorAll('.connect-wallet-buttons')

    if (!lightMode && connectWalletFooter) {
        connectWalletContainer.classList.add('dark-mode-connect-wallet-form')
        connectWalletFooter.classList.add('dark-mode-footer')
        Array.from(connectWalletButtons).map(button => {
            button.classList.add('dark-mode-connect-wallet-buttons')
        })
    } else {
        connectWalletContainer.classList.remove('dark-mode-connect-wallet-form')
        connectWalletFooter.classList.remove('dark-mode-footer')
        Array.from(connectWalletButtons).map(button => {
            button.classList.remove('dark-mode-connect-wallet-buttons')
        })
    }
  }

  const MediaQueryChecker = () => {
    if (screen.width < 991) {
      let appbarButtons = document.querySelector('.buttons-container')
      appbarButtons.classList.add('hide-on-mobile')
    } 
  }

$(document).ready(function() {
    $('.connect-wallet-form').hide()
    MediaQueryChecker()
    // For the connect wallet popup
    $(".connect-wallet-appbar, .connect-btn").click(function (evt) {
      evt.stopPropagation()
      // Popup form is visible.
      popUpFormVisible = true;
      hideForms()

      // Hide the bottom so that the page does not scroll,
      // while the popup is visible.
        $(".bottom").toggle();
        $(".pop-up-form23").toggle();
        $(".connect-wallet-form").toggle();
        $(".Search-form").hide();
        $(".token-listing").hide();
        $(".footer-manage").hide();
        // Reduce the opacity of all other elements and disable them.
        addOverlay('open')
        let popUpForm = document.querySelector('.pop-up-form23')

        // Add the styling that positions the popup form a bit lower.
        popUpForm.classList.add('connect-wallet-styling')

        let connectWalletBtns = document.querySelector('.connect-wallet-buttons')

        // Check whether the buttons have been rendered.
        if (!connectWalletBtns) {
            setConnectWallet()
        }
        addConnectWalletDarkMode()
        if (lightMode) {
            $("body").toggleClass("intro");
          } else {
            $("body").toggleClass("dark-mode-intro")
          }
        });

    $(".close-icon").click(function () {
        popUpFormVisible = false
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
            $("body").removeClass("dark-mode-intro")
          }
    });
})