const path = require('path');
const fs = require('fs');
const glob = require('glob');

glob('src/**/theme.ts', (err, files) => {
  if (err) {
    console.error(err);
  }

  const componentNames = files.map(filename => filename.replace('/theme.ts', '').split('/').pop().toLowerCase());
  const imports = files.map((filename, idx) => `import ${componentNames} from "${filename.replace('src', '../..').replace(/\.ts$/, '')}";`);

  const fileContent = `import { css } from "lit";

${imports.join('\n')}

export const components = css\`
  ${componentNames.map(name => `\${${name}}`).join('\n')}
\`;
`;

  fs.writeFileSync(
    path.resolve(__dirname, '../src/theme/components/index.ts'),
    fileContent,
    'utf-8'
  );
})