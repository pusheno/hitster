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

    const songs = {
    song1: "https://www.dropbox.com/scl/fi/kqnjc4mkwiah8o2n631km/song1.mp3?raw=1",
    song23: "https://www.dropbox.com/scl/fi/kqnjc4mkwiah8o2n631km/song1.mp3?raw=1",
    song321: "https://www.dropbox.com/scl/fi/p514t4jpshw1qum1ggyqq/song321.mp3?raw=1",
    song323: "https://www.dropbox.com/scl/fi/bu18q2qkq2vdixe70liyt/song323.mp3?raw=1",
    };
    
    //const audio = new Audio(`/audio/${songName}.mp3`);
    const audio = new Audio(songs[songName]);
    audio.loop = false;

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
    <div className="App cwel">
    cwel
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
                Odtwórzzzzzz2 ▶
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
