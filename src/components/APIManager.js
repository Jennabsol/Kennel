const remoteURL = "http://localhost:3000"

export default Object.create(null, {
    single: {
        value: function (resource, id) {
            return fetch(`${remoteURL}/${resource}/${id}`).then(e => e.json())
        }
    },
    all: {
        value: function (resource) {
            return fetch(`${remoteURL}/${resource}`).then(e => e.json())
        }
    },
    delete: {
        value: function (resource, id) {
            return fetch(`${remoteURL}/${resource}/${id}`, {
                method: "DELETE"
            }).then(e => e.json())
        }
    },
    add: {
        value: function (resource, newObject) {
            return fetch(`${remoteURL}/${resource}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newObject)
            }).then(e => e.json())
        }
    },
    edit: {
        value: function (resource, id, newObject) {
            return fetch(`${remoteURL}/${resource}/${id}`, {
                method: "PUT",
                body: JSON.stringify(newObject)
            }).then(e => e.json())
        }
    },
    //PUT means that you MUST send the entire entity details to a resource, whereas with PATCH, you only send the data that you wish to change aka the delta.
    patch: {
        value: function (resource, id, newObject) {
            return fetch(`${remoteURL}/${resource}/${id}`, {
                method: "PATCH",
                body: JSON.stringify(newObject)
            }).then(e => e.json())
        }
    }
})