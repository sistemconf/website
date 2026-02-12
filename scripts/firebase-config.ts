// https://github.com/import-js/eslint-plugin-import/issues/1810
// eslint-disable-next-line import/no-unresolved
import { cert, initializeApp, ServiceAccount } from 'firebase-admin/app';
// https://github.com/import-js/eslint-plugin-import/issues/1810
// eslint-disable-next-line import/no-unresolved
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';
import serviceAccount from '../serviceAccount.json';

const credential = cert(serviceAccount as ServiceAccount);
initializeApp({
    credential,
    storageBucket: serviceAccount.project_id + '.appspot.com'
});
const firestore = getFirestore();
const storage = getStorage();

export { firestore, storage };
