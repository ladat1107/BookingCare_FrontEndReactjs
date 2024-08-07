import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import UserRedux from '../containers/System/UserRedux';
import RegisterPackageGroupOrAcc from '../containers/System/RegisterPackageGroupOrAcc';
import Header from '../containers/Header/Header';
import DoctorManaga from '../containers/System/DoctorManaga';
import SchedulePage from "../containers/Doctor/ManageSchedule/SchedulePage"
import SpecialtyManage from "../containers/System/SpecialtyManage"
import ClinicManaga from "../containers/System/ClinicManaga"

class System extends Component {

    render() {
        const { systemMenuPath } = this.props;
        return (
            <Fragment>
                {this.props.isLoggedIn && <Header />}
                <div className="system-container">
                    <div className="system-list">
                        <Switch>
                            <Route path="/system/user-manage" component={UserManage} />
                            <Route path="/system/user-manage-redux" component={UserRedux} />
                            <Route path="/system/doctor-manage" component={DoctorManaga} />
                            <Route path="/system/manage-schedule-doctor" component={SchedulePage} />
                            <Route path="/system/specialty-manage" component={SpecialtyManage} />
                            <Route path="/system/clinic-manage" component={ClinicManaga} />
                            {/* <Route component={() => { return (<Redirect to={systemMenuPath} />) }} /> */}
                        </Switch>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        systemMenuPath: state.app.systemMenuPath

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
