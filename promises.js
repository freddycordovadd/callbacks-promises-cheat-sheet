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


function createPost(post) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            // insert the new post in a "posts" array
            posts.push(post)

            const error = false

            if (!error) {
                resolve()
            } else {
                reject('Error: Something went wrong')
            }

        }, 2000)
    })
}



// ###################################################
// ###############  PROMISE METHOD   #################
// ###################################################

// createPost({ name: 'Post three', body: 'This is post three' })
//     .then(getPosts)
//     .catch(err => console.log(err))



// ###################################################
// ###############  PROMISE.ALL   ####################
// ###################################################

const promise1 = Promise.resolve('hello')
const promise2 = 10
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye')
})

// this promise has to have a .then because fetch need two .then
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())


Promise.all([promise1, promise2, promise3, promise4])
    .then(values => console.log(values))