function getDriveData(f) {
    return import('./post.js')
        .then(post => post.send("/drive" + f))
        .catch(error => console.error(error));
}

function getDriveRawData(f) {
    return import('./post.js')
        .then(post => post.send("/drive" + f, (res) => res.text()))
        .catch(error => console.error(error));
}