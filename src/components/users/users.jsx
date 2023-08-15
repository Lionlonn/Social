import React from "react";
import style from './users.module.scss'

let Users = (props) => {
    

    return <div>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <img src={u.photoUrl} className={style.usersPhoto}/>
                </span>
                <span>
                    { u.followed 
                        ? <button onClick={() => props.unFollow(u.id)}>UnFollow</button>
                        : <button onClick={() => props.follow(u.id)}>Follow</button>}
                    
                </span>
                <span>
                    <span>
                        <div>{u.fullname}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
    
}

export default Users