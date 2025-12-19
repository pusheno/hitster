import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import "./App.css";

function App() {
  const [cameraActive, setCameraActive] = useState(false);
  const [permissionAsked, setPermissionAsked] = useState(false);
  const [currentSong, setCurrentSong] = useState(null); // nazwa pliku bez .mp3
  const [audioObj, setAudioObj] = useState(null);     // obiekt Audio

  // Uruchom skaner po pierwszym tapnięciu (wymagane na iOS)
  const startScanner = () => {
    setCameraActive(true);
    setPermissionAsked(true);
  };

  // Po zeskanowaniu kodu QR
  const handleScan = (results) => {
    if (results?.length > 0) {
      const qrValue = results[0]?.rawValue?.trim();

      // zakładamy, że w QR jest dokładna nazwa pliku bez .mp3, np. "despacito"
      if (qrValue && qrValue !== currentSong) {
        playSong(qrValue);
      }
    }
  };

  // Odtwarzanie utworu
  const playSong = (songName) => {
    // Zatrzymaj poprzedni (jeśli był)
    if (audioObj) {
      audioObj.pause();
      audioObj.currentTime = 0;
    }

    const audio = new Audio(`/audio/${songName}.mp3`);
    audio.loop = false;

    audio.play().catch((err) => {
      alert("Nie udało się odtworzyć piosenki: " + err.message);
    });

    setAudioObj(audio);
    setCurrentSong(songName);
    setCameraActive(false); // chowamy skaner
  };

  // Zatrzymaj odtwarzanie i wróć do skanera
  const stopAndReturn = () => {
    if (audioObj) {
      audioObj.pause();
      audioObj.currentTime = 0;
      setAudioObj(null);
    }
    setCurrentSong(null);
    setCameraActive(true); // wracamy do skanera
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Czytnik QR → Odtwarzacz</h1>

        {/* Ekran startowy – wymagany gest na iOS */}
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
            <p className="info">Nakieruj kamerę na kod QR z nazwą piosenki</p>
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