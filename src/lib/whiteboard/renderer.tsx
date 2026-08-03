import { WhiteboardCommand } from "./types";

function animatedStyle() {
  return {
    strokeDasharray: 1000,
    strokeDashoffset: 1000,
    animation: "draw 0.8s ease forwards",
  };
}

function textStyle() {
  return {
    opacity: 0,
    animation: "fadeIn 0.5s ease forwards",
    animationDelay: "0.6s",
    animationFillMode: "forwards" as const,
  };
}

export function renderCommand(
  command: WhiteboardCommand,
  key: number
) {
  switch (command.type) {
    case "square":
      return (
        <rect
          key={key}
          x={command.x}
          y={command.y}
          width={command.size}
          height={command.size}
          stroke="black"
          strokeWidth={4}
          fill="none"
          style={animatedStyle()}
        />
      );

    case "rectangle":
      return (
        <rect
          key={key}
          x={command.x}
          y={command.y}
          width={command.width}
          height={command.height}
          stroke="black"
          strokeWidth={4}
          fill="none"
          style={animatedStyle()}
        />
      );

    case "circle":
      return (
        <circle
          key={key}
          cx={command.x}
          cy={command.y}
          r={command.radius}
          stroke="black"
          strokeWidth={4}
          fill="none"
          style={animatedStyle()}
        />
      );

    case "triangle":
      return (
        <polygon
          key={key}
          points={`${command.x},${command.y}
                   ${command.x - command.size / 2},${command.y + command.size}
                   ${command.x + command.size / 2},${command.y + command.size}`}
          stroke="black"
          strokeWidth={4}
          fill="none"
          style={animatedStyle()}
        />
      );

    case "line":
      return (
        <line
          key={key}
          x1={command.x1}
          y1={command.y1}
          x2={command.x2}
          y2={command.y2}
          stroke="black"
          strokeWidth={4}
          style={animatedStyle()}
        />
      );

    case "text":
      return (
        <text
          key={key}
          x={command.x}
          y={command.y}
          fontSize={26}
          fontWeight="bold"
          fill="black"
          style={textStyle()}
        >
          {command.value}
        </text>
      );

    default:
      return null;
  }
}