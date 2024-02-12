import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Basicinput from './basic-input'
import Forminputgroup from './form-input-group'
import HorizontalForm from './horizontal-form'
import VerticalForm from './vertical-form'
import Formmask from './form-mask'
import Formvalidation from './form-validation'
import FormSelect2 from './formselect2'
import Fileupload from './fileupload'




const IconIndex = ({ match}) =>(
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/form-basic-inputs`} />
        <Route path={`${match.url}/form-basic-inputs`} component={Basicinput} />        
        <Route path={`${match.url}/form-input-groups`} component={Forminputgroup} />        
        <Route path={`${match.url}/form-horizontal`} component={HorizontalForm} />        
        <Route path={`${match.url}/form-vertical`} component={VerticalForm} />        
        <Route path={`${match.url}/form-mask`} component={Formmask} />        
        <Route path={`${match.url}/form-validation`} component={Formvalidation} />        
        <Route path={`${match.url}/form-select2`} component={FormSelect2} />              
        <Route path={`${match.url}/form-fileupload`} component={Fileupload} />        
        
    </Switch>
)

export default IconIndex