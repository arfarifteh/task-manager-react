#!/usr/bin/env node
/**
 * Feature Generator Script
 *
 * Creates a new feature directory structure following ARCHITECTURE.md Rule 1.
 *
 * Usage:
 *   pnpm generate:feature <feature-name>
 *
 * Example:
 *   pnpm generate:feature notifications
 *
 * Output:
 *   src/features/notifications/
 *   ├── components/
 *   │   └── index.ts
 *   ├── hooks/
 *   │   └── index.ts
 *   ├── services/
 *   │   └── index.ts
 *   ├── types.ts
 *   └── index.ts
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

function toCamelCase(str: string): string {
  const pascal = toPascalCase(str);

  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

function createFile(filePath: string, content: string): void {
  const dir = path.dirname(filePath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`  ✓ ${path.relative(process.cwd(), filePath)}`);
}

function generateFeature(featureName: string): void {
  const featureDir = path.join(FEATURES_DIR, featureName);

  if (fs.existsSync(featureDir)) {
    console.error(
      `\n❌ Feature "${featureName}" already exists at:\n   ${featureDir}\n`
    );
    process.exit(1);
  }

  const pascalName = toPascalCase(featureName);
  const camelName = toCamelCase(featureName);

  console.log(`\n🚀 Generating feature: ${featureName}\n`);

  // components/index.ts
  createFile(
    path.join(featureDir, 'components', 'index.ts'),
    `// ${pascalName} feature components\n// Export components as they are created\n`
  );

  // hooks/index.ts
  createFile(
    path.join(featureDir, 'hooks', 'index.ts'),
    `// ${pascalName} feature hooks\n// Export hooks as they are created\n`
  );

  // services/index.ts
  createFile(
    path.join(featureDir, 'services', 'index.ts'),
    `// ${pascalName} feature services\n// Export services as they are created\n`
  );

  // types.ts
  createFile(
    path.join(featureDir, 'types.ts'),
    `/**\n * ${pascalName} feature types\n */\n\n// Add feature-specific types here\n`
  );

  // index.ts (barrel export)
  createFile(
    path.join(featureDir, 'index.ts'),
    [
      `/**`,
      ` * ${pascalName} Feature`,
      ` *`,
      ` * @description Feature module for ${featureName} domain.`,
      ` * @see ARCHITECTURE.md Rule 1: Feature-Based Structure`,
      ` */`,
      ``,
      `export * from './components';`,
      `export * from './hooks';`,
      `export type * from './types';`,
      ``,
    ].join('\n')
  );

  console.log(`\n✅ Feature "${featureName}" created at:`);
  console.log(`   src/features/${featureName}/\n`);
  console.log(`Next steps:`);
  console.log(
    `  1. Add components: pnpm generate:component ${featureName} MyComponent`
  );
  console.log(
    `  2. Add hooks:      pnpm generate:hook ${featureName} useMyHook`
  );
  console.log(
    `  3. Add services:   pnpm generate:service ${featureName} ${camelName}Api\n`
  );
}

// --- Main ---
const featureName = process.argv[2];

if (!featureName) {
  console.error('\n❌ Missing feature name.\n');
  console.error('Usage: pnpm generate:feature <feature-name>\n');
  console.error('Example: pnpm generate:feature notifications\n');
  process.exit(1);
}

// Validate feature name (kebab-case)
if (!/^[a-z][a-z0-9-]*$/.test(featureName)) {
  console.error(
    '\n❌ Feature name must be kebab-case (lowercase letters, numbers, hyphens).'
  );
  console.error(`   Got: "${featureName}"\n`);
  console.error('Examples: notifications, user-settings, task-analytics\n');
  process.exit(1);
}

generateFeature(featureName);
