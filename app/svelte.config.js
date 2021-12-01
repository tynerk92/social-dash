import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
    files: {
      assets: 'static',
      lib: 'src/lib',
      routes: 'src/routes',
      template: 'src/app.html'
    },
    package: {
      dir: 'public',
      emitTypes: true,
      // excludes all .d.ts and files starting with _ as the name
			exports: (filepath) => !/^_|\/_|\.d\.ts$/.test(filepath),
			files: () => true
    },
    prerender: {
			crawl: true,
			enabled: true,
			entries: ['*'],
			onError: 'fail'
		},
		router: true,
    ssr: true,
		trailingSlash: 'never'
	}
};

export default config;
