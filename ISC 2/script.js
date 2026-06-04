// 1. PENGATURAN MENU RESPONSIVE (NAVBAR)
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// 2. SISTEM AUDIO INTEGRASI
const audioPusat = document.getElementById("audioPusat");
const playBtn = document.getElementById("playBtn"); // Tombol di Hero
const kartuLagu = document.querySelectorAll(".play-card"); // 3 Kartu Playlist

// Fungsi bantu untuk mereset semua teks tombol & status kartu ke posisi mati
function resetSemuaTampilan() {
  playBtn.innerText = "▶ Putar Lagu Utama";
  playBtn.style.backgroundColor = "#ff5e7e"; // Warna asli tombol Anda
  kartuLagu.forEach((k) => k.classList.remove("sedang-diputar"));
}

// KONTROL TOMBOL UTAMA DI HERO
playBtn.addEventListener("click", () => {
  const laguUtama = playBtn.getAttribute("data-src");

  // Jika lagu utama sedang berputar -> Berhentikan (Pause)
  if (audioPusat.src.includes(laguUtama) && !audioPusat.paused) {
    audioPusat.pause();
    resetSemuaTampilan();
    return;
  }

  // Jika mati/ganti lagu -> Setel lagu utama
  resetSemuaTampilan();
  audioPusat.src = laguUtama;

  audioPusat
    .play()
    .then(() => {
      playBtn.innerText = "⏸ Jeda Lagu Utama";
      playBtn.style.backgroundColor = "#2b1055"; // Berubah warna gelap saat berputar
    })
    .catch((error) => {
      alert(
        "Gagal memutar! Pastikan file 'lagu1.mp3' ada di dalam folder website Anda.",
      );
    });
});

// KONTROL 3 KARTU LAGU DI PLAYLIST
kartuLagu.forEach((kartu) => {
  kartu.addEventListener("click", () => {
    const laguKartu = kartu.getAttribute("data-src");

    // Jika kartu yang sama diklik dan sedang berputar -> Berhentikan (Pause)
    if (kartu.classList.contains("sedang-diputar") && !audioPusat.paused) {
      audioPusat.pause();
      resetSemuaTampilan();
      return;
    }

    // Jika mati/ganti lagu -> Setel lagu dari kartu ini
    resetSemuaTampilan();
    audioPusat.src = laguKartu;

    audioPusat
      .play()
      .then(() => {
        kartu.classList.add("sedang-diputar");

        // Jika kartu pertama (lagu1.mp3) diputar lewat playlist, sinkronkan teks tombol Hero juga
        if (laguKartu === playBtn.getAttribute("data-src")) {
          playBtn.innerText = "⏸ Jeda Lagu Utama";
          playBtn.style.backgroundColor = "#2b1055";
        }
      })
      .catch((error) => {
        alert(
          `Gagal memutar! Periksa apakah file '${laguKartu}' sudah ada di folder.`,
        );
      });
  });
});

// Reset tampilan otomatis jika lagu habis berputar sampai selesai
audioPusat.addEventListener("ended", () => {
  resetSemuaTampilan();
});
