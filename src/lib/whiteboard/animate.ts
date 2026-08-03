import { WhiteboardCommand } from "./types";
import { animateStroke } from "./strokeAnimator";

export async function animateDrawing(
  existing: WhiteboardCommand[],
  incoming: WhiteboardCommand[],
  onFrame: (commands: WhiteboardCommand[]) => void
) {
  const visible = [...existing];

  for (const command of incoming) {
    // Add a placeholder for the new shape
    visible.push(command);

    const index = visible.length - 1;

    await animateStroke(command, (updatedCommand) => {
      visible[index] = updatedCommand;

      onFrame([...visible]);
    });

    await new Promise((resolve) =>
      setTimeout(resolve, 150)
    );
  }
}