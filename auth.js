function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    // Здесь можно отправить токен на сервер для верификации
}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: "1026689139773-7utu1qhe90gst5ha1bu74durb2sg219l.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });

    google.accounts.id.prompt(); // Показывает всплывающее окно входа
};