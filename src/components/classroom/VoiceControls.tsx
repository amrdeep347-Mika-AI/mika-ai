"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  onTranscript: (text: string) => void;
}

export default function VoiceControls({ onTranscript }: Props) {
  const recognitionRef = useRef<any>(null);

  const [supported, setSupported] = useState(true);
  const [listening, setListening] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setSupported(false);
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
recognition.onstart = () => {
  console.log("🎤 Recognition Started");
};

recognition.onaudiostart = () => {
  console.log("🔊 Audio Start");
};

recognition.onsoundstart = () => {
  console.log("📢 Sound Start");
};

recognition.onspeechstart = () => {
  console.log("🗣 Speech Start");
};

recognition.onspeechend = () => {
  console.log("🗣 Speech End");
};

recognition.onsoundend = () => {
  console.log("📢 Sound End");
};

recognition.onaudioend = () => {
  console.log("🔊 Audio End");
};

recognition.onend = () => {
  console.log("🔴 Recognition End");
  listeningRef.current = false;
  setListening(false);
};

recognition.onerror = (e: any) => {
  console.log("❌ Error:", e.error);
};

recognition.onresult = (event: any) => {
  console.log("✅ RESULT", event.results);

  const text = Array.from(event.results)
    .map((r: any) => r[0].transcript)
    .join(" ");

  console.log("Recognized:", text);

  onTranscript(text);
};
    recognition.onstart = () => {
      console.log("🎤 Started");
      setListening(true);
    };

    recognition.onend = () => {
      console.log("🔴 Ended");
      setListening(false);
    };

    recognition.onresult = (event: any) => {
      console.log("Speech Result:", event.results);

      const transcript = event.results[0][0].transcript;

      console.log("🗣 You said:", transcript);

      onTranscript(transcript);
    };

    recognition.onerror = (event: any) => {
      console.log("Speech Error:", event.error);

      setListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, [onTranscript]);

  async function startListening() {
    if (!recognitionRef.current) return;

    if (listening) return;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      console.log("🎤 Microphone connected", stream);

      stream.getTracks().forEach((track) => track.stop());

      recognitionRef.current.start();
    } catch (err) {
      console.error("❌ Microphone error:", err);
    }
  }

  if (!supported) {
    return (
      <div className="rounded-xl bg-red-100 p-4 text-red-700">
        Your browser doesn't support Speech Recognition.
        Please use Google Chrome or Microsoft Edge.
      </div>
    );
  }

  return (
    <button
      onClick={startListening}
      disabled={listening}
      className={`rounded-xl px-6 py-3 font-semibold text-white transition ${
        listening
          ? "bg-red-600 animate-pulse"
          : "bg-green-600 hover:bg-green-700"
      }`}
    >
      {listening ? "🎙 Listening..." : "🎤 Speak to Mika"}
    </button>
  );
}