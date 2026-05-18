#!/usr/bin/env node
/**
 * Hook Generator Script
 *
 * Creates a new custom hook inside a feature following ARCHITECTURE.md Rule 3 & Rule 4.
 *
 * Usage:
 *   pnpm generate:hook <feature-name> <useHookName>
 *
 * Example:
 *   pnpm generate:hook tasks useTaskFilters
 *
 * Output:
 *   src/features/tasks/hooks/useTaskFilters.ts
 *   src/features/tasks/hooks/useTaskFilters.test.ts
 */

import * as fs from 'node:fs';
import * as path from 'node:path';

const FEATURES_DIR = path.resolve(import.meta.dirname, '..', 'src', 'features');

function toPascalCase(str: string): string {
  return str
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function createFile(filePath: string, content: string): void {
  const dir = path.dirname(filePath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`  ✓ ${path.relative(process.cwd(), filePath)}`);
}

function generateHook(featureName: string, hookName: string): void {
  const featureDir = path.join(FEATURES_DIR, featureName);

  if (!fs.existsSync(featureDir)) {
    console.error(`\n❌ Feature "${featureName}" does not exist.`);
    console.error(`   Run: pnpm generate:feature ${featureName}\n`);
    process.exit(1);
  }

  const hookFile = path.join(featureDir, 'hooks', `${hookName}.ts`);

  if (fs.existsSync(hookFile)) {
    console.error(
      `\n❌ Hook "${hookName}" already exists in "${featureName}".\n`
    );
    process.exit(1);
  }

  const pascalFeature = toPascalCase(featureName);
  const returnTypeName =
    hookName.charAt(0).toUpperCase() + hookName.slice(1) + 'Return';

  console.log(`\n🪝 Generating hook: ${hookName} in ${featureName}\n`);

  // Hook file
  createFile(
    hookFile,
    [
      `import { useState } from 'react';`,
      ``,
      `/**`,
      ` * ${hookName}`,
      ` *`,
      ` * @description Feature hook for ${pascalFeature} domain.`,
      ` * @see ARCHITECTURE.md Rule 3: State Management Strategy`,
      ` *`,
      ` * State level: Feature (LEVEL 2)`,
      ` * Escalate to global (Zustand) if 2+ features need this state.`,
      ` */`,
      `export function ${hookName}(): ${returnTypeName} {`,
      `  // State`,
      `  const [state, setState] = useState(null);`,
      ``,
      `  // Derived values`,
      ``,
      `  // Actions`,
      ``,
      `  return {`,
      `    state,`,
      `  };`,
      `}`,
      ``,
      `interface ${returnTypeName} {`,
      `  state: unknown;`,
      `}`,
      ``,
    ].join('\n')
  );

  // Test file
  createFile(
    path.join(featureDir, 'hooks', `${hookName}.test.ts`),
    [
      `import { renderHook } from '@testing-library/react';`,
      `import { describe, expect, it } from 'vitest';`,
      ``,
      `import { ${hookName} } from './${hookName}';`,
      ``,
      `describe('${hookName}', () => {`,
      `  it('returns initial state', () => {`,
      `    const { result } = renderHook(() => ${hookName}());`,
      ``,
      `    expect(result.current.state).toBeNull();`,
      `  });`,
      `});`,
      ``,
    ].join('\n')
  );

  // Update barrel export
  const barrelPath = path.join(featureDir, 'hooks', 'index.ts');
  const barrelContent = fs.existsSync(barrelPath)
    ? fs.readFileSync(barrelPath, 'utf-8')
    : '';
  const exportLine = `export { ${hookName} } from './${hookName}';\n`;

  if (!barrelContent.includes(exportLine)) {
    fs.writeFileSync(barrelPath, barrelContent + exportLine, 'utf-8');
    console.log(`  ✓ Updated hooks/index.ts barrel export`);
  }

  console.log(`\n✅ Hook "${hookName}" created in feature "${featureName}"\n`);
}

// --- Main ---
const featureName = process.argv[2];
const hookName = process.argv[3];

if (!featureName || !hookName) {
  console.error('\n❌ Missing arguments.\n');
  console.error('Usage: pnpm generate:hook <feature-name> <useHookName>\n');
  console.error('Example: pnpm generate:hook tasks useTaskFilters\n');
  process.exit(1);
}

// Validate hook name (must start with 'use')
if (!/^use[A-Z][a-zA-Z0-9]*$/.test(hookName)) {
  console.error('\n❌ Hook name must start with "use" followed by PascalCase.');
  console.error(`   Got: "${hookName}"\n`);
  console.error('Examples: useTaskFilters, useDashboard, useFormState\n');
  process.exit(1);
}

generateHook(featureName, hookName);
