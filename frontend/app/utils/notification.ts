import toast from "react-hot-toast";

const position = "bottom-right";
const duration = 5000;
const color = "#fff";
const borderRadius = "8px";

export class Notification {
  success = (text: string) => {
    return toast(text, {
      duration,
      position,
      style: {
        background: "#16be36",
        color,
        borderRadius,
      },
      icon: "✅",
    });
  };

  error = (text: string) => {
    return toast(text, {
      duration,
      position,
      style: {
        background: "#a63636",
        color,
        borderRadius,
      },
      icon: "❌",
    });
  };
  info = (text: string) => {
    return toast(text, {
      duration,
      position,
      style: {
        background: "#33ed",
        color,
        borderRadius,
      },
      icon: "ℹ️",
    });
  };

  warn = (text: string) => {
    return toast(text, {
      duration,
      position,
      style: {
        background: "#ffcc00",
        color,
        borderRadius,
      },
      icon: "⚠️",
    });
  };
}
