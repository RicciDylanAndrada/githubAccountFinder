import {createContext,useState,useReducer} from 'react'

import githubReducer from '../../context/github/GithubReducer'


const GithubContext = createContext()


const GITHUB_URL=process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN=process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider=({children})=>{

 const initalState={
     users:[],
     loading:false
 }
 const [state,dispatch]=useReducer(githubReducer,initalState)
 //get search results  

 const searchUsers=async(text)=>{
        setLoading()
        const params=new URLSearchParams({
            q:text
        })
        const res = await fetch(`${GITHUB_URL}/search/users?${params}`,{
            headers:{
                Authorization:`token${GITHUB_TOKEN}`
            }
        })
    
        const {items} = await res.json()
        console.log(items)
        dispatch({
            type:'GET_USERS',
            payload:items
        })
    }

    const clearUsers=()=>{
        return dispatch({
            type:'CLEAR_USERS'
        })
    }
    const setLoading=()=>{
        return dispatch({
            type:'SET_LOADING'
        })
    }
    return(
        <GithubContext.Provider value={{users:state.users,loading:state.loading,searchUsers,clearUsers}}>
            {children}
        </GithubContext.Provider>
    )
    
}
export default GithubContext