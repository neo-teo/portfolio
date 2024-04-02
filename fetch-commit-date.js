const fs = require('fs');
const path = require('path');

// Format the current date and time
const dateTime = new Date().toLocaleString(undefined, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZoneName: 'short'
});

// Path to the file that will hold the date time
const filePath = path.join(__dirname, 'src', 'commitDate.ts');

// Write the date time to the file
fs.writeFileSync(
    filePath,
    `// This file is auto-generated on pre-commit hook\nexport const commitDateTime = '${dateTime}';`
);