const fs = require('fs');

const btn = document.querySelector('#msg-btn');
const form = document.querySelector('#new-dog-form');
const postsList = document.querySelector('section');

// Bind event listeners
form.addEventListener('submit', submitPost);

// create
function submitPost(e){
    e.preventDefault();

    const data = {
        title: e.target.title.value,
        author_name: e.target.author_name.value,
        story: e.target.story.value
    };

    const options = { 
        method: 'POST',
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    };

    fetch('http://localhost:5000/posts', options)
        .then(r => r.json())
        .then(displayPost)
        .catch(console.warn)
};