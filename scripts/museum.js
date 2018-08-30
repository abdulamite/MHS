// Initialize Firebase
// HUGE THANKS to https://www.sohamkamani.com/blog/2017/03/09/sync-data-between-google-sheets-and-firebase/ @sohamkamani

// Select the db
var ref = firebase.database().ref('museum');

// Grab the links div
// On value, log all values to the db
ref.on("value", function(snapshot) {
    let data = snapshot.val();
    const content = document.querySelector('.musuem');
    let paragraph = document.createElement("p");
    data.forEach(item=>{
        let msg = item[1].split('\n');

        msg.forEach(p=>{
            let paragraph = document.createElement("p");
            paragraph.textContent = p;
            content.appendChild(paragraph);
        })
    });

}, function (error) {
    console.log("Error: " + error.code);
});