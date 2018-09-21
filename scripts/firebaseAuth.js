var config = {
    apiKey: "AIzaSyDzsM2bz4_spilPJ1laMFE8fEo-Tgr3yTs",
    authDomain: "jm-mhs.firebaseapp.com",
    databaseURL: "https://jm-mhs.firebaseio.com",
    projectId: "jm-mhs",
    storageBucket: "jm-mhs.appspot.com",
    messagingSenderId: "969749189890"
};
firebase.initializeApp(config);

// Fetch Polyfill
function supports(n){return new Promise(function(o,t){n&&o(n),t(!1)})}function loadPolyfill(n){return new Promise(function(o,t){n||t(!1);var e=document.createElement("script");e.async=1,e.defer=1,e.src=n,e.onload=function(){o(n)},e.onerror=function(){t()},window.document.body.appendChild(e)})}function promyfill(n,o){return new Promise(function(t){supports(n).then(function(){t(n)}).catch(function(){loadPolyfill(o).then(function(){t(n)})})})}
const fetchPolyfill = 'https://rawgit.com/github/fetch/master/fetch.js';


