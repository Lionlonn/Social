import React from "react";
import style from './users.module.scss'
import { Link } from "react-router-dom"
import axios from 'axios'

let Users = (props) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
        
        let pages = [];
        for (let i = 1; i < pagesCount; i++) {
            pages.push(i)
            
    }

    
    return (
        <div>
            <div>
                {pages.map(p=> {
                    return (
                        <span className={props.currentPage === p && style.SelectedPage}
                        onClick={(e) => { props.onPageChanged(p)}}>{p}</span>
                    )
                    
                })}
            </div>
            {/* <button onClick={getUsers}>Get Users</button> */}
            {props.users.map((u) => (
            <div key={u.id}>
                <span>
                    <Link to={'/profile/' + u.id}  >
                        <img src={ u.photos.small != null ? u.photos.small : "https://phonoteka.org/uploads/posts/2022-09/1663304449_53-phonoteka-org-p-berserk-gats-art-vkontakte-65.jpg"} className={style.usersPhoto} alt={u.name} />
                    </Link>
                </span>
                <span>
                {u.followed ? (
                    <button onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, { 
                            withCredentials: true,
                            headers: {
                                "API-KEY" : "338b2507-3248-457e-811e-1f2e4642f7e5"
                            }
                        }).then(response => {
                            if (response.data.resultCode == 0) {
                                props.unFollow(u.id)
                            }
                        });
                        
                    }}>UnFollow</button>) :
                    (<button onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, { 
                            withCredentials: true,
                            headers: {
                                "API-KEY" : "338b2507-3248-457e-811e-1f2e4642f7e5"
                            } 
                        }).then(response => {
                            if (response.data.resultCode == 0) {
                                props.follow(u.id)
                            }
                        });
                        
                        }}>Follow</button>)}
                </span>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
                </span>
            </div>
            ))}
        </div>
    );
}

export default Users