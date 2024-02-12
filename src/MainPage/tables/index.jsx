import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Basictable from './basictable'
import Datatable from './datatable'





const TableIndex = ({ match}) =>(
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/tables-basic`} />
        <Route path={`${match.url}/tables-basic`} component={Basictable} />                     
        <Route path={`${match.url}/data-tables`} component={Datatable} />                     
        
    </Switch>
)

export default TableIndex