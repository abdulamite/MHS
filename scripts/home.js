// Initialize Firebase
// HUGE THANKS to https://www.sohamkamani.com/blog/2017/03/09/sync-data-between-google-sheets-and-firebase/ @sohamkamani
// Select the db
var ref = firebase.database().ref('home');

// Grab the links div
// On value, log all values to the db
ref.on("value", function(snapshot) {
    // pull all data from db ref
    let data = snapshot.val();
    // define all items to substitue via db items

    // let currImage = 1;
    // const images = [data[6][1],data[7][1],data[8][1]];
    // const imageMeta = [data[6][2],data[7][2],data[8][2]];

    let learn = document.querySelector('#feature-1');
    let explore = document.querySelector('#feature-2');
    let connect = document.querySelector('#feature-3');
    // let adobe = document.querySelector('.info');
    let quote = document.querySelector('.quote');
    let author = document.querySelector('.author');
    let hero = document.querySelector('.hero');
    // let eventInfo = document.querySelector('.eventInfo');

    // create all elements for content
    let learnContent = document.createElement("p");
    let exploreContent = document.createElement("p");
    let connectContent = document.createElement("p");
    let quoteContent = document.createElement("p");
    let authorContent = document.createElement("p");
    let heroImage = document.createElement("IMG");
    let heroImageInfoTitle = document.createElement("H3");


    // setInterval(function changeImage(){
    //     heroImage.style.opacity = 0;
    //     setTimeout(function() {
    //         heroImage.src=images[currImage];
    //         if(!imageMeta[currImage]){
    //             console.log('No Info Available');
    //             eventInfo.style.display = 'none';
    //         }
    //         else{
    //             heroImageInfoTitle.textContent=imageMeta[currImage];
    //             eventInfo.style.display = 'block';
    //         }
    //         if(currImage <2){
    //             currImage++
    //         }else if(currImage =2){
    //             currImage =0;
    //         }
    //         heroImage.style.opacity = 1;
    //      }, 1300);
    // },15000);

    quoteContent.textContent = data[0][1];
    quote.appendChild(quoteContent);

    authorContent.textContent = data[1][1];
    author.appendChild(authorContent);

    learnContent.textContent = data[2][1];
    learn.appendChild(learnContent);

    exploreContent.textContent = data[3][1];
    explore.appendChild(exploreContent);

    connectContent.textContent = data[4][1];
    connect.appendChild(connectContent);

    heroImage.src = data[6][1];
    hero.appendChild(heroImage);

    // if(!imageMeta[0]){
    //     eventInfo.style.display = 'none';
    // }
    // else{
    //     heroImageInfoTitle.textContent=imageMeta[0];
    //     eventInfo.style.display = 'block';
    // }

    // eventInfo.appendChild(heroImageInfoTitle);
    // eventInfo.classList.add('eventTitle');




    // let adobeData = data[5][1].split("\n");

    // for(let i=0;i<=adobeData.length;i++){
    //     let content = adobeData[i];
    //     // create paragraph element
    //     let pContent = document.createElement("p");
    //     pContent.textContent = content;
    //     adobe.appendChild(pContent);
    // }
}, function (error) {
    console.log("Error: " + error.code);
});