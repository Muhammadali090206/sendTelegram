function send() {
    let message = document.getElementById('message').value;
    let username = document.getElementById('username').value;
    let phone = document.getElementById('phone').value;

    sendtelegram(message, username, phone);
}

function sendtelegram(message, username, phone) {
    let telegram_bot_id = "6534849322:AAEli9KWN8iEFN4tMEg17IeUlvAgWCPwh2M";
    let chat_id = 1495453415;
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": "Ism: " + username + "\nTelefon: " + phone + "\nXabar: " + message
        })
    };
    $.ajax(settings).done(function (response) {
        alert("Xabar yuborildi!");
    });
}