/* eslint-disable @typescript-eslint/no-var-requires */
const functions = require('firebase-functions');
const { default: next } = require('next');

const nextjsServer = next({
  dev: false,
  conf: {
    distDir: '.next/',
  },
});
const nextjsHandle = nextjsServer.getRequestHandler();

exports.nextjsFunc = functions
  .region('us-central1', 'europe-west1')
  .https.onRequest((request, response) => {
    return nextjsServer.prepare().then(() => nextjsHandle(request, response));
  });
