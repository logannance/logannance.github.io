export type RGB = {
    r: number,
    g: number,
    b: number,
};
  
export type HSL = {
    h: number,
    s: number,
    l: number
};

export function rgbToHsl(rgb: RGB): HSL {
    rgb.r /= 255;
    rgb.g /= 255;
    rgb.b /= 255;
    let {max, min} = maxAndMin(rgb.r, rgb.g, rgb.b);
    let l = (max + min) / 2;
    let s = calcSaturation(max, min, l);
    let h = calcHue(rgb, max, min);
    return { h, s, l };
}

export function parseHexToRgb(hex: string): RGB | null {
    if (hex.length < 6) {
        return null;
    }

    let start = hex.length == 6 ? 0 : 1;
    let digitVals = Array<number>(6);

    for (let i = 0; i < 6; i++) {
        let val = parseHexDigit(hex[start + i]);

        if (val == null) {
        return null;
        }

        digitVals[i] = val;
    }

    return {
        r: digitVals[0] * 16 + digitVals[1],
        g: digitVals[2] * 16 + digitVals[3],
        b: digitVals[4] * 16 + digitVals[5]
    };
}
  
  function maxAndMin(a: number, b: number, c: number)
    : { max: number, min: number }
  {
    if (a >= b) {
      if (b >= c) {
        return { max: a, min: c };
      }
  
      if (a >= c) {
        return { max: a, min: b };
      }
  
      return { max: c, min: b};
    }
  
    if (a >= c) {
      return { max: b, min: c };
    }
  
    if (b >= c) {
      return { max: b, min: a};
    }
  
    return { max: c, min: a };
  }
  
  function calcHue(rgb: RGB, max: number, min: number): number {
    if (max === min) {
      return 0;
    }
  
    let h: number;
  
    if (max === rgb.r) {
      h = (rgb.g - rgb.b) / (max - min);
    } else if (max === rgb.g) {
      h = 2 + (rgb.b - rgb.r) / (max - min);
    } else {
      h = 4 + (rgb.r - rgb.g) / (max - min);
    }
  
    if (h < 0) {
      h += 360;
    }
  
    h *= 60;
    return h;
  }
  
  function calcSaturation(max: number, min: number, l: number): number {
    if (max === min) {
      return 0;
    }
    
    if (l <= 0.5) {
      return (max - min) / (max + min);
    }
  
    return (max - min) / (2 - max - min);
  }
  

  
  function parseHexDigit(c: string): number | null  {
    let val = c.charCodeAt(0);
  
    if (val > 47 && val < 58) {
      return val - 48;
    }
  
    if (val > 64 && val < 71) {
      // captial hex letter
      return val - 55;
    }
  
    if (val > 96 && val < 103) {
      // lowercase hex letter
      return val - 87;
    }
  
    return null;
  }