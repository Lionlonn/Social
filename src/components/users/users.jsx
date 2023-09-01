import React from "react";
import style from './users.module.scss'
import axios from 'axios'




class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }

    

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
             
        this.props.setUsers(response.data.items)
        });
        
    }

    render () {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = [];
        for (let i = 1; i < pagesCount; i++) {
            pages.push(i)
        }

        
        return (
            <div>
                <div>
                    {pages.map(p=> {
                        return (
                            <span className={this.props.currentPage === p && style.SelectedPage}
                            onClick={(e) => { this.onPageChanged(p)}}>{p}</span>
                        )
                        
                    })}
                </div>
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


export default Users