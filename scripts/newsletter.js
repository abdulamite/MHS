// generate list of buttons: 
function getYears(){
    promyfill('fetch' in window,fetchPolyfill).then(()=>{
        const d1 = fetch("https://jm-mhs.firebaseio.com/news.json")
        .then(data=>data.json())
        .then(data=>{
            const years = [];
            data.forEach(item=>{
                if(years.includes(item.year)){
                    return;
                }
                else{
                    years.push(item.year)
                }
            });
            ordered_years = years.reverse();
            ordered_years.forEach(item=>{
                // add items to select:
                const dropDown = document.querySelector('select');
                // create options for select menu
                let select_item = document.createElement("OPTION");
                select_item.innerText = item;
                select_item.value = item;
                // append option to select
                dropDown.appendChild(select_item);


                // Grab the ul
                const list = document.querySelector('.list');
                // create li
                let list_item = document.createElement("LI");
                // create button
                let button = document.createElement("BUTTON");
                button.innerText = item;
                // connect button to li
                list_item.appendChild(button);
                // connect li to ul
                list.appendChild(list_item);
            });

            // grab button and assign function to get pull archive
            const buttons = document.querySelectorAll('button');

            buttons.forEach(link=>{
                link.addEventListener('click',getArchiveYear);
            });

            // grab dropdown and assign function to get pull archive
            const dropDown = document.querySelector('select');
            dropDown.addEventListener('change',function(){
                const year = this.value;
                const endpoint = `https://jm-mhs.firebaseio.com/news.json?orderBy=%22year%22&equalTo=${year}`;
                let news = document.querySelector('.news');
                news.innerHTML = '';

                polyfillData(endpoint);
            });
        }).catch(err=>console.log(err));
    });
}

getYears();


function getArchive(){
     promyfill('fetch' in window,fetchPolyfill).then(()=>{
        const d1 = fetch("https://jm-mhs.firebaseio.com/news.json?orderBy=%22year%22&equalTo=2017")
        .then(data=>data.json())
        .then(news=>{
            const toArray = [];
            for(i in news){
                toArray.push(news[i])
            }
        
            const news_item = document.querySelector('.news');
            const sortedMonths = toArray.sort(function(a,b){
                return a.month_num - b.month_num;
            })

            let ordered = sortedMonths.reverse();

            ordered.forEach(item=>{
                
                let newsContainer = document.createElement("DIV");
                newsContainer.classList.add('newsContainer');
        
                let date = document.createElement("p");
                date.textContent = `${item.year}`;
                
                let thumb = document.createElement("IMG");
                let newsInfo = document.createElement("DIV");
                let li = document.createElement("LI");
                let a = document.createElement("A");
                let desc = document.createElement("p");
        
                newsInfo.classList.add('newsInfo');
        
                a.target="_blank";
                a.textContent=item.month;
                a.href=item.link;
                
                desc.textContent = item.desc.split(' ').slice(0,30).join(' ')+'...';
        
                const thumbId = item.link.split('/')[5];
                thumb.src=`https://drive.google.com/thumbnail?id=${thumbId}`;
        
                li.appendChild(a);
                newsContainer.appendChild(thumb);
                newsInfo.appendChild(li);
                newsInfo.appendChild(date);
                newsInfo.appendChild(desc);
                newsContainer.appendChild(newsInfo);
                news_item.appendChild(newsContainer);
        
            });
        }).catch(err=>console.log(err));
    });
}

getArchive();



// The purpose of this function is to hit the endpoint and update the current dom to match the button the user clicks. 
// If the user clicks the 2015 button element, a list of all new archives from 2015 will render.
function getArchiveYear(){
    const year = this.textContent;
    const endpoint = `https://jm-mhs.firebaseio.com/news.json?orderBy=%22year%22&equalTo=${year}`;
    let news = document.querySelector('.news');
    news.innerHTML = '';

    polyfillData(endpoint);
}


function polyfillData(endpoint){
    promyfill('fetch' in window,fetchPolyfill).then(()=>{
        const d1 = fetch(endpoint)
        .then(data=>data.json())
        .then(news=>{
            const toArray = [];
            for(i in news){
                toArray.push(news[i])
            }

            const sortedMonths = toArray.sort(function(a,b){
                return a.month_num - b.month_num;
            })
    
            const news_item = document.querySelector('.news');
            let ordered = sortedMonths.reverse();

            ordered.forEach(item=>{
                
                let newsContainer = document.createElement("DIV");
                newsContainer.classList.add('newsContainer');
        
                let date = document.createElement("p");
                date.textContent = `${item.year}`;
                
                let thumb = document.createElement("IMG");
                let newsInfo = document.createElement("DIV");
                let li = document.createElement("LI");
                let a = document.createElement("A");
                let desc = document.createElement("p");
        
                newsInfo.classList.add('newsInfo');
        
                a.target="_blank";
                a.textContent=item.month;
                a.href=item.link;
                
                desc.textContent = item.desc.split(' ').slice(0,30).join(' ')+'...';
        
                const thumbId = item.link.split('/')[5];
                thumb.src=`https://drive.google.com/thumbnail?id=${thumbId}`;
        
                li.appendChild(a);
                newsContainer.appendChild(thumb);
                newsInfo.appendChild(li);
                newsInfo.appendChild(date);
                newsInfo.appendChild(desc);
                newsContainer.appendChild(newsInfo);
                news_item.appendChild(newsContainer);
        
            });
        }).catch(err=>console.log(err));
    });
}