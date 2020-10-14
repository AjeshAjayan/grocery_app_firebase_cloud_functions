// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

const firestore = admin.firestore();

exports.checkPhoneNoDuplication = functions.https.onRequest(async (req, res) => {
    const data = req.body;
    const query = await firestore.collection('shop_users')
        .where('phone_number', '==', data.phoneNumber);

    try {
        const result = await query.get();
        if(result.size > 0) {
            res.send({ isExist: true });
        } else {
            res.send({ isExist: false });
        }
    } catch(e) {
        res.send({ isExist: false }).status(404);
    }
});