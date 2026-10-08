// A slightly irregular pebble outline centred on (cx, cy), half-width a, half-height b.
// skew pushes the top-right shoulder up a touch so stacked stones don't look stamped out.
export function stonePath(cx, cy, a, b, skew = 0.08) {
  const top = cy - b;
  const bot = cy + b;
  return [
    `M ${cx - a} ${cy + b * 0.08}`,
    `C ${cx - a} ${cy - b * 0.9}, ${cx - a * 0.42} ${top}, ${cx + a * 0.05} ${top - b * skew}`,
    `C ${cx + a * 0.56} ${top - b * skew}, ${cx + a} ${cy - b * 0.82}, ${cx + a} ${cy - b * 0.02}`,
    `C ${cx + a} ${cy + b * 0.86}, ${cx + a * 0.44} ${bot}, ${cx - a * 0.04} ${bot}`,
    `C ${cx - a * 0.52} ${bot}, ${cx - a} ${cy + b * 0.92}, ${cx - a} ${cy + b * 0.08}`,
    'Z',
  ].join(' ');
}
