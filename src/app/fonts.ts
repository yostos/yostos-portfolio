// 例: src/utils/fonts.ts
export function getBerkeleyMonoFontStyles() {
  const fontUrl =
    "https://berkeley-mono.s3.ap-northeast-1.amazonaws.com/Berkeley+Mono+Variable.woff2";

  return `
    @font-face {
      font-family: 'BerkeleyMono';
      src: url('${fontUrl}') format('woff2');
      font-display: swap;
      font-weight: 100 900;
      font-style: normal;
    }
  `;
}
