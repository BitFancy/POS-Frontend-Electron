import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Genaral from './genaral'
import Email from './email'
import Payment from './payment'
import Currency from './currency'
import Grouppermission from './grouppermission'
import Createpermission from './createpermission'
import Editpermission from './Editpermission'
import Taxrates from './taxrates'






const UserIndex = ({ match}) =>(
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/generalsettings`} />
        <Route path={`${match.url}/generalsettings`} component={Genaral} />                                                                                             
        <Route path={`${match.url}/emailsettings`} component={Email} />                                                                                             
        <Route path={`${match.url}/paymentsettings`} component={Payment} />                                                                                             
        <Route path={`${match.url}/currencysettings`} component={Currency} />                                                                                             
        <Route path={`${match.url}/grouppermissions`} component={Grouppermission} />                                                                                             
        <Route path={`${match.url}/createpermission`} component={Createpermission} />                                                                                             
        <Route path={`${match.url}/editpermission`} component={Editpermission} />                                                                                             
        <Route path={`${match.url}/taxrates`} component={Taxrates} />                                                                                             
                                                                                           
                                                                                                  
        
    </Switch>
)

export default UserIndex