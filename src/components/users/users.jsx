import React from "react";
import style from './users.module.scss'
import axios from 'axios'




class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
             
            this.props.setUsers(response.data.items)
        });
    
         
         
        
    }

    render () {
        return (
            <div>
                <button onClick={this.getUsers}>Get Users</button>
                {this.props.users.map((u) => (
                <div key={u.id}>
                    <span>
                    <img src={ u.photos.small != null ? u.photos.small : "https://phonoteka.org/uploads/posts/2022-09/1663304449_53-phonoteka-org-p-berserk-gats-art-vkontakte-65.jpg"} className={style.usersPhoto} alt={u.name} />
                    </span>
                    <span>
                    {u.followed ? (
                        <button onClick={() => this.props.unFollow(u.id)}>UnFollow</button>
                    ) : (
                        <button onClick={() => this.props.follow(u.id)}>Follow</button>
                    )}
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
}

// let Users = (props) => {
//     let getUsers = () => {
//         if (props.users.length === 0) {
        
//             axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                
//                 props.setUsers(response.data.items)
//             });
    
            
            
//         }
    
//     }
    
    
//    return (
//     <div>
//         <button onClick={getUsers}>Get Users</button>
//         {props.users.map((u) => (
//         <div key={u.id}>
//             <span>
//             <img src={ u.photos.small != null ? u.photos.small : "https://phonoteka.org/uploads/posts/2022-09/1663304449_53-phonoteka-org-p-berserk-gats-art-vkontakte-65.jpg"} className={style.usersPhoto} alt={u.name} />
//             </span>
//             <span>
//             {u.followed ? (
//                 <button onClick={() => props.unFollow(u.id)}>UnFollow</button>
//             ) : (
//                 <button onClick={() => props.follow(u.id)}>Follow</button>
//             )}
//             </span>
//             <span>
//             <span>
//                 <div>{u.name}</div>
//                 <div>{u.status}</div>
//             </span>
//             <span>
//                 <div>{"u.location.country"}</div>
//                 <div>{"u.location.city"}</div>
//             </span>
//             </span>
//         </div>
//         ))}
//     </div>
// );
    
// }

export default Users