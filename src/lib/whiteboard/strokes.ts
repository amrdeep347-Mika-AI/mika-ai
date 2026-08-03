export interface StrokeFrame {
  progress: number;
}

export function createCircleFrames(
  radius: number,
  step = 6
): StrokeFrame[] {
  const frames: StrokeFrame[] = [];

  for (let angle = step; angle <= 360; angle += step) {
    frames.push({
      progress: angle / 360,
    });
  }

  return frames;
}

export function createSquareFrames(
  step = 0.05
): StrokeFrame[] {
  const frames: StrokeFrame[] = [];

  for (let p = step; p <= 1; p += step) {
    frames.push({
      progress: Math.min(p, 1),
    });
  }

  return frames;
}

export function createRectangleFrames(
  step = 0.05
): StrokeFrame[] {
  const frames: StrokeFrame[] = [];

  for (let p = step; p <= 1; p += step) {
    frames.push({
      progress: Math.min(p, 1),
    });
  }

  return frames;
}