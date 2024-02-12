import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Newuser from './newuser'
import Userlists from './userlists'
import Newuseredit from './newuseredit'
import Newcustomer from './newcustomer'
import Customerlists from './customerlists'





const UserIndex = ({ match}) =>(
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/newuser`} />
        <Route path={`${match.url}/newuser`} component={Newuser} />                                                                                             
        <Route path={`${match.url}/userlists`} component={Userlists} />                                                                                             
        <Route path={`${match.url}/newuseredit`} component={Newuseredit} />      
        <Route path={`${match.url}/newcustomer`} component={Newcustomer} />                                                                                             
        <Route path={`${match.url}/customerlists`} component={Customerlists} />                                                                                          
    </Switch>
)

export default UserIndex