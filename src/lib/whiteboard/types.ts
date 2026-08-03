export type WhiteboardCommand =
  | {
      type: "circle";
      x: number;
      y: number;
      radius: number;
      label?: string;
      speed?: number;
    }
  | {
      type: "square";
      x: number;
      y: number;
      size: number;
      label?: string;
      speed?: number;
    }
  | {
      type: "rectangle";
      x: number;
      y: number;
      width: number;
      height: number;
      label?: string;
      speed?: number;
    }
  | {
      type: "triangle";
      x: number;
      y: number;
      size: number;
      label?: string;
      speed?: number;
    }
  | {
      type: "line";
      x1: number;
      y1: number;
      x2: number;
      y2: number;
    }
  | {
      type: "text";
      x: number;
      y: number;
      value: string;
    };