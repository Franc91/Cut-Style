import React from 'react'

const HomePage = ({user}) => {
        return (
            <div style={{border: '1px solid red', marginBottom: 10, height:'65vh'}} id='Dashboard'>
                {
                    user ? <div>Witaj, prosze wypelnic formularz</div> : <div> Zaloguj się aby wypelnic forularz</div>
                }
            </div>
        )
}

export default HomePage
