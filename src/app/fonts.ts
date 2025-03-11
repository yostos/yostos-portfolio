// 例: src/utils/fonts.ts
export function getBerkeleyMonoFontStyles() {
  const fontUrl =
    "https://d3w0x7oesq9q1.cloudfront.net/Berkeley+Mono+Variable.woff2";

  return `
    @font-face {
      font-family: 'BerkeleyMono';
      src: url('${fontUrl}') format('woff2');
      font-display: swap;
      font-weight: 400;
      font-style: normal;
    }
  `;
}
