
const sendPost = (url : string,data : object) => {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`,{
        headers : {"Content-type" : "application/json"},
        method : "POST",
        body : JSON.stringify(data)
    });
}

export default sendPost;