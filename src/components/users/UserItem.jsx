import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function UserItem({user:{login,avatar_url}}) {
    return (
        <div className="card shadow-md compact side  bg-base-100">
           <div className="flex-row items-center  space-x-4 card-body">
                <div className="avatar ">
                    <div className="div rounded-full shadow w-14 h-14">
                        <img src={avatar_url} alt="profile"></img>
                    </div>

                </div>


                <div>
                    <div className="h2 card-title">{login}</div>
                    <Link className="text-base-content text-opacity-40"
                    to={`/users/${login}`}
                    >Visit Profile</Link>
                </div>
           </div>
           

        </div>
    )
}

export default UserItem
