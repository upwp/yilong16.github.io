var serverURL = "http://localhost";

export function send(dir, options = { method: "GET", d: null }, callback = (res) => res.json()) {
    if (typeof options == "function") {
        callback = options;
    }

    return fetch(serverURL + dir, {
        method: options.method,
        credentials: "include",
        body: options.d
    })
        .then(callback)
        .catch(err => console.error(err));
}

// the main post function