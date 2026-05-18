#!/usr/bin/env node
/**
 * Service Generator Script
 *
 * Creates a new service/API layer inside a feature following ARCHITECTURE.md Rule 1 & Rule 4.
 *
 * Usage:
 *   pnpm generate:service <feature-name> <serviceName>
 *
 * Example:
 *   pnpm generate:service tasks taskApi
 *
 * Output:
 *   src/features/tasks/services/taskApi.ts
 *   src/features/tasks/services/taskApi.test.ts
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

function generateService(featureName: string, serviceName: string): void {
  const featureDir = path.join(FEATURES_DIR, featureName);

  if (!fs.existsSync(featureDir)) {
    console.error(`\n❌ Feature "${featureName}" does not exist.`);
    console.error(`   Run: pnpm generate:feature ${featureName}\n`);
    process.exit(1);
  }

  const serviceFile = path.join(featureDir, 'services', `${serviceName}.ts`);

  if (fs.existsSync(serviceFile)) {
    console.error(
      `\n❌ Service "${serviceName}" already exists in "${featureName}".\n`
    );
    process.exit(1);
  }

  const pascalFeature = toPascalCase(featureName);

  console.log(`\n🔌 Generating service: ${serviceName} in ${featureName}\n`);

  // Service file
  createFile(
    serviceFile,
    [
      `/**`,
      ` * ${serviceName}`,
      ` *`,
      ` * @description API/service layer for ${pascalFeature} feature.`,
      ` * @see ARCHITECTURE.md Rule 1: Feature-Based Structure`,
      ` */`,
      ``,
      `// TODO: Replace with real API calls when backend is ready`,
      ``,
      `export const ${serviceName} = {`,
      `  async getAll() {`,
      `    // return apiClient.get('/api/${featureName}');`,
      `    throw new Error('Not implemented');`,
      `  },`,
      ``,
      `  async getById(id: string) {`,
      `    // return apiClient.get(\`/api/${featureName}/\${id}\`);`,
      `    throw new Error('Not implemented');`,
      `  },`,
      ``,
      `  async create(data: unknown) {`,
      `    // return apiClient.post('/api/${featureName}', data);`,
      `    throw new Error('Not implemented');`,
      `  },`,
      ``,
      `  async update(id: string, data: unknown) {`,
      `    // return apiClient.put(\`/api/${featureName}/\${id}\`, data);`,
      `    throw new Error('Not implemented');`,
      `  },`,
      ``,
      `  async remove(id: string) {`,
      `    // return apiClient.delete(\`/api/${featureName}/\${id}\`);`,
      `    throw new Error('Not implemented');`,
      `  },`,
      `};`,
      ``,
    ].join('\n')
  );

  // Test file
  createFile(
    path.join(featureDir, 'services', `${serviceName}.test.ts`),
    [
      `import { describe, expect, it } from 'vitest';`,
      ``,
      `import { ${serviceName} } from './${serviceName}';`,
      ``,
      `describe('${serviceName}', () => {`,
      `  it('exists', () => {`,
      `    expect(${serviceName}).toBeDefined();`,
      `  });`,
      ``,
      `  it('has CRUD methods', () => {`,
      `    expect(${serviceName}.getAll).toBeDefined();`,
      `    expect(${serviceName}.getById).toBeDefined();`,
      `    expect(${serviceName}.create).toBeDefined();`,
      `    expect(${serviceName}.update).toBeDefined();`,
      `    expect(${serviceName}.remove).toBeDefined();`,
      `  });`,
      `});`,
      ``,
    ].join('\n')
  );

  // Update barrel export
  const barrelPath = path.join(featureDir, 'services', 'index.ts');
  const barrelContent = fs.existsSync(barrelPath)
    ? fs.readFileSync(barrelPath, 'utf-8')
    : '';
  const exportLine = `export { ${serviceName} } from './${serviceName}';\n`;

  if (!barrelContent.includes(exportLine)) {
    fs.writeFileSync(barrelPath, barrelContent + exportLine, 'utf-8');
    console.log(`  ✓ Updated services/index.ts barrel export`);
  }

  console.log(
    `\n✅ Service "${serviceName}" created in feature "${featureName}"\n`
  );
}

// --- Main ---
const featureName = process.argv[2];
const serviceName = process.argv[3];

if (!featureName || !serviceName) {
  console.error('\n❌ Missing arguments.\n');
  console.error('Usage: pnpm generate:service <feature-name> <serviceName>\n');
  console.error('Example: pnpm generate:service tasks taskApi\n');
  process.exit(1);
}

// Validate service name (camelCase)
if (!/^[a-z][a-zA-Z0-9]*$/.test(serviceName)) {
  console.error('\n❌ Service name must be camelCase.');
  console.error(`   Got: "${serviceName}"\n`);
  console.error('Examples: taskApi, authService, dashboardApi\n');
  process.exit(1);
}

generateService(featureName, serviceName);
