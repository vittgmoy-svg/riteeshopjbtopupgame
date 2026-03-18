/* ========================
   LOADING SCREEN
======================== */
window.addEventListener("load", () => {
    const loader = document.querySelector(".loading");
    if (loader) {
        loader.style.opacity = "0";
        loader.style.transition = "opacity 0.5s ease";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});

/* ========================
   TOAST FUNCTION
======================== */
function showToast(message) {
    let toast = document.querySelector(".toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.className = "toast";
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

/* ========================
   GAME CARD CLICK
======================== */
const gameCards = document.querySelectorAll(".game-card");

gameCards.forEach(card => {
    card.addEventListener("click", () => {
        // Remove active dari semua
        gameCards.forEach(c => c.classList.remove("active"));

        // Tambahkan active ke yang diklik
        card.classList.add("active");

        // Ambil nama game
        const gameName = card.querySelector("h3")?.textContent || "game";

        // Simpan ke localStorage
        try {
            localStorage.setItem("selectedGame", gameName);
        } catch (e) {}

        // Toast
        showToast(`Memilih ${gameName}...`);

        // Fade out sebelum redirect
        document.body.style.transition = "opacity 0.4s ease";
        document.body.style.opacity = "0";

        setTimeout(() => {
            window.location.href = "form.html";
        }, 400);
    });
});

/* ========================
   OPTIONAL: PREVENT ERROR IF NO ELEMENT
======================== */
document.addEventListener("DOMContentLoaded", () => {
    // Safety check untuk elemen
    if (!document.body) return;
});