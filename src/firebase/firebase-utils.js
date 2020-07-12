import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCg_1O75Sxgmiw2BsvBnM4S0v1KWiCzOqo',
	authDomain: 'clothes-shop-199e0.firebaseapp.com',
	databaseURL: 'https://clothes-shop-199e0.firebaseio.com',
	projectId: 'clothes-shop-199e0',
	storageBucket: 'clothes-shop-199e0.appspot.com',
	messagingSenderId: '171590356336',
	appId: '1:171590356336:web:192563e3ea885a40dfd3b5',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (err) {
			console.log('error creating user', err);
		}
	}

	return userRef;
};
// Collection generator
export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();

	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title),
			id: doc.id,
			title,
			items,
		};
	});
	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
};

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe();
			resolve(userAuth);
		}, reject)
	})
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
