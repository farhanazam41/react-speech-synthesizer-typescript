import { useState } from "react";
import "./styles.css";
import VoiceSelector from "./VoiceSelector";

export default function App() {
  const [selected, setSelected] = useState(0);
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleSpeak = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const synth = window.speechSynthesis;

    let utterence = new SpeechSynthesisUtterance(text);
    utterence.voice = synth.getVoices()[selected];

    synth.speak(utterence);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="text" name="name" value={text} onChange={handleChange} />
      <VoiceSelector selected={selected} setSelected={setSelected} />
      <button type="submit" onClick={handleSpeak}>
        Submit
      </button>
    </div>
  );
}
