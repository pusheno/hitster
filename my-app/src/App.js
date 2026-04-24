import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import "./App.css";

function App() {
  const [cameraActive, setCameraActive] = useState(false);
  const [permissionAsked, setPermissionAsked] = useState(false);

  const [currentSong, setCurrentSong] = useState(null); // aktualnie odtwarzana piosenka
  const [pendingSong, setPendingSong] = useState(null); // piosenka znaleziona, czeka na odtwarzanie
  const [audioObj, setAudioObj] = useState(null); // obiekt Audio

  // Uruchom skaner po pierwszym tapnięciu (wymagane na iOS)
  const startScanner = () => {
    setCameraActive(true);
    setPermissionAsked(true);
  };

  // Po zeskanowaniu kodu QR
  const handleScan = (results) => {
    if (results?.length > 0) {
      const qrValue = results[0]?.rawValue?.trim();
      if (qrValue && qrValue !== currentSong && qrValue !== pendingSong) {
        setPendingSong(qrValue);
        setCameraActive(false); // chowamy skaner
      }
    }
  };

  // Odtwarzanie utworu (wywoływane tylko po tapnięciu w przycisk)
  const playSong = (songName) => {
    // Zatrzymaj poprzedni utwór, jeśli był
    if (audioObj) {
      audioObj.pause();
      audioObj.currentTime = 0;
    }

    const songs = {
    song1: "https://www.dropbox.com/scl/fi/kqnjc4mkwiah8o2n631km/song1.mp3?raw=1",
    song321: "https://www.dropbox.com/scl/fi/p514t4jpshw1qum1ggyqq/song321.mp3?raw=1",
    song323: "https://www.dropbox.com/scl/fi/bu18q2qkq2vdixe70liyt/song323.mp3?raw=1",
    };
    
    //const audio = new Audio(`/audio/${songName}.mp3`);
    const audio = new Audio(songs[songName]);
    audio.loop = false;

    audio.play().catch((err) => {
      alert("Nie udało się odtworzyć piosenki: " + err.message);
    });

    setAudioObj(audio);
    setCurrentSong(songName);
    setPendingSong(null); // już nie czeka
  };

  // Przycisk „Odtwórz” – uruchamia odtwarzanie
  const startPlaying = () => {
    if (pendingSong) {
      playSong(pendingSong);
    }
  };

  // Zatrzymaj odtwarzanie i wróć do skanera
  const stopAndReturn = () => {
    if (audioObj) {
      audioObj.pause();
      audioObj.currentTime = 0;
      setAudioObj(null);
    }
    setCurrentSong(null);
    setPendingSong(null);
    setCameraActive(true); // wracamy do skanera
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Czytnik QR → Odtwarzacz 3</h1>

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

        {/* Ekran po zeskanowaniu – czekanie na odtwarzanie lub odtwarzanie */}
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

            {/* Przycisk Odtwórz – widoczny tylko gdy jeszcze nie gra */}
            {pendingSong && (
              <button className="big-play-btn" onClick={startPlaying}>
                Odtwórz ▶
              </button>
            )}

            {/* Przycisk Stop – widoczny tylko gdy już gra */}
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
