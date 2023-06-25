 const reviews = [{
         id: 1,
         name: "Paul Carse",
         job: " CTO and Co-founder of Life Moments ",
         // img: "pers.png",
         iframe: "https://www.youtube.com/embed/V0jW2k2840Q",
         text: "«We now have a core team of engineers at Relevant who work for us full-time and are supplemented by 4 or 5 engineers with different skillsets when and if required.»",
     }, {
         id: 2,
         name: "Cassian Harrison",
         job: " Co-founder of Splink Industries and My Theory Test App by James May ",
         // img: "https://cdn-cfdja.nitrocdn.com/uOxxxDWjcukgNxoRlWCAPnOZsfFUWQlA/assets/static/optimized/rev-6c1cefb/wp-content/uploads/1612272389607.jpeg",
         iframe: "https://www.youtube.com/embed/tUU7OMbWGp4",

         text: "“Working with you guys has been fantastic. The level of expertise of your development team is as good as the people that we get in the UK. You’ve got a fantastic talent base of programmers. It’s more challenging to find people of that quality in the UK.”",
     }, {
         id: 3,
         name: "Ole Jørgen Næss and Christopher Krohn",
         job: "VP of Product and Engineering & Director of Strategic Partnerships and Integrations at Svenn (former 24onoff) ",
         // img: "https://cdn-cfdja.nitrocdn.com/uOxxxDWjcukgNxoRlWCAPnOZsfFUWQlA/assets/static/optimized/rev-6c1cefb/wp-content/uploads/1612272389607.jpeg",
         iframe: "https://www.youtube.com/embed/sBo_s3HMpmE",

         text: "“We had the challenge to find a trustworthy software development company that we could rely on. We chose Relevant because we felt that they understood our business needs.”",
     },

 ];
 // select items
 const img = document.getElementById("person-img");
 const iframe = document.getElementById("person-iframe");
 const author = document.getElementById("author");
 const job = document.getElementById("job");
 const info = document.getElementById("info");

 const prevBtn = document.querySelector(".prev-btn");
 const nextBtn = document.querySelector(".next-btn");
 const randomBtn = document.querySelector(".random-btn");

 // set starting item
 let currentItem = 0;

 // load initial item
 window.addEventListener("DOMContentLoaded", function() {
     const item = reviews[currentItem];
     //  img.src = item.img;
     author.textContent = item.name;
     job.textContent = item.job;
     info.textContent = item.text;
 });

 // show person based on item
 function showPerson(person) {
     const item = reviews[person];
     // img.src = item.img;
     iframe.src = item.iframe;
     author.textContent = item.name;
     job.textContent = item.job;
     info.textContent = item.text;
 }
 // show next person
 nextBtn.addEventListener("click", function() {
     currentItem++;
     if (currentItem > reviews.length - 1) {
         currentItem = 0;
     }
     showPerson(currentItem);
 });
 // show prev person
 prevBtn.addEventListener("click", function() {
     currentItem--;
     if (currentItem < 0) {
         currentItem = reviews.length - 1;
     }
     showPerson(currentItem);
 });
 // show random person
 randomBtn.addEventListener("click", function() {
     console.log("hello");

     currentItem = Math.floor(Math.random() * reviews.length);
     showPerson(currentItem);
 });