const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./todo-list-efefd-firebase-adminsdk-jfgk1-9f21f737e3.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
module.exports  = db ;