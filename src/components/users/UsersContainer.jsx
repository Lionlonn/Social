import React from 'react'
import { connect } from 'react-redux'
import { follow, setCurrentPage, setUsers, setUsersTotalCount, unFollow, toggleIsFetching } from '../../redux/users-reducer.js'
import axios from 'axios'
import Users from './Users.jsx'
import Preloader from '../common/preloader/preloader.jsx'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setUsersTotalCount(response.data.totalCount)
        });
    }

    

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        });
        
    }

    render () {
        return <>
            { this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                />
        </> 
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         // follow: (userId) => {
//         //     dispatch(followAC(userId))
//         // },
//         // unFollow: (userId) => {
//         //     dispatch(unFollowAC(userId))
//         // },
//         // setUsers: (users) => {
//         //     dispatch(setUsersAC(users))
//         // },
//         // setCurrentPage: (pageNumber) => {
//         //     dispatch(setCurrentPageAc(pageNumber) )
//         // },
//         // setTotalUsersCount: (totalCount) => {
//         //     dispatch(setUsersTotalCountAc(totalCount) )
//         // },
//         // toggleIsFetchingAC : (isFetching) => {
//         //     dispatch(toggleIsFetchingAC(isFetching))
//         // }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer);

export default connect(mapStateToProps, 
    { follow, unFollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching } ) (UsersContainer);