// commitlint.config.js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["feat", "fix", "revert", "perf"]],
    "subject-max-length": [1, "always", 30],
  },
};