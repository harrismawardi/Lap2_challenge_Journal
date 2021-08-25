// const fs = require('fs');

const btn = document.querySelector('#msg-btn');
const form = document.querySelector('#new-dog-form');
const postsList = document.querySelector('section');

// Bind event listeners
form.addEventListener('submit', submitPost);

// create posts
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

//display posts
function displayPost(data){
    fetch(`http://localhost:5000/posts/${data.id}`)
        .then(r => r.json())
        .then(data => {
            appendPost(data)
            // const { post } = data
            // div.querySelectorAll('td')[1].textContent = post.age
        })
        .catch(console.warn)
}

// helpers
function appendPosts(data){
    data.posts.forEach(appendPost);
};

function appendPost(data){
    const newDiv = document.createElement('div');
    const postContent = formatdiv(data, newDiv)
    postsList.append(newDiv);
    // fs.writeFile(`/${data.id}`, postContent, (error) => { /* handle error */ });
    window.location.href=`/${data.id}`;
};


function formatdiv(post, div){
    const titlePar = document.createElement('p');
    const namePar = document.createElement('p');
    const storyPar = document.createElement('p');

    titlePar.setAttribute('id', 'title')
    namePar.setAttribute('id', 'author_name')
    storyPar.setAttribute('id', 'story')

    titlePar.textContent = post.title;
    namePar.textContent = post.author_name;
    storyPar.textContent = post.story;

    div.append(titlePar)
    div.append(namePar)
    div.append(storyPar)

    return div
}

// function deletePost(id){
//     console.log('deleting', id)
//     const options = { 
//         method: 'DELETE',
//     };
//
//     fetch(`http://localhost:5000/posts/${id}`, options)
//         .then(remove())
//         .catch(console.warn)
// }
