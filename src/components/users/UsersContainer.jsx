import React from "react"
import Users from "./users.jsx"
import { connect } from "react-redux"
import { followAC, setCurrentPageAc, setUsersAC, setUsersTotalCountAc, unFollowAC } from "../../redux/users-reducer.js"


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAc(pageNumber) )
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAc(totalCount) )
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users);