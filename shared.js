// 蒲公英圖形：跟主視覺同一套造型（放射枝條、末端水滴、中心米粉色圓心加橘色星芒）
window.IM15Art = (function () {
  const rad = d => (d * Math.PI) / 180;
  const pt = (r, a) => [r * Math.cos(rad(a)), r * Math.sin(rad(a))];
  const f = n => n.toFixed(1);

  function dandelion(opts) {
    const o = Object.assign({ stems: 14, color: '#F4ECE3', heart: '#F6E3DA', star: '#E95B21', rot: 0 }, opts);
    let lines = '', dots = '';
    for (let i = 0; i < o.stems; i++) {
      const a = o.rot + (360 / o.stems) * i;
      const [x0, y0] = pt(17, a);
      const fork = i % 2 ? 58 : 50;
      const [x1, y1] = pt(fork, a);
      lines += `<line x1="${f(x0)}" y1="${f(y0)}" x2="${f(x1)}" y2="${f(y1)}"/>`;
      const spread = i % 2 ? [-15, 15] : [-20, 0, 20];
      spread.forEach(s => {
        const len = s === 0 ? 92 : 86;
        const [x2, y2] = pt(len, a + s * 0.55);
        lines += `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}"/>`;
        const [x3, y3] = pt(len + 3.5, a + s * 0.55);
        dots += `<ellipse cx="${f(x3)}" cy="${f(y3)}" rx="4.6" ry="6.4" transform="rotate(${f(a + s * 0.55 + 90)} ${f(x3)} ${f(y3)})"/>`;
      });
    }
    let star = '';
    for (let i = 0; i < 4; i++) {
      const [x, y] = pt(8, i * 45), [x2, y2] = pt(-8, i * 45);
      star += `<line x1="${f(x)}" y1="${f(y)}" x2="${f(x2)}" y2="${f(y2)}"/>`;
    }
    return `<svg viewBox="-104 -104 208 208" aria-hidden="true">
      <g stroke="${o.color}" stroke-width="3.6" stroke-linecap="round" fill="none">${lines}</g>
      <g fill="${o.color}">${dots}</g>
      <circle r="16" fill="${o.heart}"/>
      <g stroke="${o.star}" stroke-width="1.8" stroke-linecap="round">${star}</g>
    </svg>`;
  }

  // 單顆飄散的種子（Y 字形，三個水滴）
  function seed(color) {
    const c = color || '#F4ECE3';
    return `<svg viewBox="-24 -46 48 92" aria-hidden="true">
      <g stroke="${c}" stroke-width="3.2" stroke-linecap="round" fill="none">
        <line x1="0" y1="42" x2="0" y2="-6"/><line x1="0" y1="-6" x2="-13" y2="-30"/><line x1="0" y1="-6" x2="13" y2="-30"/><line x1="0" y1="-6" x2="0" y2="-33"/>
      </g>
      <g fill="${c}">
        <ellipse cx="-15" cy="-35" rx="4.2" ry="6" transform="rotate(-28 -15 -35)"/>
        <ellipse cx="15" cy="-35" rx="4.2" ry="6" transform="rotate(28 15 -35)"/>
        <ellipse cx="0" cy="-39" rx="4.2" ry="6"/>
      </g>
    </svg>`;
  }

  return { dandelion, seed };
})();
