const fs = require('fs');
const path = require('path');

async function readVersion(pluginConfig, context) {
    const { logger } = context;
    const versionFilePath = path.resolve(process.cwd(), '__version');

    const currentVersion = fs.readFileSync(versionFilePath, 'utf8').trim();
    logger.log(`📦 Reading version from __version file: ${currentVersion}`)

    return {
        version: currentVersion
    };
}

module.exports = { readVersion };