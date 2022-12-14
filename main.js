const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
const postContainer = document.querySelector('.posts-list')
let likedPost = []

// ciclo sull'array di oggetti

for ( let i = 0; i < posts.length ; i++ ){
    // console.log(posts[i])
    const socialPosts = posts[i];
    const {author} = socialPosts
    // creo un template nel mio html e lo salvo all'interno di una variabile
    const postItem = document.getElementById('post-template').content.cloneNode(true);
    postItem.querySelector('.profile-pic').src = author.image;
    postItem.querySelector('.profile-pic').alt = author.name;
    postItem.querySelector('.post-meta__author').innerHTML = author.name;
    postItem.querySelector(".post-meta__time").innerHTML = new Date(socialPosts.created).toLocaleDateString();
    postItem.querySelector('.post__image img').src = socialPosts.media;
    postItem.querySelector('.js-likes-counter').innerHTML = socialPosts.likes;
    postItem.getElementById('like-counter-1').id = `like-counter-${socialPosts.id}`;

    const likeButton = postItem.querySelector(".js-like-button");
    likeButton.setAttribute('data-postid' , socialPosts.id);
    const likes = postItem.querySelector(".js-likes-counter");
    const index = likedPost.indexOf[socialPosts.id]
    likeButton.addEventListener('click' , function (){
        likeButton.classList.add("like-button--liked");
        likeButton.href="javascript:";
        if(!likedPost.includes(socialPosts.id)){
            socialPosts.likes += 1;
            likes.innerHTML = socialPosts.likes;
            likedPost.push(socialPosts.id);
            console.log(likedPost)
        }else{
            likedPost.splice(index)
            likeButton.classList.remove("like-button--liked")
            socialPosts.likes -= 1 ;
            likes.innerHTML = socialPosts.likes;
        }
    })
    postContainer.append(postItem)
}        