interface UseAudioRecorder {
  startRecording: () => void;
  stopRecording: () => Promise<{ audioBlob: Blob; audioUrl: string }>;
  requestPermission: () => Promise<void>;
}

URL = window.URL || window.webkitURL;

const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
let audioContext; //audio context to help us record
let gumStream: any; //stream from getUserMedia()
let rec: any; //Recorder.js object
let input; //MediaStreamAudioSourceNode we'll be recording

const constraints = { audio: true, video: false };

export function useAudioRecorder(): UseAudioRecorder {
  const requestPermission = () => {
    return new Promise<void>((resolve, reject) => {
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          gumStream = stream;
          resolve();
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  const startRecording = () => {
    audioContext = new AudioContext({
      sampleRate: 8000,
    });

    /* use the stream */
    input = audioContext.createMediaStreamSource(gumStream);

    /* 
      Create the Recorder object and configure to record mono sound (1 channel)
      Recording 2 channels  will double the file size
    */
    rec = new (global as any).Recorder(input, { numChannels: 1, mimeType: "audio/wav" });

    //start the recording process
    rec.record();
  };

  const stopRecording = () => {
    return new Promise<{ audioBlob: Blob; audioUrl: string }>((resolve) => {
      //tell the recorder to stop the recording
      rec.stop();

      //stop microphone access
      gumStream.getAudioTracks()[0].stop();

      //create the wav blob and pass it on to createDownloadLink
      rec.exportWAV((blob: Blob) => {
        const url = URL.createObjectURL(blob);
        resolve({ audioBlob: blob, audioUrl: url });
      });
    });
  };

  return {
    startRecording,
    stopRecording,
    requestPermission,
  };
}
