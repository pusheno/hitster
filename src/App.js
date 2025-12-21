import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import "./App.css";

function App() {
  const [cameraActive, setCameraActive] = useState(false);
  const [permissionAsked, setPermissionAsked] = useState(false);

  const [currentSong, setCurrentSong] = useState(null);
  const [pendingSong, setPendingSong] = useState(null);
  const [audioObj, setAudioObj] = useState(null);

  const startScanner = () => {
    setCameraActive(true);
    setPermissionAsked(true);
  };

  const handleScan = (results) => {
    if (results?.length > 0) {
      const qrValue = results[0]?.rawValue?.trim();
      if (qrValue && qrValue !== currentSong && qrValue !== pendingSong) {
        setPendingSong(qrValue);
        setCameraActive(false);
      }
    }
  };

  const playSong = (songName) => {
    if (audioObj) {
      audioObj.pause();
      audioObj.currentTime = 0;
    }

    const audio = new Audio(`/hitster/public/audio/${songName}.mp3`); // <<< ważne: /hitster/
    audio.loop = false;

    audio.play().catch((err) => {
      alert("Nie udało się odtworzyć piosenki: " + err.message);
    });

    setAudioObj(audio);
    setCurrentSong(songName);
    setPendingSong(null);
  };

  const startPlaying = () => {
    if (pendingSong) {
      playSong(pendingSong);
    }
  };

  const stopAndReturn = () => {
    if (audioObj) {
      audioObj.pause();
      audioObj.currentTime = 0;
      setAudioObj(null);
    }
    setCurrentSong(null);
    setPendingSong(null);
    setCameraActive(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Czytnik QR → Odtwarzacz</h1>

        {!permissionAsked && (
          <div className="start-screen">
            <p>Naciśnij przycisk, aby uruchomić skaner</p>
            <button className="big-start-btn" onClick={startScanner}>
              Uruchom skaner
            </button>
          </div>
        )}

        {permissionAsked && !currentSong && !pendingSong && cameraActive && (
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

        {(pendingSong || currentSong) && (
          <div className="player-screen">
            <h2>{currentSong ? "Teraz gra:" : "Znaleziona piosenka:"}</h2>
            <h3
              style={{
                wordBreak: "break-all",
                margin: "20px 0",
                fontSize: "1.8em",
              }}
            >
              {pendingSong || currentSong}
            </h3>

            {pendingSong && (
              <button className="big-play-btn" onClick={startPlaying}>
                Odtwórz ▶
              </button>
            )}

            {currentSong && (
              <button className="stop-btn" onClick={stopAndReturn}>
                Stop i wróć do skanera
              </button>
            )}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;