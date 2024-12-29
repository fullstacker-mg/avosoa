import type { UserConfig } from "@commitlint/types";

export default {
	extends: ["@commitlint/config-conventional"],
	formatter: "@commitlint/format",
	parserPreset: "conventional-changelog-atom",
	rules: {
		"body-max-line-length": [0, "always", Number.POSITIVE_INFINITY],
	},
	ignores: [(commit) => commit === "promotion"],
} satisfies UserConfig;
