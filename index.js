window.onload = ()=>{
    eval(function(m,c,h){function z(i){return(i< 62?'':z(parseInt(i/62)))+((i=i%62)>35?String.fromCharCode(i+29):i.toString(36))}for(var i=0;i< m.length;i++)h[z(i)]=m[i];function d(w){return h[w]?h[w]:w;};return c.replace(/\b\w+\b/g,d);}('var||firebaseConfig|apiKey|AIzaSyCe5YGgNI5of|ETTuwswjZuoy398JqR4bs|authDomain|first|project|e37f1|firebaseapp|com|databaseURL|https|default|rtdb|firebaseio|projectId|storageBucket|appspot|messagingSenderId|1055847141483|appId|web|499093e1c47fee13af212e'.split('|'),'0 2={3:"4-5",6:"7-8-9.a.b",c:"d://7-8-9-e-f.g.b",h:"7-8-9",i:"7-8-9.j.b",k:"l",m:"1:l:n:o"};',{}))
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();
    database.ref('travel_users').on('child_added', (snapshot) => {
        var newUser = snapshot.val();
         ticketObj = new ticket(newUser.u_name, newUser.u_email, newUser.u_number, newUser.u_date);
         users.displayData(ticketObj);
         })

    function id(id){
        return document.getElementById(id);
    }
    document.querySelector('.ticket-form').addEventListener('submit', function(e){
        e.preventDefault();
         let u_name = id(('u_name')).value;
         let u_email = id(('u_email')).value;
         let u_number = id(('u_number')).value;
         let u_date = id(('u_date')).value;
         database.ref(`travel_users/ ${u_name}_${u_number}`).set({
             u_name     : u_name,
             u_email    : u_email,
             u_number   : u_number,
             u_date     : u_date,
         });
    })
    class ticket {
        constructor(u_name, u_email, u_number, u_date){
            this.u_name = u_name;
            this.u_email = u_email;
            this.u_number  = u_number;
            this.u_date = u_date;
        }
    }
    class users{
        static displayData(obj){
        id(('ticketTable')).innerHTML +=             
        `<tr>
            <td>${obj.u_name}</td>
            <td>${obj.u_email} </td>
            <td>${obj.u_number} </td>
            <td>${obj.u_date} </td>
        </tr>`
        } 
    }
}