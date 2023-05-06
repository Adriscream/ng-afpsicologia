const { writeFile } = require('fs');
const { name, version } = require('../../package.json');

const targetPath = './src/environments/environment.ts';
require('dotenv').config({
  path: './src/environments/.env',
});
console.log(process.env);
const envConfigFile = `export const environment = {
    baseUrl: '${process.env.BASE_URL}',
    imgCDNPublicKey: '${process.env.IMG_CDN_PUBLIC_KEY}',
    imgCDNUrlEndpoint: '${process.env.IMG_CDN_URL_ENDPOINT}',
    imgCDNAuthEndpoint: '${process.env.IMG_CDN_AUTH_ENDPOINT}',
    firestoreApiKey: '${process.env.FIRESTORE_API_KEY}',
    firestoreAuthDomain: '${process.env.FIRESTORE_AUTH_DOMAIN}',
    firestoreProjectId: '${process.env.FIRESTORE_PROJECT_ID}',
    firestoreStorageBucket: '${process.env.FIRESTORE_STORAGE_BUCKET}',
    firestoreSenderId: '${process.env.FIRESTORE_SENDER_ID}',
    firestoreAppId: '${process.env.FIRESTORE_APP_ID}',
    firestoreMeasurementId: '${process.env.FIRESTORE_MEASUREMENT_ID}',
    name: '${name}',
    version: '${version}'
};
`;

writeFile(targetPath, envConfigFile, 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }
});
