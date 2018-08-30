// Select the db
var ref = firebase.database().ref('history');

// Grab the links div
// On value, log all values to the db
ref.on("value", function(snapshot) {
    let data = snapshot.val();
    const content = document.querySelector('.history');
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