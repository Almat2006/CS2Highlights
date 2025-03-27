document.getElementById("upload-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let fileInput = document.getElementById("video-upload");
    let titleInput = document.getElementById("video-title");

    if (fileInput.files.length === 0) {
        alert("Выберите файл для загрузки!");
        return;
    }

    let videoFile = fileInput.files[0];
    let videoURL = URL.createObjectURL(videoFile);
    let videoTitle = titleInput.value;

    let highlightSection = document.getElementById("highlights");
    let newHighlight = document.createElement("div");
    newHighlight.classList.add("highlight");

    newHighlight.innerHTML = `
        <video controls>
            <source src="${videoURL}" type="${videoFile.type}">
            Ваш браузер не поддерживает видео.
        </video>
        <p>${videoTitle}</p>
    `;

    highlightSection.appendChild(newHighlight);

    // Очистка формы
    fileInput.value = "";
    titleInput.value = "";
});
function editProfile() {
    let nickname = prompt("Введите ваш никнейм:", document.getElementById("nickname").textContent);
    let rank = prompt("Введите ваш ранг (Silver, Gold, Global и т.д.):", document.getElementById("rank").textContent);
    let favoriteMap = prompt("Введите вашу любимую карту (Inferno, Mirage и т.д.):", document.getElementById("favorite-map").textContent);
    let favoriteWeapon = prompt("Введите любимое оружие (AWP, AK-47 и т.д.):", document.getElementById("favorite-weapon").textContent);
    
    if (nickname) document.getElementById("nickname").textContent = nickname;
    if (rank) document.getElementById("rank").textContent = rank;
    if (favoriteMap) document.getElementById("favorite-map").textContent = favoriteMap;
    if (favoriteWeapon) document.getElementById("favorite-weapon").textContent = favoriteWeapon;
}