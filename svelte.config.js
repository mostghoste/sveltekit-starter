import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

export default {
    kit: {
        adapter: adapter(),
        vite: {
            server: {
                proxy: {
                    '/api': {
                        target: 'http://185.34.52.111:8090',
                        changeOrigin: true,
                        rewrite: path => path.replace(/^\/api/, '')
                    }
                },
                cors: {
                    origin: "https://mostghoste.lt",
                    credentials: true
                }
            }
        }
    },
    preprocess: preprocess()
};
