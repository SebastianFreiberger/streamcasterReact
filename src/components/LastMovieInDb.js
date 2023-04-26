import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';

function LastMovieInDb({producto}){
    if (producto) {
        return(
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Último producto cargado</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={'http://localhost:3000' + producto.rutaImgProd} alt=" Star Wars - Mandalorian "/>
                        </div>
                        <p>{producto.descripcion}</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalles del producto</a>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <h4>Cargando...</h4>
        )
    }        
    }

export default LastMovieInDb;
