module.exports = {
    extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    ignorePatterns: ['**/.next/**', '**/node_modules/**'],
    root: true,
    rules: { "@typescript-eslint/no-unused-vars": "off", "@next/next/no-html-link-for-pages": "off" },
    settings: {
        next: {
            rootDir: ['basics/*/', 'dashboard/*/', 'seo/'],
        },
    },
};