import firebase from 'firebase';
class Fire {
    constructor() {
        this.init();
        this.observeAuth();
    }
    init = () =>
        firebase.initializeApp({
            apiKey: "AIzaSyBVGwxQp729xLJcn60vQ8EZfTxJi1sArS0",
            authDomain: "testchat-82b8e.firebaseapp.com",
            databaseURL: "https://testchat-82b8e.firebaseio.com",
            projectId: "testchat-82b8e",
            storageBucket: "testchat-82b8e.appspot.com",
            messagingSenderId: "61585106541",
            appId: "1:61585106541:web:4edd9702eb1bca0eda8164",
            measurementId: "G-QNXY412642"
        });

    observeAuth = () =>
       this.onAuthStateChanged;

    onAuthStateChanged = user => {

            try {
                firebase.auth().signInAnonymously();
            } catch ({ message }) {
                alert(message);
            }

    };
    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }

    get ref() {
        return firebase.database().ref('/');
    }

    parse = snapshot => {
        const { timestamp: numberStamp, text, user } = snapshot.val();
        const { key: _id } = snapshot;
        const timestamp = new Date(numberStamp);
        const message = {
            _id,
            timestamp,
            text,
            user,
        };
        return message;
    };

    on = callback =>
        this.ref
            .limitToLast(20)
            .on('child_added', snapshot => callback(this.parse(snapshot)));

    get timestamp() {
        return firebase.database.ServerValue.TIMESTAMP;
    }
    // send the message to the Backend
    send = messages => {
        for (let i = 0; i < messages.length; i++) {
            const { text, user } = messages[i];
            const message = {
                text,
                user,
                timestamp: this.timestamp,
            };
            this.append(message);
        }
    };

    append = message => this.ref.push(message);

    // close the connection to the Backend
    off() {
        this.ref.off();
    }
}
Fire.shared = new Fire();
export default Fire;