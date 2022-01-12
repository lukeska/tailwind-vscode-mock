<template>
	<pre
		class="line-numbers"
	><code class="language-html text-gray-50"><slot></slot></code></pre>
</template>

<script>
import Prism from "prismjs";
//import "prismjs/themes/prism.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.js";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

export default {
	name: "PrismCode",
	mounted() {
		const fullConfig = resolveConfig(tailwindConfig);

		const regex =
			/(text|bg|border)-(teal-|gray-)(100|200|300|400|500|600|700|800|900)(?:$|^|)/gi;

		Prism.hooks.add("after-highlight", function (env) {
			env.highlightedCode = env.highlightedCode.replace(
				regex,
				function (match) {
					// text-gray-500
					let tailwindColorConfig = match.split("-");
					let tailwindHexColor =
						fullConfig.theme.colors[tailwindColorConfig[1]][
							tailwindColorConfig[2]
						];

					return `<span class="inline-flex w-3 h-3 rounded ring-1 ring-gray-900/30 mr-1" style="background:${tailwindHexColor}"></span>${match}`;
				}
			);

			env.element.innerHTML = env.highlightedCode;
		});
	},
};
</script>
