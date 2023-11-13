function login(name, pwd) {
    return import('./post.js')
        .then(post => post.send("/verify", { "method": "POST", "d": JSON.stringify({ username: name, password: pwd }) }))
        .catch(err => console.error(err));
}

function getUserData() {
    return import('./post.js')
        .then(post => post.send("/user", { "method": "POST", "d": null }))
        .catch(err => console.error(err));
}