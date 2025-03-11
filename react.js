module.exports = {
    extends: [
        "@arty-125",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "prettier"
    ],
    plugins: ["react", "react-hooks"],
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        "react/jsx-uses-react": "warn",
        "react/jsx-uses-vars": "error",
        "react/jsx-key": "error",
        "react/jsx-pascal-case": "error",
        "react-hooks/rules-of-hooks": "warn",
        "react-hooks/exhaustive-deps": "warn",
        "react/button-has-type": "warn",
        "react/no-string-refs": "error",
        "react/jsx-boolean-value": ["warn", "never"],
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "prettier/prettier": ["warn", {
            "endOfLine": "auto"
        }],
        "import/no-default-export": "off"
    }
};