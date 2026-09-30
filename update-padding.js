const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

let changed = 0;
walkDir('./src', (filePath) => {
    if (!filePath.endsWith('.tsx')) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    content = content.replace(/py-32/g, 'py-[60px]');
    content = content.replace(/pt-32 pb-0/g, 'pt-[140px] pb-0');
    content = content.replace(/pt-32 pb-20/g, 'pt-[140px] pb-[60px]');
    content = content.replace(/pt-32/g, 'pt-[140px]');
    content = content.replace(/pb-32/g, 'pb-[60px]');
    content = content.replace(/py-24/g, 'py-[60px]');
    content = content.replace(/pb-24/g, 'pb-[60px]');
    content = content.replace(/pb-20/g, 'pb-[60px]');
    content = content.replace(/py-20 border-t/g, 'py-[60px] border-t'); // specific matches from ServiceDetailClient
    content = content.replace(/pt-20 pb-8/g, 'py-[60px]');
    content = content.replace(/pt-24/g, 'pt-[60px]');

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        changed++;
        console.log('Updated ' + filePath);
    }
});
console.log('Total files changed: ' + changed);
