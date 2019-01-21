function getEvents() {
    promyfill('fetch' in window, fetchPolyfill).then(() => {
        const d1 = fetch('https://jm-mhs.firebaseio.com/events.json?orderBy="computed_date"')
            .then(data => data.json())
            .then(data => {
                console.log(data);
                const eventFeed = document.querySelector('.event_feed');
                let sorted = data.sort(function(a,b){
                    return a.computed_date - b.computed_date 
                });


                sorted.reverse().forEach(item=>{
                    // console.log(item);
                    const event = document.createElement('DIV');

                    const thumbId = item.link.split('/')[5];
                    const thumbLink = `https://drive.google.com/thumbnail?id=${thumbId}`;

                    event.classList.add('.event');

                    // Formating time stuff

                    date = new Date(item.date);
                    year = date.getFullYear();
                    month = date.getMonth()+1;
                    dt = date.getDate();
                    hours = date.getHours();
                    min = date.getMinutes();

                    function addZero(i) {
                        if (i < 10) {
                          i = "0" + i;
                        }
                        return i;
                      }
                      
                    function returnTime(hours, min) {
                    var h = addZero(hours);
                    var m = addZero(min);
                    if(h>12){
                        h=h-12;
                        return h + ":" + m + "PM"
                    }
                    else{
                        return h + ":" + m + "AM"
                    }
                    }

                    if (dt < 10) {
                    dt = '0' + dt;
                    }
                    if (month < 10) {
                    month = '0' + month;
                    }
                    const eventTime = returnTime(hours,min);

                    let date_string = month+'/' + dt + '/'+year + ` at ${returnTime(hours,min)}`;

                    event.innerHTML=
                    `
                    <div class="event">
                    <img src="${thumbLink}" alt="${item.title}">
                    <div class="event-info">
                      <p>
                        <b><a href="${item.link}" target="_blank">${item.title}</a></b>
                      </p>
                      <p>${item.location}</p>
                      <p>${date_string}</p>
                      <p>${item.cost}</p>
                      <p>${item.desc.split(' ').slice(0,30).join(' ')+'...'}</p>
                    </div>
                  </div>
                    
                    `
                    eventFeed.appendChild(event);
                });
            });
    }).catch(err => console.log(err));
}

getEvents();