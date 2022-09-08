import {GET_BY_ID,ADD_USER,UPDATE_USER,REMOVE_USER } from "../types/users-type";

function getById(data){
    return {type:GET_BY_ID,payload:data}
}

function addUser(data){
    return {type:ADD_USER,payload:data}
}

function upDateUser(data){
    return {type:UPDATE_USER,payload:data}
}

function removeUser(data){
    return {type:REMOVE_USER,payload:data}
}

export {
    getById,
    addUser,
    upDateUser,
    removeUser
}