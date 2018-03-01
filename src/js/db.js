export const init = () => {
    const config = {
        apiKey: "AIzaSyBo9ND2NmHSGXpLb6-CRp8Epyn9lRQJbP8",
        authDomain: "slideshow-dc259.firebaseapp.com",
        databaseURL: "https://slideshow-dc259.firebaseio.com",
        projectId: "slideshow-dc259",
        storageBucket: "slideshow-dc259.appspot.com",
        messagingSenderId: "104655350834"
    };
    firebase.initializeApp(config);
}

export const get = (a, trigger) => {
    
    firebase.database().ref(a).once('value').then(data => {
        get(data.val(), 'good');
    });

    if(trigger === 'good') return a;

}