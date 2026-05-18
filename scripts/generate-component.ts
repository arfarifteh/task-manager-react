#!/usr/bin/env node
/**
 * Component Generator Script
 *
 * Creates a new component inside a feature following ARCHITECTURE.md Rule 2 & Rule 4.
 *
 * Usage:
 *   pnpm generate:component <feature-name> <ComponentName>
 *
 * Example:
 *   pnpm generate:component tasks TaskCard
 *
 * Output:
 *   src/features/tasks/components/TaskCard.tsx
 *   src/features/tasks/components/TaskCard.test.tsx
 */

import * as fs from 'node:fs';
import * as path from 'node:path';

const FEATURES_DIR = path.resolve(import.meta.dirname, '..', 'src', 'features');

function createFile(filePath: string, content: string): void {
  const dir = path.dirname(filePath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`  ✓ ${path.relative(process.cwd(), filePath)}`);
}

function generateComponent(featureName: string, componentName: string): void {
  const featureDir = path.join(FEATURES_DIR, featureName);

  if (!fs.existsSync(featureDir)) {
    console.error(`\n❌ Feature "${featureName}" does not exist.`);
    console.error(`   Run: pnpm generate:feature ${featureName}\n`);
    process.exit(1);
  }

  const componentFile = path.join(
    featureDir,
    'components',
    `${componentName}.tsx`
  );

  if (fs.existsSync(componentFile)) {
    console.error(
      `\n❌ Component "${componentName}" already exists in "${featureName}".\n`
    );
    process.exit(1);
  }

  console.log(
    `\n🧩 Generating component: ${componentName} in ${featureName}\n`
  );

  // Component file
  createFile(
    componentFile,
    [
      `import { FcBox, FcTypography } from '@/components/ui';`,
      ``,
      `export function ${componentName}({ }: ${componentName}Props) {`,
      `  // 1. Hooks`,
      ``,
      `  // 2. Derived state`,
      ``,
      `  // 3. Event handlers`,
      ``,
      `  // 4. Early returns`,
      ``,
      `  // 5. Render`,
      `  return (`,
      `    <FcBox>`,
      `      <FcTypography>${componentName}</FcTypography>`,
      `    </FcBox>`,
      `  );`,
      `}`,
      ``,
      `interface ${componentName}Props {`,
      `  // Define props here`,
      `}`,
      ``,
    ].join('\n')
  );

  // Test file
  createFile(
    path.join(featureDir, 'components', `${componentName}.test.tsx`),
    [
      `import { render, screen } from '@testing-library/react';`,
      `import { describe, expect, it } from 'vitest';`,
      ``,
      `import { ${componentName} } from './${componentName}';`,
      ``,
      `describe('${componentName}', () => {`,
      `  it('renders without crashing', () => {`,
      `    render(<${componentName} />);`,
      ``,
      `    expect(screen.getByText('${componentName}')).toBeInTheDocument();`,
      `  });`,
      `});`,
      ``,
    ].join('\n')
  );

  // Update barrel export
  const barrelPath = path.join(featureDir, 'components', 'index.ts');
  const barrelContent = fs.existsSync(barrelPath)
    ? fs.readFileSync(barrelPath, 'utf-8')
    : '';
  const exportLine = `export { ${componentName} } from './${componentName}';\n`;

  if (!barrelContent.includes(exportLine)) {
    fs.writeFileSync(barrelPath, barrelContent + exportLine, 'utf-8');
    console.log(`  ✓ Updated components/index.ts barrel export`);
  }

  console.log(
    `\n✅ Component "${componentName}" created in feature "${featureName}"\n`
  );
}

// --- Main ---
const featureName = process.argv[2];
const componentName = process.argv[3];

if (!featureName || !componentName) {
  console.error('\n❌ Missing arguments.\n');
  console.error(
    'Usage: pnpm generate:component <feature-name> <ComponentName>\n'
  );
  console.error('Example: pnpm generate:component tasks TaskCard\n');
  process.exit(1);
}

// Validate component name (PascalCase)
if (!/^[A-Z][a-zA-Z0-9]*$/.test(componentName)) {
  console.error('\n❌ Component name must be PascalCase.');
  console.error(`   Got: "${componentName}"\n`);
  console.error('Examples: TaskCard, StatsRow, QuickAddForm\n');
  process.exit(1);
}

generateComponent(featureName, componentName);
