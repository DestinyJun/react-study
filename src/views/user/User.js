/**
 * desc：  User
 * author：DestinyJun
 * date：  2020/4/21 14:43
 */
import React, {Component} from 'react';
import './User.css';
import {Link, Route} from "react-router-dom";
import {UserList} from "./UserList";
import {UserAdd} from "./UserAdd";

export class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { path, url } = this.props.match;
    console.log(this.props.match);
    return (
      <div>
        <p>User</p>
        <div className='left'>
          <Link to={`${url}/list`}>
            <button className='btn btn-outline-info'>用户列表</button>
          </Link>
          <Link to={`${url}/add`}>
            <button className='btn btn-outline-danger'>增加用户</button>
          </Link>
        </div>
        <div className='right'>
          <Route exact path={path} component={UserList}/>
          <Route exact path={`${path}/:add`} component={UserAdd} />
          {/*<Redirect path={'/user'} to={{pathname: "/user/list", state: {from: this.props.location}}} />*/}
          {/*<Redirect path={'/user'} to={{pathname: "/user/list", state: {from: this.props.location}}} />*/}
        </div>
      </div>
    );
  }
}
