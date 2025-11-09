/* 
JSON and Bootstrap Assignment
Last Edited by: J. McCarrick 11/9/2025
*/

// Class to manage favorite singers data and display it in a table.
class favoriteSingers {
    constructor() {
        // Array of singer objects, each with details like name, genre, favorite song, and album.
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

    // Method to populate the HTML table with singer data.
    populateTable() {
        const tbody = document.querySelector(".table tbody");
        // Clear any existing rows in the table body.
        tbody.innerHTML = '';

        // Loop through each singer and create a table row.
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

// When the DOM is fully loaded, create an instance of favoriteSingers and populate the table.
document.addEventListener("DOMContentLoaded", () => {
    const app = new favoriteSingers();
    app.populateTable();
});