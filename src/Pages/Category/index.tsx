import React from 'react'
import {useParams} from 'react-router-dom'
import PageDefault from '../../components/PageDefault'

function Category(){
    const {category} = useParams<{category: string}>();

    return (
        <PageDefault>
            <h1>{category}</h1>
        </PageDefault>
    )
}

export default Category;