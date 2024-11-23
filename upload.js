const admin = require('firebase- admin')

const serviceAccount = require('./serviceAccountKey.json');
const { credential } = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const data = require('./data.json');

async function  uploadData(params) {
    for(const doc of data){
        await db.collectipn ('questions').add(doc);
    } 
}

uploadData();