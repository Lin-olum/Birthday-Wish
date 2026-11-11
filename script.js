
// =================================
// TRACY'S BIRTHDAY EXPERIENCE ❤️
// =================================


// Smoothly navigate through the website

document.getElementById("startBtn").addEventListener("click", () => {
    document.getElementById("letterSection").scrollIntoView({
        behavior: "smooth"
    });
});


// =================================
// ANIMATED ENVELOPE
// =================================

const envelope = document.getElementById("envelope");
const openLetterBtn = document.getElementById("openLetterBtn");
const letterHint = document.getElementById("letterHint");

function openLetter() {
    envelope.classList.add("open");
    letterHint.textContent =
        "A little piece of my heart, written just for you. ❤️";

    openLetterBtn.textContent = "Your letter is open ❤️";

    createPetals(20);
}

envelope.addEventListener("click", openLetter);
openLetterBtn.addEventListener("click", openLetter);


// =================================
// FLOATING ROSE PETALS
// =================================

function createPetals(amount = 5) {

    const container = document.getElementById("petals");

    for (let i = 0; i < amount; i++) {

        const petal = document.createElement("div");

        petal.className = "petal";
        petal.textContent = ["✿", "♥", "❀", "♡"][
            Math.floor(Math.random() * 4)
        ];

        petal.style.left = Math.random() * 100 + "%";
        petal.style.fontSize = (12 + Math.random() * 18) + "px";
        petal.style.animationDuration = (5 + Math.random() * 7) + "s";

        container.appendChild(petal);

        setTimeout(() => petal.remove(), 13000);
    }
}

setInterval(() => createPetals(2), 1000);


// =================================
// BIRTHDAY CAKE
// =================================

const blowBtn = document.getElementById("blowBtn");
const wishMessage = document.getElementById("wishMessage");

let candlesBlown = false;

blowBtn.addEventListener("click", () => {

    if (candlesBlown) {
        return;
    }

    document.querySelectorAll(".candle").forEach((candle, index) => {

        setTimeout(() => {
            candle.classList.add("out");
        }, index * 350);

    });

    candlesBlown = true;

    blowBtn.textContent = "Make another wish, my love ❤️";

    wishMessage.textContent =
        "May all your beautiful wishes come true, my BEIBY! ✨";

    createPetals(35);

});


// =================================
// PHOTO GALLERY
// =================================

const photoUpload = document.getElementById("photoUpload");
const gallery = document.getElementById("gallery");

const placeholder = gallery.querySelector(".gallery-placeholder");

photoUpload.addEventListener("change", (event) => {

    const files = Array.from(event.target.files);

    if (files.length > 0 && placeholder) {
        placeholder.remove();
    }

    files.forEach((file) => {

        if (!file.type.startsWith("image/")) {
            return;
        }

        const image = document.createElement("img");

        const imageURL = URL.createObjectURL(file);

        image.src = imageURL;
        image.alt = "A beautiful memory";

        gallery.appendChild(image);

        image.addEventListener("dblclick", () => {
            image.remove();
            URL.revokeObjectURL(imageURL);
        });

    });

});


// =================================
// MUSIC PLAYER
// =================================


const music = document.getElementById("music");
const musicToggle = document.getElementById("musicToggle");

musicToggle.addEventListener("click", async () => {

    if (music.paused) {

        try {
            await music.play();
            musicToggle.textContent = "Ⅱ";
        } catch (error) {
            console.error("Music playback error:", error);
            alert("Unable to play the song. Check your audio file.");
        }

    } else {

        music.pause();
        musicToggle.textContent = "♫";

    }

});
    


musicToggle.addEventListener("click", async () => {

    if (!music.src) {
        alert("First add a song for Tracy, my love. ❤️");
        return;
    }

    if (music.paused) {

        try {
            await music.play();
            musicToggle.textContent = "Ⅱ";
            isPlaying = true;
        } catch (error) {
            alert("Please select your music file again.");
        }

    } else {

        music.pause();
        musicToggle.textContent = "▶";
        isPlaying = false;

    }

});

music.addEventListener("ended", () => {
    musicToggle.textContent = "▶";
    isPlaying = false;
});


// =================================
// REPLAY EXPERIENCE
// =================================

document.getElementById("replayBtn").addEventListener("click", async () => {
     const music = document.getElementById("music");

        music.src = "music\\WhatsApp Audio 2026-11-11 at 8.11.59 PM.mp4";
    

    try {
        await    music.play();
        document.getElementById("musicToggle").textContent = "Ⅱ";
    } catch (error) {
        console.log("Music could not start:", error);
    }

    envelope.classList.remove("open");

    document.querySelectorAll(".candle").forEach((candle) => {
        candle.classList.remove("out");
    });

    candlesBlown = false;

    wishMessage.textContent = "";

    blowBtn.textContent = "Blow out your candles ✨";

    openLetterBtn.textContent = "Open my letter 💌";

    letterHint.textContent = "Tap the envelope to open your letter.";

    document.getElementById("home").scrollIntoView({
        behavior: "smooth"
    });

    createPetals(40);

});
