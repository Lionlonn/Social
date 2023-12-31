import React from 'react'
import { connect } from 'react-redux'
import { follow, setCurrentPage, unFollow, toggleFollowingProggress, getUsers} from '../../redux/users-reducer.js'
import Users from './Users.jsx'
import Preloader from '../common/preloader/preloader.jsx'
import { Navigate } from 'react-router-dom'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        
    }

    render () {
        if (!this.props.isAuth) return <Navigate to={"/login"}/>

        return <>
            { this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}



export default connect(mapStateToProps, 
    { follow, unFollow, setCurrentPage, toggleFollowingProggress, getUsers } ) (UsersContainer);