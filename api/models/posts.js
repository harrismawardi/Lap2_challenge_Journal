const db = require ('../dbConfig/init')

class Post {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.author_name = data.author_name
        this.story = data.story
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const postsData = await db.query(`SELECT * FROM posts;`)
                const posts = postsData.rows.map(d => new Post(d))
                resolve(posts);
            } catch (err) {
                reject('Error retrieving posts')
            }
        })
    }

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`SELECT * FROM posts WHERE id = ${id};`);
                let post = new Post(postData.rows[0]);
                resolve (post);
            } catch (err) {
                reject('Post not found');
            }
        });
    }

    static create(id, title, author_name, story){
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`INSERT INTO posts (title, author_name, story) VALUES (${title}, ${author_name}, ${story}) RETURNING *;`);
                let newPost = new Post(postData.rows[0]);                
                resolve (newPost);
            } catch (err) {
                reject('Error creating Post');
            }
        });
    }
}

    //     update() {
    //         return new Promise (async (resolve, reject) => {
    //             try {
    //                 let updatedPostData = await db.query(`UPDATE posts SET story WHERE id = $1`, [ this.id ]);
    //                 let updatedPost = new Post (updatedPostData.rows[0]);
    //                 resolve (updatedPost);
    //             } catch (err) {
    //                 reject('Error updating post');
    //             }
    //         });
    //     }

    //     destroy(){
    //         return new Promise (async (resolve, reject) => {
    //             try {
    //                 const result = await db.query(`DESTROY FROM posts WHERE id = $1`, [ this.id ]);
    //                 resolve('Post was deleted')
    //             } catch (err) {
    //                 reject('Post could not be deleted')
    //             }
    //         })
    //     };
    // };

module.exports = Post;
