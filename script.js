/* =====================================================
   ANNIVERSARY WEBSITE JAVASCRIPT
   - Memory Popup
   - Floating Hearts
   - Floating Sparkles
   ===================================================== */


/* =====================================================
   MEMORY POPUP
   ===================================================== */

function openMemory(image, title, description) {

    const modal = document.getElementById("memoryModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");

    if (!modal || !modalImage || !modalTitle || !modalDescription) {
        console.error("Memory popup elements are missing.");
        return;
    }

    modalImage.src = "images/" + image;
    modalImage.alt = title;

    modalTitle.textContent = title;
    modalDescription.textContent = description;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeMemory() {

    const modal = document.getElementById("memoryModal");

    if (!modal) {
        return;
    }

    modal.classList.remove("active");

    document.body.style.overflow = "";
}


/* Close popup when clicking outside */

document.addEventListener("click", function(event) {

    const modal = document.getElementById("memoryModal");

    if (!modal) {
        return;
    }

    if (event.target === modal) {
        closeMemory();
    }

});


/* Close popup with ESC */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeMemory();
    }

});



/* =====================================================
   FLOATING HEARTS & SPARKLES
   ===================================================== */

const floatingContainer =
    document.querySelector(".floating-hearts");


function createHeart() {

    if (!floatingContainer) {
        return;
    }

    const heart =
        document.createElement("span");

    heart.className =
        "floating-heart";

    heart.textContent =
        Math.random() > 0.5 ? "♥" : "♡";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (12 + Math.random() * 18) + "px";


    heart.style.animationDuration =
        (8 + Math.random() * 7) + "s";


    heart.style.opacity =
        (0.25 + Math.random() * 0.45);


    floatingContainer.appendChild(heart);


    setTimeout(function() {

        heart.remove();

    }, 16000);

}



function createSparkle() {

    if (!floatingContainer) {
        return;
    }

    const sparkle =
        document.createElement("span");

    sparkle.className =
        "floating-sparkle";

    sparkle.textContent =
        Math.random() > 0.5 ? "✦" : "✧";


    sparkle.style.left =
        Math.random() * 100 + "vw";


    sparkle.style.fontSize =
        (8 + Math.random() * 10) + "px";


    sparkle.style.animationDuration =
        (7 + Math.random() * 7) + "s";


    sparkle.style.opacity =
        (0.3 + Math.random() * 0.5);


    floatingContainer.appendChild(sparkle);


    setTimeout(function() {

        sparkle.remove();

    }, 15000);

}


/* =====================================================
   START BACKGROUND ANIMATION
   ===================================================== */

setInterval(
    createHeart,
    700
);


setInterval(
    createSparkle,
    1000
);


/* Create some immediately */

for (let i = 0; i < 8; i++) {
    setTimeout(createHeart, i * 300);
}

for (let i = 0; i < 8; i++) {
    setTimeout(createSparkle, i * 350);
}