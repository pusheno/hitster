import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import "./App.css";

/* ===== AUDIO UNLOCK (iOS / Safari) ===== */
let audioUnlocked = false;

const unlockAudio = () => {
  if (audioUnlocked) return;

  // 1-ms cichy dźwięk (standardowy hack)
  const audio = new Audio(
    "data:audio/mp3;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQCA..."
  );

  audio.play()
    .then(() => {
      audioUnlocked = true;
      console.log("🔓 Audio unlocked");
    })
    .catch(() => {});
};
/* ===================================== */

function App() {
  const [cameraActive, setCameraActive] = useState(false);
  const [permissionAsked, setPermissionAsked] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [audioObj, setAudioObj] = useState(null);

  /* Start skanera — JEDYNY klik użytkownika */
  const startScanner = () => {
    unlockAudio();              // 👈 KLUCZ
    setCameraActive(true);
    setPermissionAsked(true);
  };

  /* Po zeskanowaniu QR */
  const handleScan = (results) => {
    if (results?.length > 0) {
      const qrValue = results[0]?.rawValue?.trim();

      if (qrValue && qrValue !== currentSong) {
        playSong(qrValue);
      }
    }
  };

  /* Odtwarzanie */
  const playSong = (songName) => {
    if (audioObj) {
      audioObj.pause();
      audioObj.currentTime = 0;
    }

    const audio = new Audio(
      `${import.meta.env.BASE_URL}audio/${songName}.mp3`
    );
    audio.loop = false;

    audio.play().catch((err) => {
      alert("Nie udało się odtworzyć: " + err.message);
    });

    setAudioObj(audio);
    setCurrentSong(songName);
    setCameraActive(false);
  };

  /* Stop i powrót do skanera */
  const stopAndReturn = () => {
    if (audioObj) {
      audioObj.pause();
      audioObj.currentTime = 0;
      setAudioObj(null);
    }
    setCurrentSong(null);
    setCameraActive(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Czytnik QR → Odtwarzacz</h1>

        {/* Ekran startowy */}
        {!permissionAsked && (
          <div className="start-screen">
            <p>Naciśnij przycisk, aby uruchomić skaner</p>
            <button className="big-start-btn" onClick={startScanner}>
              Uruchom skaner
            </button>
          </div>
        )}

        {/* Tryb skanowania */}
        {permissionAsked && !currentSong && cameraActive && (
          <>
            <div className="scanner-box">
              <Scanner
                onScan={handleScan}
                styles={{
                  container: { width: "100%", maxWidth: "400px" },
                  video: { borderRadius: "12px" },
                }}
              />
            </div>
            <p className="info">
              Nakieruj kamerę na kod QR z nazwą piosenki
            </p>
          </>
        )}

        {/* Tryb odtwarzania */}
        {currentSong && (
          <div className="player-screen">
            <h2>Teraz gra:</h2>
            <h3 style={{ wordBreak: "break-all", margin: "20px 0" }}>
              {currentSong}
            </h3>
            <button className="stop-btn" onClick={stopAndReturn}>
              Stop i wróć do skanera
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
