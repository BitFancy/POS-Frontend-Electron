import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Sweetalert from './sweetalert'
import Tooltip from './tooltip'
import Popover from './popover'
import Ribbon from './ribbon'
import Clipboard from './clipboard'
import Dragdrop from './dragdrop'
import Rangeslider from './rangeslider/rangeslider'
import Rating from './rating'
import Toastr from './toastr'
import Texteditor from './texteditor'
import Counter from './counter'
import Scrollbar from './scrollbar'
import Spinner from './spinner'
import Notification from './notification'
import Lightbox from './lightbox/index'
import Stickynote from './stickynote'
import Timeline from './timeline'
import Formwizard from './formwizard'


const ElementIndex = ({ match}) =>(
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/sweetalerts`} />
        <Route path={`${match.url}/sweetalerts`} component={Sweetalert} />
        <Route path={`${match.url}/tooltip`} component={Tooltip} />
        <Route path={`${match.url}/popover`} component={Popover} />
        <Route path={`${match.url}/ribbon`} component={Ribbon} />
        <Route path={`${match.url}/clipboard`} component={Clipboard} />
        <Route path={`${match.url}/drag-drop`} component={Dragdrop} />
        <Route path={`${match.url}/rangeslider`} component={Rangeslider} />
        <Route path={`${match.url}/rating`} component={Rating} />
        <Route path={`${match.url}/toastr`} component={Toastr} />
        <Route path={`${match.url}/text-editor`} component={Texteditor} />
        <Route path={`${match.url}/counter`} component={Counter} />
        <Route path={`${match.url}/scrollbar`} component={Scrollbar} />
        <Route path={`${match.url}/spinner`} component={Spinner} />
        <Route path={`${match.url}/notification`} component={Notification} />
        <Route path={`${match.url}/lightbox`} component={Lightbox} />
        <Route path={`${match.url}/stickynote`} component={Stickynote} />
        <Route path={`${match.url}/timeline`} component={Timeline} />
        <Route path={`${match.url}/form-wizard`} component={Formwizard} />
    </Switch>
)

export default ElementIndex