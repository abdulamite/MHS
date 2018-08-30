// Initialize Firebase
// HUGE THANKS to https://www.sohamkamani.com/blog/2017/03/09/sync-data-between-google-sheets-and-firebase/ @sohamkamani
// Select the db
var ref = firebase.database().ref('masterSheet');


// async function getData(){
//     const d = await fetch('https://jm-mhs.firebaseio.com/masterSheet.json').then(data=>data.json());
//     console.log(d);
// }
// getData();

ref.orderByValue().on("value", function(snapshot) {
    const news = document.querySelector('.news');
    let data = snapshot.val();
    let ordered =  data.reverse();
    ordered.forEach(item=>{

        let newsContainer = document.createElement("DIV");
        newsContainer.classList.add('newsContainer');

        let date = document.createElement("p");
        date.textContent = `${item[1]}`;

        // let desc = document.createElement("p");
        // desc.textContent = `${item[4]}`.split(' ').splice(0,25).join(' ')+'...';


        let li = document.createElement("LI");
        let a = document.createElement("A");
        a.target="_blank";
        a.textContent=`${item[0]}`;
        a.href=item[3];
        li.appendChild(a);
        newsContainer.appendChild(li);
        newsContainer.appendChild(date);
        // newsContainer.appendChild(desc);
        news.appendChild(newsContainer);

    });

}, function (error) {
    console.log("Error: " + error.code);
});