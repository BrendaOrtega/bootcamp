import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeContainer from './components/home/HomeContainer'
import Bootcamp from "./components/bootcamp/Bootcamp";
import Courses from "./components/courses/Courses";
import Contacto from "./components/contacto/Contacto";
import Registro from "./components/login/Registro";
import Apply from "./components/bootcamp/Apply";
import ProfileContainer from "./components/profile/ProfileContainer";
import { CoursesDetail } from "./components/courses/CoursesDetail";
import { BootcampDetail } from "./components/bootcamp/BootcampDetail";
import Team from "./components/home/Team";
import Politicas from "./components/home/Politicas";
import Login from './components/login/Login';
import AdminPage from './components/admin/AdminPage';
import BootcampDescript from "./components/bootcamp/BootcampDescript";


export const Router = () => (
    <Switch>
        {/* Admin */}
        <Route path="/admin" component={AdminPage} />

        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/courses" component={Courses} />
        <Route path="/courses/detail" component={CoursesDetail} />
        <Route exact path="/bootcamp" component={Bootcamp} />
        <Route path="/bootcamp-descript" component={BootcampDescript}/>
        <Route path="/bootcamp/detail/:id" component={BootcampDetail} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/politicas-de-privacidad-fixter" component={Politicas} />
        <Route path="/fixter-team" component={Team} />
        <Route path="/login" component={Login} />
        <Route path="/registro" component={Registro} />
        <Route path="/apply" component={Apply} />
        <Route path="/profile" component={ProfileContainer} />
        <Route path="/null" component={ProfileContainer} />
    </Switch>
)

export default Router;