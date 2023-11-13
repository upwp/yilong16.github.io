function getCalendarDBData() {
    return import('./post.js')
        .then(post => post.send("/data.json"))
        .catch(error => console.error(error));
}