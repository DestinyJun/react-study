/**
 * desc：  dashboard组件
 * author：DestinyJun
 * date：  2020/4/21 14:32
 */
import React from 'react';
import './Dashboard.css';
import {Route, Link, Redirect} from "react-router-dom";
import {Home} from "../home/Home";
import {States} from "../bases/State";
import {Events} from "../bases/Events";
import {Forms} from "../bases/Forms";
import {StatePromotion} from "../bases/StatePromotion";
import {Inheritance} from "../bases/Inheritance";

export function Dashboard (props) {
  return (
    <div className='container-fluid'>
      <header className="header">
        <Link to="/home">
          <button className='btn btn-primary mr-4'>主页</button>
        </Link>
        <Link to="/states">
          <button className='btn btn-secondary mr-4'>state及生命周期</button>
        </Link>
        <Link to="/event">
          <button className='btn btn-success mr-4'>事件处理</button>
        </Link>
        <Link to="/forms">
          <button className='btn btn-danger mr-4'>受控表单</button>
        </Link>
        <Link to="/promotion">
          <button className='btn btn-warning mr-4'>状态提升</button>
        </Link>
        <Link to="/Inheritance">
          <button className='btn btn-info mr-4'>组合继承</button>
        </Link>
        <Link to="/news">
          <button className='btn btn-dark mr-4'>新闻</button>
        </Link>
      </header>
      <section className='content'>
        <Route exact path={'/home'}>
          <Home name={'主页'} />
        </Route>
        <Route exact path={'/states'} component={States}/>
        <Route exact path={'/event'} component={Events}/>
        <Route exact path={'/forms'} component={Forms}/>
        <Route exact path={'/promotion'} component={StatePromotion}/>
        <Route exact path={'/inheritance'} component={Inheritance}/>
        {/*<Redirect path={'/'} to={{pathname: "/home", state: {}}}/>*/}
      </section>
    </div>
  );
}
