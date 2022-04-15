module.exports = {
    module: {
        npParse: /(mapbpx-gl)\.js$/,
        rules: [
            {
                test: /\bmapbox-gl-csp-worker.js\b/i,
                use: { loader: 'worker-loader' }
            }
        ]
    }
};
