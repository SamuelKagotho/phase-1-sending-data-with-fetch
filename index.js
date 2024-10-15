function submitData(name, email) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },

        body: JSON.stringify({name,email})        
      })
      .then(function (res) {
        return res.json()
      })
      .then(function (object) {
        document.body.textContent = object["id"]
      })
      .catch(function (error) {
        document.body.textContent = error.message
      })
  }
