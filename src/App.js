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

  const audio = new Audio(
    `${process.env.PUBLIC_URL}/audio/${songName}.mp3`
  );

  audio.play().catch(err => {
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
    <div className="app-container">
      <header className="App-header">

        {!permissionAsked && (
          <div className="start-screen">
            <div className="start-btn-container">
              <button onClick={startScanner} className="start-btn">
              </button>
            </div>
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