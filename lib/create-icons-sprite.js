const path = require('path');
const { readdirSync, readFileSync, writeFileSync } = require('fs');
const { createSVGWindow } = require('svgdom')
const window = createSVGWindow()
const document = window.document
const { SVG, registerWindow } = require('@svgdotjs/svg.js')

// register window and document
registerWindow(window, document)

const icons = readFiles(path.resolve(__dirname, '../src/components/Icon/svg'));

const fileContent = `const map = new Map<string, { id: string, viewBox: string, markup: string }>();

${icons.map(({name, id, viewBox, markup}) => `map.set("${name}", Object.freeze({ 
  id: "${id}", 
  viewBox: "${viewBox}", 
  markup: \`${markup}\`
}))`).join('\n')}

const iconsMap = {
  get(key: string) {
    return map.get(key)
  }
}

export { iconsMap };
`;

writeFileSync(
  path.resolve(__dirname, '../src/components/Icon/sprite-map.ts'), 
  fileContent,
  { encoding: 'utf-8' }
);

function readFiles(dirname) {
  const files = readdirSync(dirname);
  
  const contents = files.map(filename => {
    const content = readFileSync(path.resolve(dirname, filename), 'utf-8');
    const svg = SVG(content);

    return {
      name: filename.split('.')[0],
      viewBox: svg.node.getAttribute('viewBox'),
      id: svg.node.getAttribute('id'),
      markup: svg.node.innerHTML,
    }
  })
  
  return contents;
}
