import Rebase from 're-base';
import firebase from 'firebase/app';
import database from 'firebase/database';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDaR6Q0ClBgjEvAlywKnqPb6p9tanGhEa0",
    authDomain: "itembox-reactjs.firebaseapp.com",
    databaseURL: "https://itembox-reactjs.firebaseio.com",
    projectId: "itembox-reactjs",
});

const db = database(app);
const base = Rebase.createClass(db);

export default base;