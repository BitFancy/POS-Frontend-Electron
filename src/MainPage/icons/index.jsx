import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Fontawesome from './font-awesome'
import Feather from './feather'
import Ionic from './ionic'
import Material from './material'
import Pe7 from './pe7'
import Simpleline from './simpleline'
import Themify from './themify'
import Weather from './weather'
import Typicon from './typicon'
import Flag from './flag'



const IconIndex = ({ match}) =>(
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/icon-fontawesome`} />
        <Route path={`${match.url}/icon-fontawesome`} component={Fontawesome} />
        <Route path={`${match.url}/icon-feather`} component={Feather} />
        <Route path={`${match.url}/icon-ionic`} component={Ionic} />
        <Route path={`${match.url}/icon-material`} component={Material} />
        <Route path={`${match.url}/icon-pe7`} component={Pe7} />
        <Route path={`${match.url}/icon-simpleline`} component={Simpleline} />
        <Route path={`${match.url}/icon-themify`} component={Themify} />
        <Route path={`${match.url}/icon-weather`} component={Weather} />
        <Route path={`${match.url}/icon-typicon`} component={Typicon} />
        <Route path={`${match.url}/icon-flag`} component={Flag} />
        
    </Switch>
)

export default IconIndex