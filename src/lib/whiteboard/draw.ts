import { WhiteboardCommand } from "./types";

export function createDrawing(name: string): WhiteboardCommand[] {
  switch (name.toLowerCase()) {
    case "square":
      return [
        {
          type: "square",
          x: 120,
          y: 80,
          size: 150,
        },
      ];

    case "circle":
      return [
        {
          type: "circle",
          x: 200,
          y: 160,
          radius: 75,
        },
      ];

    case "triangle":
      return [
        {
          type: "triangle",
          x: 200,
          y: 60,
          size: 140,
        },
      ];

    case "rectangle":
      return [
        {
          type: "rectangle",
          x: 80,
          y: 100,
          width: 220,
          height: 120,
        },
      ];

    case "line":
      return [
        {
          type: "line",
          x1: 50,
          y1: 150,
          x2: 350,
          y2: 150,
        },
      ];

    default:
      return [];
  }
}