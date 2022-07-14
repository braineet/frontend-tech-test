module.exports = {
    // Lint & Prettify TS and JS files
    '**/*.(js|jsx)': filenames => [
        `yarn eslint ${filenames.join(' ')}`,
        `yarn prettier --write ${filenames.join(' ')}`,
    ],
};
