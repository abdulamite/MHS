// Initialize Firebase
// HUGE THANKS to https://www.sohamkamani.com/blog/2017/03/09/sync-data-between-google-sheets-and-firebase/ @sohamkamani
// Select the db
var ref = firebase.database().ref('archive');


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

        let thumb = document.createElement("IMG");
        let newsInfo = document.createElement("DIV");
        let li = document.createElement("LI");
        let a = document.createElement("A");
        let desc = document.createElement("p");

        newsInfo.classList.add('newsInfo');

        a.target="_blank";
        a.textContent=`${item[0]}`;
        a.href=item[3];

        desc.textContent = item[4].split(' ').slice(0,30).join(' ');

        const thumbId = item[3].split('/')[5];
        thumb.src=`https://drive.google.com/thumbnail?id=${thumbId}`;
        console.log(thumb);



        li.appendChild(a);
        newsContainer.appendChild(thumb);
        newsInfo.appendChild(li);
        newsInfo.appendChild(date);
        newsInfo.appendChild(desc);
        newsContainer.appendChild(newsInfo);
        news.appendChild(newsContainer);

    });

}, function (error) {
    console.log("Error: " + error.code);
});