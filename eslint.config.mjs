import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import nextPlugin from "@next/eslint-plugin-next";

export default [
    {
        ignores: [".next/**", "node_modules/**", "next-env.d.ts", "out/**", ".swc/**"]
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        plugins: {
            react: reactPlugin,
            "react-hooks": reactHooksPlugin,
            "@next/next": nextPlugin,
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react-hooks/exhaustive-deps": "warn",
            "react-hooks/set-state-in-effect": "off",
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
            "@typescript-eslint/no-this-alias": "off",
            "@typescript-eslint/no-require-imports": "off"
        },
        settings: {
            react: {
                version: "detect"
            }
        }
    },
    {
        files: ["*.config.js", "*.config.mjs", "*.config.ts"],
        languageOptions: {
            globals: {
                module: "readonly",
                require: "readonly",
                process: "readonly",
                __dirname: "readonly",
                __filename: "readonly"
            }
        },
        rules: {
            "no-undef": "off",
            "@typescript-eslint/no-require-imports": "off"
        }
    }
];
