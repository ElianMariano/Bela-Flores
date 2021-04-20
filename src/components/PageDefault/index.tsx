import React from 'react'

import Home from '../Header'
import Footer from '../Footer'

interface PageDefaultProps{
    children: React.ReactNode
}

function PageDefault(props: PageDefaultProps) {
    return (
        <>
            <Home />
                {props.children}
            <Footer />
        </>
    )
}

export default PageDefault;