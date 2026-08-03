let currentUtterance: SpeechSynthesisUtterance | null = null;

export async function speak(
  text: string,
  onStart?: () => void,
  onEnd?: () => void
) {
  return new Promise<void>((resolve) => {
    if (typeof window === "undefined") {
      resolve();
      return;
    }

    window.speechSynthesis.cancel();

    currentUtterance = new SpeechSynthesisUtterance(text);

    currentUtterance.rate = 0.95;
    currentUtterance.pitch = 1.1;
    currentUtterance.volume = 1;

    currentUtterance.onstart = () => {
      onStart?.();
    };

    currentUtterance.onend = () => {
      onEnd?.();
      resolve();
    };

    window.speechSynthesis.speak(currentUtterance);
  });
}

export function stopSpeaking() {
  window.speechSynthesis.cancel();
}