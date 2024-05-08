import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeofColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(lenght) {
    return Math.floor(Math.random() * lenght);
  }

  function hendleCreateRandomhexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }
  function hendleCreateRandomrgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r} , ${g}, ${b})`);
  }
  useEffect(() => {
    if (typeofColor === "rgb") hendleCreateRandomrgbColor();
    else hendleCreateRandomhexColor();
  }, [typeofColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeofColor === "hex"
            ? hendleCreateRandomhexColor
            : hendleCreateRandomrgbColor
        }
      >
        Genrate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "90px",
        }}
      >
        <h3>{typeofColor === "rgb" ? "RGB color" : "HEX Coor"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
