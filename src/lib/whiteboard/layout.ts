import { WhiteboardCommand } from "./types";

let nextX = 120;
let nextY = 100;

const GAP_X = 220;
const GAP_Y = 180;

const MAX_X = 700;

export function placeCommand(command: WhiteboardCommand): WhiteboardCommand {
  const placed = {
    ...command,
    x: nextX,
    y: nextY,
  };

  nextX += GAP_X;

  if (nextX > MAX_X) {
    nextX = 120;
    nextY += GAP_Y;
  }

  return placed;
}

export function resetLayout() {
  nextX = 120;
  nextY = 100;
}