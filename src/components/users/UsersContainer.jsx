import React from 'react'
import { connect } from 'react-redux'
import { follow, setCurrentPage, setUsers, setUsersTotalCount, unFollow, toggleIsFetching } from '../../redux/users-reducer.js'
import axios from 'axios'
import Users from './Users.jsx'
import Preloader from '../common/preloader/preloader.jsx'
import { UsersAPI } from '../../api/Users/api.js'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setUsersTotalCount(data.totalCount)
        });
    }

    

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        UsersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
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



export default connect(mapStateToProps, 
    { follow, unFollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching } ) (UsersContainer);