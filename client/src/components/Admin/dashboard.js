import React from "react";
import { Admin, Resource } from "react-admin";
import {UserList} from "./userList";
import fakeDataProvider from 'ra-data-fakerest';
import { useSelector } from "react-redux";

const Dashboard = () => {
    const usersData = useSelector((state) => state.usersReducer);
    let dataProvider =  fakeDataProvider({
        users: usersData});
    return(
    <Admin dataProvider={dataProvider}>
        <Resource name="users"  list={UserList} />
    </Admin>
    )
}  
  export default Dashboard;