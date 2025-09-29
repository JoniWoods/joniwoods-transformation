
export default function imageLoader({ src, width, quality }) {
  const basePath = process.env.GITHUB_PAGES ? '/joniwoods-transformation' : '';
  
  // For external URLs (starting with http:// or https://), return as-is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  
  // For internal URLs, add the base path for GitHub Pages
  return `${basePath}${src}`;
}
