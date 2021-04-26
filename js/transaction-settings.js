const addTransactionFormDakMode = () => {
    let transactionSettings = document.querySelector('.transaction-settings')
    transactionSettings.classList.toggle('dark-mode-transaction-form')
}


$(document).ready(function() {
    // Hide the setting popup form when a user clicks elsewhere.
    // Todo: Make it work.
    $("pop-up-form33").on('focusout', function() {
    $(this).hide()
    })


    $(".setting-icon").click(function () {
        $(".pop-up-form33").toggle().focus();
        addTransactionFormDakMode();
    });

    $(".on-function").click(function () {
        $(".pop-up-form34").show();
        $(".pop-up-form33").hide();
    });

    $(".off-function").click(function () {
        $(".pop-up-form34").show();
        $(".pop-up-form33").hide();
    });

    $(".close-icon").click(function () {
        $(".pop-up-form34").hide();
    });
})