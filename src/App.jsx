import react, { useState } from 'react';
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";


function App() {
  const [textToCopy,settextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy)

   const startListening = () => SpeechRecognition.startListening({ continuous: true , language:'en-IN'})
   const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();


  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <>
      <div className="container">
        <h2>Speech to Text Converter</h2><br />
        <p>React hook that converts seech from to text and makes it available to your componenets.</p>
      </div>

      <div className="main-content" onClick={()=>settextToCopy(transcript)}>
        {transcript}
      </div>

      <div className="btn-style">
      <button onClick={setCopied}>
      {isCopied ? "Copied" : "Copy"}
    </button>
        <button className="btn-style2" onClick={startListening}>Start Listening</button>
        <button className="btn-style2"  onClick={SpeechRecognition.stopListening}>Stop Listening</button>
         
      </div>

    </>
  )
}

export default App
