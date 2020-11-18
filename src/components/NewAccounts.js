import React from "react";
import {connect } from "react-redux";
import {DELETE_ACCOUNT_ACTION} from "../redux/accounts/accountActionCreators";
import {useSelector, useDispatch} from "react-redux";


function NewAccounts (props){
    
    const accounts = useSelector((state) => state.accounts );
    const dispatch = useDispatch();


    const allAccounts = accounts.map(account =>{
        return (
        <h2 key ={account.id}>{account.name} <button onClick={() =>{
            dispatch(DELETE_ACCOUNT_ACTION(account.id))
        }}>Delete</button></h2>
        )
    })

    return (
        <div >
            <h1>Accounts</h1>
            {allAccounts}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        accounts : state.accounts
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        deleteAccount :(id) =>{
            dispatch(DELETE_ACCOUNT_ACTION(id));
        }
    }
}


export default NewAccounts;