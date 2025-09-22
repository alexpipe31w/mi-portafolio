    module.exports = {
    extends: "stylelint-config-standard",
    rules: {
        // Ignorar las directivas de Tailwind
        "at-rule-no-unknown": [true, {
        ignoreAtRules: [
            "tailwind",
            "apply",
            "variants",
            "responsive",
            "screen",
            "layer"
        ]
        }],
    },
    };
