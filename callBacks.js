const posts = [
    { name: 'Post one', body: 'This is post one' },
    { name: 'Post two', body: 'This is post two' }
]


// this method put all the "posts" inside of the HTML body
function getPosts() {

    setTimeout(() => {
        let output = ''

        posts.forEach((post, index) => {
            output += `<li>${post.name}</li>`
        })
        document.body.innerHTML = output

    }, 1000);

}

// insert a new post in the "posts" array, then call getPosts method
function createPost(post, callback) {

    setTimeout(() => {
        posts.push(post)

        // call of the getPosts method
        callback()
    }, 2000);

}

createPost({ name: 'Post three', body: 'This is post three' }, getPosts)