// data




let users = [
    {
        profilePic:"https://i.pinimg.com/564x/df/b6/2b/dfb62b3832b3d4d187b53f9e7bfba952.jpg",
        displayPic:"https://i.pinimg.com/564x/ea/d2/82/ead282553138eed5ae9ad97848edc574.jpg", 
        pendingMessage:4,
         location:"Los Angeles, CA",
          name: "Zendaya",
          age:27, 
          intersets:["music","painting"],
          bio: "Hi, I'm Zendaya. You might know me from 'Euphoria' or as MJ in the 'Spider-Man' movies",
          isFriend:null
        },
        {
        profilePic:"https://i.pinimg.com/564x/76/82/3c/76823c28cb51b513c562e87c26f8c696.jpg",
        displayPic:"https://i.pinimg.com/564x/e0/6a/c2/e06ac2da1b7ecd749ae5424f39631b2e.jpg", 
        pendingMessage:4,
         location:"Los Angeles, CA",
          name: "Elizabeth Olsen",
          age: 34, 
          intersets:["music","painting"],
          bio: "When I'm not saving the world on screen, I enjoy exploring new places, trying out different cuisines, and practicing yoga",
          isFriend:null
        },
        {
            profilePic:"https://i.pinimg.com/736x/48/2f/34/482f342b29989bc9db4fae33352dfc1d.jpg",
            displayPic:"https://i.pinimg.com/564x/d1/8d/59/d18d5949cebcf3baf1588bd9fa007cdf.jpg", 
            pendingMessage:4,
             location:"Los Angeles, CA",
              name: "Emma stone",
              age:35, 
              intersets:["music","painting"],
              bio: "I'm a big fan of spontaneous adventures and deep conversations. Let's make some unforgettable memories together!",
              isFriend:null
            },
            {
                profilePic:"https://i.pinimg.com/564x/1d/b7/1b/1db71bd5074fb0ccdb380b01389e6ee4.jpg", 
                displayPic:"https://i.pinimg.com/564x/a9/76/33/a97633252f6b90336918bb447731e389.jpg",
                pendingMessage:10,
                 location:"Los Angeles, CA",
                  name: "Ariana Grande",
                  age: 29, 
                  intersets:["music","painting"],
                  bio: " I enjoy spending time with my dogs, exploring new cafes, and practicing yoga. I'm passionate about spreading positivity and love",
                  isFriend:null
                },
                {
                    profilePic:"https://i.pinimg.com/564x/97/b0/17/97b01783aac693098c77cc18f2773dfd.jpg", 
                    displayPic:"https://i.pinimg.com/564x/69/02/04/690204d30b6074d46b17f4c918803199.jpg",
                    pendingMessage:10,
                     location:"Los Angeles, CA",
                      name: "Selena Gomez",
                      age: 31, 
                      intersets:["music","painting"],
                      bio: " I enjoy spending time with my dogs, exploring new cafes, and practicing yoga. I'm passionate about spreading positivity and love",
                      isFriend:null
                    },

                    {
                        profilePic:"https://i.pinimg.com/564x/ef/df/8e/efdf8edd58eb5b85b8f712f790c8f7d0.jpg", 
                        displayPic:"https://i.pinimg.com/564x/4d/3e/c1/4d3ec15d38bed144afc9da11f1b3a4e8.jpg",
                        pendingMessage:10,
                         location:"Mumbai,India",
                          name: "Alia Bhat Kapoor",
                          age: 31, 
                          intersets:["music","painting"],
                          bio: " I enjoy spending time with my dogs, exploring new cafes, and practicing yoga. I'm passionate about spreading positivity and love",
                          isFriend:null
                        },

                        {
                            profilePic:"https://i.pinimg.com/564x/fd/bd/84/fdbd841079deb39bc415c8ad7817442b.jpg", 
                            displayPic:"https://i.pinimg.com/564x/53/b3/d1/53b3d1f7a0f950052b174e0f2dc16572.jpg",
                            pendingMessage:20,
                             location:"Mumbai,India",
                              name: "Deepika Padukone",
                              age: 31, 
                              intersets:["music","painting"],
                              bio: " I enjoy spending time with my dogs, exploring new cafes, and practicing yoga. I'm passionate about spreading positivity and love",
                              isFriend:null
                            },

                            {
                                profilePic:"https://i.pinimg.com/564x/d4/15/49/d41549d6782c90f707ec39c64eb6e01e.jpg", 
                                displayPic:"https://i.pinimg.com/564x/4c/56/01/4c56015c8854ce89982b6b84a08d9392.jpg",
                                pendingMessage:10,
                                 location:"Mumbai,India",
                                  name: "Anushka Sharma",
                                  age: 31, 
                                  intersets:["music","painting"],
                                  bio: " I enjoy spending time with my dogs, exploring new cafes, and practicing yoga. I'm passionate about spreading positivity and love",
                                  isFriend:null
                                },

                                {
                                    profilePic:"https://i.pinimg.com/736x/00/e0/d7/00e0d7c8836bffc05e7d55ba18714958.jpg", 
                                    displayPic:"https://i.pinimg.com/564x/72/69/eb/7269ebc12a17a4d3951179f28fe19366.jpg",
                                    pendingMessage:25,
                                     location:"Mumbai,India",
                                      name: "Shraddha Kapoor",
                                      age: 31, 
                                      intersets:["music","painting"],
                                      bio: " I enjoy spending time with my dogs, exploring new cafes, and practicing yoga. I'm passionate about spreading positivity and love",
                                      isFriend:null
                                    },
                                    {
                                        profilePic:"https://i.pinimg.com/564x/df/b6/2b/dfb62b3832b3d4d187b53f9e7bfba952.jpg",
                                        displayPic:"https://i.pinimg.com/564x/ea/d2/82/ead282553138eed5ae9ad97848edc574.jpg", 
                                        pendingMessage:4,
                                         location:"Los Angeles, CA",
                                          name: "Zendaya",
                                          age:27, 
                                          intersets:["music","painting"],
                                          bio: "Hi, I'm Zendaya. You might know me from 'Euphoria' or as MJ in the 'Spider-Man' movies",
                                          isFriend:null
                                        },

                    
            
        
    

];


function select(elem) {
    return document.querySelector(elem)
    
}

let curr = 0;
let isAnimating = false;
function setData(index){
    
 select(".prflimg img").src = users[index].profilePic;
 select(".badge h5").textContent = users[index].pendingMessage;
 select(".location h3").textContent = users[index].location;
 select(".name h1:nth-child(1)").textContent = users[index].name;
 select(".name h1:nth-child(2)").textContent = users[index].age;
 select(".bio p").textContent = users[index].bio
}




(function setInitial(){
 select(".maincard img").src = users[curr].displayPic
 select(".incomingcard img").src = users[curr+1].displayPic
 



setData(curr);
 curr = 2;
})();

function imgChange(){
    if (!isAnimating) {
        isAnimating = true;
        let tl = gsap.timeline({
            onComplete: function(){
                isAnimating = false;
               let main = select(".maincard");
               let incoming = select(".incomingcard");
    
    
               incoming.classList.remove("z-[2]");
               incoming.classList.add("z-[3]");
               incoming.classList.remove("incomingcard");
    
               main.classList.remove("z-[3]");
               main.classList.add("z-[2]");
               gsap.set(main, {
                scale:1,
                opacity:1,
               })
               if (curr === users.lenght) curr = 0;
               select(".maincard img").src = users[curr].displayPic;
               curr++
               main.classList.remove("maincard");
               incoming.classList.add("maincard");
               main.classList.add("incomingcard");
    
    
            }
    
        });
        
    
        tl.to(".maincard", {
            scale:1.1,
            opacity: 0,
            ease: Circ,
            duration:.9,
    
        },'a')
        
        tl.from(".incomingcard", {
            scale: 0.9,
            opacity: 0,
            ease: Circ,
            duration:1.1,   
        },'a')
    }  
};

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function(){
    imgChange();
    setData(curr-1);
    gsap.from(".details .element",{
        y:"100%", 
        opacity:0,
        duration:1.5,
        stagger:.06,
        ease: Power4.easeInOut,
       })
});
accept.addEventListener("click", function(){
    imgChange();
    setData(curr-1);
    gsap.from(".details .element",{
        y:"100%", 
        opacity:0,
        duration:1.5,
        stagger:.06,
        ease: Power4.easeInOut,
       })
});

(function containerCreator(){
    document.querySelectorAll(".element")
    .forEach(function (element){
       let div = document.createElement("div");
       div.classList.add('${element.classList[1]}container','overflow-hidden');
       div.appendChild(element);
       select(".details").appendChild(div);
    })
})();   


