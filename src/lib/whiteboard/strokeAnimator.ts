import { WhiteboardCommand } from "./types";

export async function animateStroke(
  command: WhiteboardCommand,
  onFrame: (cmd: WhiteboardCommand) => void
) {
  switch (command.type) {
    case "circle":
      await animateCircle(command, onFrame);
      break;

    case "square":
      await animateSquare(command, onFrame);
      break;

    case "rectangle":
      await animateRectangle(command, onFrame);
      break;

    default:
      onFrame(command);
  }
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function animateCircle(
  command: any,
  onFrame: (cmd: WhiteboardCommand) => void
) {
  for (let i = 5; i <= command.radius; i += 5) {
    onFrame({
      ...command,
      radius: i,
    });

    await sleep(20);
  }
}

async function animateSquare(
  command: any,
  onFrame: (cmd: WhiteboardCommand) => void
) {
  for (let i = 10; i <= command.size; i += 10) {
    onFrame({
      ...command,
      size: i,
    });

    await sleep(20);
  }
}

async function animateRectangle(
  command: any,
  onFrame: (cmd: WhiteboardCommand) => void
) {
  for (let i = 10; i <= command.width; i += 10) {
    onFrame({
      ...command,
      width: i,
    });

    await sleep(20);
  }
}