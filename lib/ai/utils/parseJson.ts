export function parseJson<T>(text: string): T {
  try {
    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleaned) as T;
  } catch (error) {
    console.error("Failed to parse Gemini response:", text);
    throw new Error("Invalid JSON returned by Gemini.");
  }
}