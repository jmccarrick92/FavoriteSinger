class favoriteSingers {
    constructor() {
        this.singers = [
            {
                singer: "Lil Uzi Vert",
                genre: "Hip Hop",
                favoriteSong: "Myron",
                favoriteAlbum: "Eternal Atake(Deluxe)",
            },
            {
                singer: "Christy Moore",
                genre: "Irish Folk",
                favoriteSong: "Among The Wicklow Hills",
                favoriteAlbum: "Ride On",
            },
            {
                singer: "Turnstile",
                genre: "Hardcore",
                favoriteSong: "Keep It Moving",
                favoriteAlbum: "Step to Rhythm",
            },
            {
                singer: "Horror Show",
                genre: "Hardcore",
                favoriteSong: "Stuck Again",
                favoriteAlbum: "Notes From The Night That Never Ended",
            },
        ];
    }

    populateTable() {
        const tbody = document.querySelector(".table tbody");
        this.singers.forEach((singer) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${singer.singer}</td>
                <td>${singer.genre}</td>
                <td>${singer.favoriteSong}</td>
                <td>${singer.favoriteAlbum}</td>
            `;
            tbody.appendChild(row);
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const app = new favoriteSingers();
    app.populateTable();
});