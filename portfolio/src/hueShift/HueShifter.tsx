import { FormEvent, useState, UIEvent } from "react";
import './HueShifter.css';
import { parseHexToRgb, RGB } from "./colorFormats";
import * as colors from "./colorFormats";

enum Format {
  Hex,
  RGB,
  HSL
}

function HueShifter() {
  const [hex, setHex] = useState<string>();
  const [red, setRed] = useState<number>();
  const [green, setGreen] = useState<number>();
  const [blue, setBlue] = useState<number>();
  const [hue, setHue] = useState<number>();
  const [saturation, setSaturation] = useState<number>();
  const [lightness, setLightness] = useState<number>();
  const [format, setFormat] = useState<Format>(Format.Hex);

  function updateHex(input: string): void {
    setHex(input);
    const rgb = colors.parseHexToRgb(input);
    
    if (rgb) {
      setRed(rgb.r);
      setGreen(rgb.g);
      setBlue(rgb.b);
      const hsl = colors.rgbToHsl(rgb);
      setHue(hsl.h);
      setSaturation(hsl.s);
      setLightness(hsl.l);
    }
  }
  return (
    <>
    <div className="formatButtons">
        <a
          className={format == Format.Hex ? "selectedFormat" : ""}
          onClick={() => setFormat(Format.Hex)}
        >
          Hex
        </a>
        <a
          className={format == Format.RGB ? "selectedFormat" : ""}
          onClick={() => setFormat(Format.RGB)}
        >
          RGB
        </a>
        <a
          className={format == Format.HSL ? "selectedFormat" : ""}
          onClick={() => setFormat(Format.HSL)}
        >
          HSL
        </a>
    </div>
    <label htmlFor="hexInput">Hex </label>
    <input
      id="hexInput"
      type="text"
      onInput={(e: FormEvent<HTMLInputElement>) => updateHex(e.currentTarget.value)}
      value={hex}
    ></input>
    <br></br>

    <label htmlFor="rInput">R </label>
    <input
      id="rInput"
      type="text"
      onInput={(e: FormEvent<HTMLInputElement>) => console.log("red")}
      value={red}
    ></input>
    <label htmlFor="gInput"> G </label>
    <input
      id="gInput"
      type="text"
      onInput={(e: FormEvent<HTMLInputElement>) => console.log("green")}
      value={green}
    ></input>
    <label htmlFor="bInput"> B </label>
    <input
      id="bInput"
      type="text"
      onInput={(e: FormEvent<HTMLInputElement>) => console.log("blue")}
      value={blue}
    ></input>
    <br></br>

    <label htmlFor="hInput">H </label>
    <input
      id="hInput"
      type="text"
      onInput={(e: FormEvent<HTMLInputElement>) => console.log("hue")}
    ></input>
    <label htmlFor="hInput"> S </label>
    <input
      id="sInput"
      type="text"
      onInput={(e: FormEvent<HTMLInputElement>) => console.log("saturation")}
    ></input>
    <label htmlFor="hInput"> L </label>
    <input
      id="lInput"
      type="text"
      onInput={(e: FormEvent<HTMLInputElement>) => console.log("lightness")}
    ></input>
    </>
  );
}

function updateRGB(): void {

}

function updateHSL(): void {

}

export default HueShifter;