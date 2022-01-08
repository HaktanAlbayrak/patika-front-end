import axios from "axios"

export async function getData(userId) {
    
    const { data : user } = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const {data:post}=await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    console.log("User :",user,"Post :",post)
}


