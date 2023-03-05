import { useState, useEffect } from "react";

type VoiceSelectorProps = {
  selected: number;
  setSelected: (selectedIndex: number) => void;
};

const synth = window.speechSynthesis;

const VoiceSelector = ({ selected = 0, setSelected }: VoiceSelectorProps) => {
  const [voiceList, setVoiceList] = useState<SpeechSynthesisVoice[]>([]);
  console.log(selected, "selected");
  useEffect(() => {
    const populateVoiceList = () => {
      const voices = synth.getVoices();
      setVoiceList(voices);
    };
    populateVoiceList();
  }, []);

  return (
    <div>
      <select value={selected} onChange={(e) => setSelected(+e.target.value)}>
        <option>Please select voice</option>
        {voiceList?.map((voice, index) => {
          return (
            <option key={index} value={index}>
              {voice.name} - {voice.lang}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default VoiceSelector;
