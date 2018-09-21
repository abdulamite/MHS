function getHistory(){
    promyfill('fetch' in window,fetchPolyfill).then(()=>{
       const d1 = fetch("https://jm-mhs.firebaseio.com/history.json")
       .then(data=>data.json())
       .then(data=>{
            // addpend promise data to page
            let msg = data[0][1].split('\n')

            const content = document.querySelector('.history');
            let paragraph = document.createElement("p");
        
            msg.forEach(p=>{
                let paragraph = document.createElement("p");
                paragraph.textContent = p;
                content.appendChild(paragraph);
            });

           });
       }).catch(err=>console.log(err));
}

getHistory();