export const hexToHSL = (hex) => {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
        r = "0x" + hex[1] + hex[1];
        g = "0x" + hex[2] + hex[2];
        b = "0x" + hex[3] + hex[3];
    } else if (hex.length === 7) {
        r = "0x" + hex[1] + hex[2];
        g = "0x" + hex[3] + hex[4];
        b = "0x" + hex[5] + hex[6];
    }
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    if (delta === 0)
        h = 0;
    else if (cmax === r)
        h = ((g - b) / delta) % 6;
    else if (cmax === g)

        h = (b - r) / delta + 2;
    else
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0)
        h += 360;

    l = (cmax + cmin) / 2;

    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // s = +(s * 100).toFixed(1);
    s = Math.round(s * 100)
    // l = +(l * 100).toFixed(1);
    l = Math.round(l * 100)

    const hslObject = { h, s, l };
    return hslObject;
    // return `hsl(${h},${s},${l})`;

}

export function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}


export const getMonochromaticColors = (color) => {
    let hsl = hexToHSL(color);
    let hslArr = hsl.split(",");
    let h = hslArr[0].replace("hsl(", "");
    let s = hslArr[1]
    let l = hslArr[2]
    let colors = [];
    for (let i = 0; i < 5; i++) {
        colors.push(hslToHex(h, s, l));
        l = parseInt(l) + 10;
    }
    return colors;
}

export const themeAnalogue = (color) => {
    const primary = hexToHSL(color);
    const secondary = { h: primary.h + 180, s: primary.s, l: primary.l };
    const tertiary = { h: primary.h + 90, s: primary.s, l: primary.l };
    const quaternary = { h: primary.h + 270, s: primary.s, l: primary.l };
    const quinary = { h: primary.h + 45, s: primary.s, l: primary.l };
    const bg = { h: primary.h + 180, s: primary.s, l: primary.l };
    const bg2 = { h: primary.h + 180, s: primary.s, l: primary.l };
    const text = { h: primary.h + 180, s: primary.s, l: primary.l };
    const text2 = { h: primary.h + 180, s: primary.s, l: primary.l };
    return {
        primaryColor: hslToHex(primary.h, primary.s, primary.l),
        secondaryColor: hslToHex(secondary.h, secondary.s, secondary.l),
        tertiaryColor: hslToHex(tertiary.h, tertiary.s, tertiary.l),
        quaternaryColor: hslToHex(quaternary.h, quaternary.s, quaternary.l),
        quinaryColor: hslToHex(quinary.h, quinary.s, quinary.l),
        backgroundColor: hslToHex(bg.h, bg.s, bg.l),
        backgroundColor2: hslToHex(bg2.h, bg2.s, bg2.l),
        textColor: hslToHex(text.h, text.s, text.l),
        textColor2: hslToHex(text2.h, text2.s, text2.l),
    }
}


export const theme2 = (color) => {
    const primary = hexToHSL(color);
    const secondary = { h: primary.h + 30, s: primary.s + 10, l: primary.l };
    const tertiary = { h: primary.h - 30, s: primary.s - 10, l: primary.l };
    const quaternary = { h: primary.h + 60, s: primary.s + 20, l: primary.l };
    const quinary = { h: primary.h - 60, s: primary.s - 20, l: primary.l };
    const bg = { h: primary.h, s: 50, l: 98 };
    const bg2 = { h: primary.h + 180, s: primary.s, l: primary.l };
    const text = { h: primary.h + 180, s: primary.s, l: primary.l };
    const text2 = { h: primary.h + 180, s: primary.s, l: primary.l };
    return {
        primaryColor: hslToHex(primary.h, primary.s, primary.l),
        secondaryColor: hslToHex(secondary.h, secondary.s, secondary.l),
        tertiaryColor: hslToHex(tertiary.h, tertiary.s, tertiary.l),
        quaternaryColor: hslToHex(quaternary.h, quaternary.s, quaternary.l),
        quinaryColor: hslToHex(quinary.h, quinary.s, quinary.l),
        backgroundColor: hslToHex(bg.h, bg.s, bg.l),
        backgroundColor2: hslToHex(bg2.h, bg2.s, bg2.l),
        textColor: hslToHex(text.h, text.s, text.l),
        textColor2: hslToHex(text2.h, text2.s, text2.l),

    }
}