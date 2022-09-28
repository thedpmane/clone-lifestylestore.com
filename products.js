const getdata = async() => {
    try {
        let res = await fetch(`http://localhost:3000/posts`);
        let data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getdata()