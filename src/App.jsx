import { useState } from "react";
import "./App.css";

function App() {
  /* ========================================
     DATA DIRI
  ======================================== */
  const nama = "Lita Alentina";
  const pekerjaan = "Mahasiswa";
  const tanggalLahir = "2001-01-01";

  /* ========================================
     HITUNG UMUR
  ======================================== */
  const hitungUmur = (tanggal) => {
    const today = new Date();
    const birthDate = new Date(tanggal);

    let umur = today.getFullYear() - birthDate.getFullYear();

    const bulan = today.getMonth() - birthDate.getMonth();

    if (
      bulan < 0 ||
      (bulan === 0 && today.getDate() < birthDate.getDate())
    ) {
      umur--;
    }

    return umur;
  };

  const umur = hitungUmur(tanggalLahir);

/* ========================================
   FORMAT TANGGAL 
======================================== */
const tanggalIndonesia = new Date(tanggalLahir).toLocaleDateString(
  "id-ID",
  {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }
);

  /* ========================================
     STATE
  ======================================== */
  const [showModal, setShowModal] = useState(false);
  const [zodiac, setZodiac] = useState("");
  const [zodiacEmoji, setZodiacEmoji] = useState("");

  /* ========================================
     CEK ZODIAC
  ======================================== */
  const cekZodiac = () => {
    const tanggal = new Date(tanggalLahir);
    const bulan = tanggal.getMonth() + 1;
    const hari = tanggal.getDate();

    let hasilZodiac = "";
    let emoji = "";

    if ((bulan === 3 && hari >= 21) || (bulan === 4 && hari <= 19)) {
      hasilZodiac = "Aries";
      emoji = "🐏";
    } else if ((bulan === 4 && hari >= 20) || (bulan === 5 && hari <= 20)) {
      hasilZodiac = "Taurus";
      emoji = "🐂";
    } else if ((bulan === 5 && hari >= 21) || (bulan === 6 && hari <= 20)) {
      hasilZodiac = "Gemini";
      emoji = "👯";
    } else if ((bulan === 6 && hari >= 21) || (bulan === 7 && hari <= 22)) {
      hasilZodiac = "Cancer";
      emoji = "🦀";
    } else if ((bulan === 7 && hari >= 23) || (bulan === 8 && hari <= 22)) {
      hasilZodiac = "Leo";
      emoji = "🦁";
    } else if ((bulan === 8 && hari >= 23) || (bulan === 9 && hari <= 22)) {
      hasilZodiac = "Virgo";
      emoji = "👸";
    } else if ((bulan === 9 && hari >= 23) || (bulan === 10 && hari <= 22)) {
      hasilZodiac = "Libra";
      emoji = "⚖️";
    } else if ((bulan === 10 && hari >= 23) || (bulan === 11 && hari <= 21)) {
      hasilZodiac = "Scorpio";
      emoji = "🦂";
    } else if ((bulan === 11 && hari >= 22) || (bulan === 12 && hari <= 21)) {
      hasilZodiac = "Sagittarius";
      emoji = "🏹";
    } else if ((bulan === 12 && hari >= 22) || (bulan === 1 && hari <= 19)) {
      hasilZodiac = "Capricorn";
      emoji = "🐐";
    } else if ((bulan === 1 && hari >= 20) || (bulan === 2 && hari <= 18)) {
      hasilZodiac = "Aquarius";
      emoji = "🌊";
    } else {
      hasilZodiac = "Pisces";
      emoji = "🐟";
    }

    setZodiac(hasilZodiac);
    setZodiacEmoji(emoji);
    setShowModal(true);
  };

  /* ========================================
     DATA FILM FAVORIT
  ======================================== */
  const filmFavorit = [
    {
      judul: "Rapunzel (Tangled)",
      gambar:
        "https://upload.wikimedia.org/wikipedia/id/thumb/a/a8/Tangled_poster.jpg/250px-Tangled_poster.jpg",
    },
    {
      judul: "My Little Pony: A New Generation",
      gambar:
        "https://upload.wikimedia.org/wikipedia/id/a/aa/My_Little_Pony_A_New_Generation_film_poster.jpg",
    },
    {
      judul: "The SpongeBob SquarePants Movie",
      gambar:
        "https://upload.wikimedia.org/wikipedia/id/3/31/The_SpongeBob_SquarePants_Movie_poster.jpg",
    },
    {
      judul: "Kamen Rider Ex-Aid",
      gambar:
        "https://upload.wikimedia.org/wikipedia/id/7/7a/Ex-Aid_Movie.jpg",
    },
    {
      judul: "Uchuu Sentai Kyuranger",
      gambar:
        "https://upload.wikimedia.org/wikipedia/en/3/35/KyurangerVsSquad.png",
    },
  ];

  return (
    <div className="container">

      {/* ===============================
          PROFILE CARD
      =============================== */}
      <div className="card-profile">

        <div className="profile-header">
          <img
            className="profile-img"
            src="https://cdn-icons-png.flaticon.com/512/3100/3100791.png"
            alt="Foto Profil"
          />

          <h1>{nama}</h1>

          <span className="badge-job">
            🎓 {pekerjaan}
          </span>
        </div>

        <div className="profile-info">

          <div className="info-card">
            <div className="info-icon">🎂</div>
            <h3>Tanggal Lahir</h3>
            <p>{tanggalIndonesia}</p>
          </div>

          <div className="info-card">
            <div className="info-icon">🎉</div>
            <h3>Umur</h3>
            <p>{umur} Tahun</p>
          </div>

        </div>

        <button
          className="btn-zodiac"
          onClick={cekZodiac}
        >
          🔮 Cek Zodiac
        </button>

      </div>

      {/* ===============================
          JUDUL FILM
      =============================== */}
      <h2 className="judul-film">
        🎬 5 Film Favorit Saya
      </h2>

      {/* ===============================
          LIST FILM
      =============================== */}
      <div className="film-container">

        {filmFavorit.map((film, index) => (
          <div
            className="film-card"
            key={index}
          >
            <img
              src={film.gambar}
              alt={film.judul}
            />

            <h3>{film.judul}</h3>
          </div>
        ))}

        {/* CARD KOSONG OTOMATIS */}
        {Array.from({
          length: (4 - (filmFavorit.length % 4)) % 4
        }).map((_, index) => (
          <div
            key={`empty-${index}`}
            className="film-card empty-card"
          />
        ))}

      </div>

      {/* ===============================
          MODAL ZODIAC
      =============================== */}
      {showModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-top">
              <span className="modal-badge">
                
              </span>

              <h2>Hasil Zodiac</h2>
            </div>

            <div className="zodiac-circle">
              {zodiacEmoji}
            </div>

            <h1 className="zodiac-title">
              {zodiac}
            </h1>

            <p className="modal-desc">
              Berdasarkan tanggal lahir
              <br />
              <strong>{tanggalIndonesia}</strong>
            </p>

            <button
              className="close-btn"
              onClick={() => setShowModal(false)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;