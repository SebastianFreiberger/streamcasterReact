import React, { useEffect, useState } from 'react';
import image from '../assets/images/logo-DH.png';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';


function SideBar(){
    let [infoProductos, setInfoProductos] = useState({});
    let [infoUsuarios, setinfoUsuarios] = useState([]);
    let [infoDetail, setInfoDetail] = useState({});
    
    const fetchProducts = async ()=>{
        const responseApi = await fetch('http://localhost:3000/api/productos')
        const info = await responseApi.json()
        const responseApiDetail = await fetch('http://localhost:3000/api/productos/' + info.productos[info.productos.length - 1].id)
        const infoDetail = await responseApiDetail.json()
        setInfoDetail(infoDetail)
        setInfoProductos(info)
    }
    const fetchUsers = async ()=>{
        const responseApi = await fetch('http://localhost:3000/api/usuarios')        
        const info = await responseApi.json()        
        setinfoUsuarios(info)        
    }
    

    useEffect(()=>{
        fetchProducts()
        fetchUsers()
    },[])
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - StreamCaster</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Acciones</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/GenresInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categorias</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Último producto</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ContentRowMovies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tablas</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            {/*<!-- Microdesafio 1 -->*/}
            {/*<!--<Route exact path="/">
                <ContentWrapper />
            </Route>
            <Route path="/GenresInDb">
                <GenresInDb />
            </Route>
            <Route path="/LastMovieInDb">
                <LastMovieInDb />
            </Route>
            <Route path="/ContentRowMovies">
                <ContentRowMovies />
            </Route>*/}
            {/*<!-- End Microdesafio 1 -->*/}

            {/*<!-- End Microdesafio 2 -->*/}
            <Switch>
                <Route exact path="/">
                    <ContentWrapper categorias={infoProductos.countByCategory} productos={infoProductos.count} usuarios={infoUsuarios} producto={infoDetail}/>
                </Route>
                <Route path="/GenresInDb">
                    <GenresInDb categorias={infoProductos.countByCategory} />
                </Route>
                <Route path="/LastMovieInDb">
                    <LastMovieInDb producto={infoDetail}/>
                </Route>
                <Route path="/ContentRowMovies">
                    <ContentRowMovies categorias={Object.keys(infoProductos.countByCategory == undefined ? {} : infoProductos.countByCategory).length} productos={infoProductos.count} usuarios={infoUsuarios.length}/>
                </Route>
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;