new Promise((resolve, reject) => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => {
            if(!response){
                return new Error("Network problem or api problem")
            }
            return response.json();
        })
        .then((data) => {
            resolve(data)
        })
        .catch((data) => {
            reject("Not working!")
        })
})
.then(data => {
    console.log(data);
})
.catch((info) => {
    console.log(info);
})
