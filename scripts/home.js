function getHome(){
            promyfill('fetch' in window,fetchPolyfill).then(()=>{
            const d1 = fetch("https://jm-mhs.firebaseio.com/home.json")
            .then(data=>data.json())
            .then(data=>{
                    // let currImage = 1;
            // const images = [data[6][1],data[7][1]];
            // const imageMeta = [data[6][2],data[7][2],data[8][2]];
            // setInterval(function changeImage(){
            //     heroImage.style.opacity = 0;
            //     setTimeout(function() {
            //         heroImage.src=images[currImage];
            //         // if(!imageMeta[currImage]){
            //         //     console.log('No Info Available');
            //         //     eventInfo.style.display = 'none';
            //         // }
            //         // else{
            //         //     heroImageInfoTitle.textContent=imageMeta[currImage];
            //         //     eventInfo.style.display = 'block';
            //         // }
            //         if(currImage <1){
            //             currImage++
            //         }else if(currImage =1){
            //             currImage =0;
            //         }
            //         heroImage.style.opacity = 1;
            //      }, 1300);
            // },15000);

            let learn = document.querySelector('#feature-1');
            let explore = document.querySelector('#feature-2');
            let connect = document.querySelector('#feature-3');
            let adobe = document.querySelector('.info');
            let quote = document.querySelector('.quote');
            let author = document.querySelector('.author');
            let hero = document.querySelector('.hero');

            // create all elements for content
            let learnContent = document.createElement("p");
            let exploreContent = document.createElement("p");
            let connectContent = document.createElement("p");
            let quoteContent = document.createElement("p");
            let authorContent = document.createElement("p");
            let heroImage = document.createElement("IMG");
            let heroImageInfoTitle = document.createElement("H3");

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

            let adobeData = data[5][1].split("\n");

            for(let i=0;i<=adobeData.length;i++){
                let content = adobeData[i];
                // create paragraph element
                let pContent = document.createElement("p");
                pContent.textContent = content;
                adobe.appendChild(pContent);
            }
        });
       }).catch(err=>console.log(err));
}

getHome();