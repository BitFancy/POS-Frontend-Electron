import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import CustomerList from './CustomerList'
import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer';
import SupplierList from './SupplierList';
import AddSupplier from './AddSupplier';
import EditSupplier from './EditSupplier';
import UserList from './UserList';
import AddUser from './AddUser';
import EditUser from './EditUser';
import StoreList from './StoreList';
import AddStore from './AddStore';
import EditStore from './EditStore';

const PeopleIndex = ({ match}) =>(
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/customerlist-people`} />
        <Route path={`${match.url}/customerlist-people`} component={CustomerList} />
        <Route path={`${match.url}/addcustomer-people`} component={AddCustomer} />
        <Route path={`${match.url}/editcustomer-people`} component={EditCustomer} />
        <Route path={`${match.url}/supplierlist-people`} component={SupplierList} />
        <Route path={`${match.url}/addsupplier-people`} component={AddSupplier} />
        <Route path={`${match.url}/editsupplier-people`} component={EditSupplier} />
        <Route path={`${match.url}/userlist-people`} component={UserList} />
        <Route path={`${match.url}/adduser-people`} component={AddUser} />
        <Route path={`${match.url}/edituser-people`} component={EditUser} />
        <Route path={`${match.url}/storelist-people`} component={StoreList} />
        <Route path={`${match.url}/addstore-people`} component={AddStore} />
        <Route path={`${match.url}/editstore-people`} component={EditStore} />




    </Switch>
)

export default PeopleIndex