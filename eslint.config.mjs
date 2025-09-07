import { defineConfig } from "eslint/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([
    {
        ignores: [".next/", "node_modules/", "next-env.d.ts"]
    },
    {
        files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
        ...js.configs.recommended,
        rules: {
        }
    },
    {
        files: ["**/*.{ts,tsx}"],
        extends: compat.extends("next/core-web-vitals", "next/typescript"),
        rules: {
            "no-unused-expressions": "off",
            "@typescript-eslint/no-unused-expressions": ["error", {
                "allowShortCircuit": true,
                "allowTernary": true,
                "allowTaggedTemplates": true
            }],
            "@typescript-eslint/triple-slash-reference": "off",
            "@typescript-eslint/no-empty-object-type": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "@next/next/no-assign-module-variable": "off",
            "@typescript-eslint/no-this-alias": "off"
        }
    },
    {
        files: ["*.config.js", "*.config.mjs"],
        rules: {
            "@typescript-eslint/no-require-imports": "off",
        }
    }
]);