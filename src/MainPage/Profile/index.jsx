import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import EmployeeProfile from './EmployeeProfile';

const ProfileIndex = ({ match}) =>(
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/user-profile`} />
        <Route path={`${match.url}/user-profile`} component={EmployeeProfile} />
    </Switch>
)

export default ProfileIndex