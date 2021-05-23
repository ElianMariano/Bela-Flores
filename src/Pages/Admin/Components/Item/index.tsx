import React from 'react'
import api from  '../../../../services/api'
import {Link} from 'react-router-dom'
import {X, Edit} from 'react-feather'

import './styles.css'

interface ItemProps{
    title: string;
    editUrl: string;
    deleteCallback(): any;
}

function Item(props: ItemProps){
    return (
        <div className="item-container">
            <h3 className="item-title">{props.title}</h3>

            <div className="item-options">
                <Link to={props.editUrl}>
                    <button className="edit-item">Editar <Edit color="black" size={20}/></button>
                </Link>

                <button onClick={() => props.deleteCallback()} className="delete-item">Deletar <X color="black" size={20}/></button>
            </div>

        </div>
    )
}

export default Item;