import {useContext,useReducer} from 'react'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext'
function UserResults() {
const{loading,users,clearUsers} =useContext(GithubContext)






//loading should be false 
if(!loading){
    return (
        <div className="div grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {users.map((user)=>{
                return <UserItem key={user.id} user={user} />
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
