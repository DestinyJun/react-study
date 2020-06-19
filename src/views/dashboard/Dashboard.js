/**
 * desc：  dashboard组件
 * author：DestinyJun
 * date：  2020/4/21 14:32
 */
import React from 'react';
import './Dashboard.css';
import {Route, Link} from "react-router-dom";
import {Home} from "../home/Home";
import {States} from "../bases/State";
import {Events} from "../bases/Events";
import {Forms} from "../bases/Forms";
import {StatePromotion} from "../bases/StatePromotion";
import {Inheritance} from "../bases/Inheritance";
import {Context} from "../bases/Context";
import {Errors} from "../bases/Errors";
import {Refs} from "../bases/Refs";
import {Fragments} from "../bases/Fragments";
import {HeightComponent} from "../bases/HeightComponent";
import {ThirdParty} from "../bases/ThirdParty";
import {DeepJsx} from "../bases/DeepJsx";
import {Performance} from "../bases/Performance";
import {Portals} from "../bases/Portals";
import {Profiler} from "../bases/Profiler";

export function Dashboard(props) {
  return (
    <div className='container-fluid'>
      <header className="sidebar">
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
        <Link to="/context">
          <button className='btn btn-dark mr-4'>context</button>
        </Link>
        <Link to="/errors">
          <button className='btn btn-primary mr-4'>错误边界</button>
        </Link>
        <Link to="/refs">
          <button className='btn btn-secondary mr-4'>Refs转发</button>
        </Link>
        <Link to="/fragments">
          <button className='btn btn-success mr-4'>Fragments</button>
        </Link>
        <Link to="/heightCom">
          <button className='btn btn-danger mr-4'>高阶组件</button>
        </Link>
        <Link to="/third">
          <button className='btn btn-warning mr-4'>与第三方库协同</button>
        </Link>
        <Link to={'/jsx'}>
          <button className='btn btn-info mr-4'>深入JSX</button>
        </Link>
        <Link to={'/performance'}>
          <button className='btn btn-dark mr-4'>性能优化</button>
        </Link>
        <Link to={'/portals'}>
          <button className='btn btn-primary mr-4'>Portals(暂时放弃)</button>
        </Link>
        <Link to={'/profiler'}>
          <button className='btn btn-secondary mr-4'>Profiler</button>
        </Link>
      </header>
      <section className='content'>
        <Route exact path={'/home'}>
          <Home name={'主页'}/>
        </Route>
        <Route exact path={'/states'} component={States}/>
        <Route exact path={'/event'} component={Events}/>
        <Route exact path={'/forms'} component={Forms}/>
        <Route exact path={'/promotion'} component={StatePromotion}/>
        <Route exact path={'/inheritance'} component={Inheritance}/>
        <Route exact path={'/context'} component={Context}/>
        <Route exact path={'/errors'} component={Errors}/>
        <Route exact path={'/refs'} component={Refs}/>
        <Route exact path={'/fragments'} component={Fragments}/>
        <Route exact path={'/heightCom'} component={HeightComponent}/>
        <Route exact path={'/third'} component={ThirdParty}/>
        <Route exact path={'/jsx'} component={DeepJsx}/>
        <Route exact path={'/performance'} component={Performance}/>
        <Route exact path={'/portals'} component={Portals}/>
        <Route exact path={'/profiler'} component={Profiler}/>
        {/*<Redirect path={'/'} to={{pathname: "/home", state: {}}}/>*/}
      </section>
    </div>
  );
}
