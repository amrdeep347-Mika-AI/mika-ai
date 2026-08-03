"use client";

interface Props {
  question: string;
  loading: boolean;
  onChange: (value: string) => void;
  onAsk: () => void;
}

export default function AskMika({
  question,
  loading,
  onChange,
  onAsk,
}: Props) {
  return (
    <div className="mt-10 rounded-2xl border bg-white p-6 shadow">

      <h2 className="text-xl font-bold mb-4">
        🤖 Ask Mika
      </h2>

      <textarea
        rows={3}
        value={question}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ask anything about this lesson..."
        className="w-full rounded-xl border p-4"
      />

      <button
        onClick={onAsk}
        disabled={loading || !question.trim()}
        className="mt-4 rounded-xl bg-indigo-600 px-6 py-3 text-white"
      >
        {loading ? "Thinking..." : "Ask Mika"}
      </button>

    </div>
  );
}