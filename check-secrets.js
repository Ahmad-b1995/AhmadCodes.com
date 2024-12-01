const { execSync } = require('child_process');

try {
  const result = execSync('git diff --cached', { encoding: 'utf-8' });

  const sensitivePatterns = [
    /password\s*=\s*['"].+['"]/i,
    /secret\s*=\s*['"].+['"]/i,
    /api_key\s*=\s*['"].+['"]/i,
  ];

  const foundSecrets = sensitivePatterns.some(pattern => pattern.test(result));

  if (foundSecrets) {
    console.error('❌ Commit aborted: sensitive information detected.');
    process.exit(1);
  }

  console.log('✅ No sensitive information found.');
} catch (err) {
  console.error(err);
  process.exit(1);
}
