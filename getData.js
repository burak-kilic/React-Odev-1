import axios from "axios";

const getData = async (id) =>{
    
    const {data:user} = await axios('https://jsonplaceholder.typicode.com/users/' + id);
    const {data:post} = await axios('https://jsonplaceholder.typicode.com/posts?userId='+id);

    console.log(`User ${id}:`,user);
    console.log(`User ${id} Posts:`,post)
}
export default getData;