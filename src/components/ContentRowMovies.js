import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */


function ContentRowMovies({categorias, productos, usuarios}){
    
    let moviesInDB = {
        title: 'Productos en Base de datos',
        color: 'primary', 
        cuantity: productos,
        icon: 'fa-clipboard-list'
    }
    
    /* <!-- Total awards --> */
    
    let totalAwards = {
        title:' Total de categorias', 
        color:'success', 
        cuantity: categorias,
        icon:'fa-award'
    }
    
    /* <!-- Actors quantity --> */
    
    let actorsQuantity = {
        title:'Usuarios' ,
        color:'warning',
        cuantity: usuarios,
        icon:'fa-user-check'
    }
    
    let cartProps = [moviesInDB, totalAwards, actorsQuantity];

    if (categorias && productos && usuarios) {
        return (
            <div className="row">                
                {cartProps.map( (movie, i) => {    
                    return <SmallCard {...movie} key={i}/>                
                })}    
            </div>
        )        
    } else {
        return (
            <h4>Cargando...</h4>
        )
    }
}

export default ContentRowMovies;