import {useEffect,useState} from 'react'
function UserResults() {

const [users,setUsers]=useState([])
const [loading,setLoading]=useState(true)


useEffect(()=>{
    fetchUsers()

},[])


const fetchUsers=async()=>{
    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`,{
        headers:{
            Authorization:`token${process.env.REACT_APP_GITHUB_TOKEN}`
        }
    })

    const data = await res.json()
    setUsers(data)
    setLoading(false) // because we finally get the users so not loading anymote
}
//loading should be false 
if(!loading){
    return (
        <div className="div grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {users.map((user)=>{
               return  <h3>{user.login}</h3>
            })}
        </div>
    )
}
else{
    return(
        <h3>Loading...</h3>
    )
}
    
}

export default UserResults
