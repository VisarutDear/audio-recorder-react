import MicRecorder from 'mic-recorder-to-mp3';
import {useState, useEffect, useMemo} from 'react';

function App() {
  // const recorder = useMemo(() => new MicRecorder({bitRate: 128}), []);
  // const [micState, setMicState] = useState({
  //   isRecording: false,
  //   blobURL: '',
  //   isBlocked: false,
  // });

  // useEffect(() => {
  //   navigator.mediaDevices.getUserMedia(
  //     {audio: true},
  //     () => {
  //       console.log('Permission Granted');
  //       setMicState({...micState, isBlocked: false});
  //     },
  //     () => {
  //       console.log('Permission Denied');
  //       setMicState({...micState, isBlocked: true});
  //     }
  //   );
  // }, []);

  // const start = () => {
  //   if (micState.isBlocked) {
  //     console.log('Permission Denied');
  //   } else {
  //     console.log('Recording');
  //     recorder
  //       .start()
  //       .then(() => {
  //         setMicState({...micState.isRecording, isRecording: true});
  //       })
  //       .catch(e => console.log(e));
  //   }
  // };

  // const stop = () => {
  //   recorder
  //     .stop()
  //     .getMp3()
  //     .then(([buffer, blob]) => {
  //       // const blobURL = URL.createObjectURL(blob);
  //       console.log(buffer, blob);
  //       const file = new File(buffer, 'music.mp3', {
  //         type: blob.type,
  //         lastModified: Date.now(),
  //       });
  //       const li = document.createElement('li');
  //       const player = new Audio(URL.createObjectURL(file));
  //       player.controls = true;
  //       li.appendChild(player);
  //       document.querySelector('#playlist').appendChild(li);
  //       setMicState({...micState, isRecording: false});
  //     })
  //     .catch(e => console.log(e));
  // };

  return (
    <>
      <h1>dear</h1>
      {/* <button onClick={start} disabled={micState.isRecording}>
        Record
      </button>
      <button onClick={stop} disabled={!micState.isRecording}>
        Stop
      </button>
      <ul id="playlist"></ul> */}
    </>
  );
}

export default App;
