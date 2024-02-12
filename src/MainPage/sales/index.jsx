import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Saleslist from './saleslist'
import Addsales from './addsales'
import Editsales from './editsales'
import Saledetails from './saledetails'

const SalesIndex = ({ match}) =>(
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/generalsettings`} />
        <Route path={`${match.url}/saleslist`} component={Saleslist} />                                                                                                                                                                                        
        <Route path={`${match.url}/add-sales`} component={Addsales} />                                                                                                                                                                                        
        <Route path={`${match.url}/edit-sales`} component={Editsales} />                                                                                                                                                                                        
        <Route path={`${match.url}/sales-details`} component={Saledetails} />                                                                                                                                                                                                                                                                                                                                                                      
    </Switch>
)

export default SalesIndex