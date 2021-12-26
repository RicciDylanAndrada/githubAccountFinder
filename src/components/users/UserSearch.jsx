import {useState,useContext} from 'react'
import GithubContext from '../../context/github/GithubContext'
function UserSearch() {
    const{users,searchUsers,clearUsers}=useContext(GithubContext)
    const [text,setText]=useState()

    const handleChange=(e)=>{
        e.preventDefault()
        return setText(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(text===''){
            alert("Please enter a search")
        }
        else{
            searchUsers(text)
            setText('')

        }

    }
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 l:grid-cols-2
         md:grid-cols-2 mb-8 gap-8">
         <div className="">
             <form onSubmit={handleSubmit}>
             <div className="form-control">
                <div className="relative">
                     <input type="text" className="input w-full pr-40
                      bg-gray-200 lg input-lg 
                     text-black"
                     placeholder="Search"
                     value={text}
                     onChange={handleChange}


                     />
                     <button type="submit"
                     className="button absolute top-0 right-0  rounded-l-none w-36 btn btn-lg">
                         Go
                     </button>
 
                 </div>
             </div>
                
             </form>
         </div>
         {users.length >0 && (
 <div className="">
             <div onClick={clearUsers} className="btn btn-ghost btn-lg">
                 Clear
             </div>
         </div>
         )}
        
            
        </div>
    )
}

export default UserSearch
