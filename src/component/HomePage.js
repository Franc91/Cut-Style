import React from 'react'

const HomePage = ({user}) => {
        return (
            <div style={{borderRadius: '2rem', backgroundColor:"#CFDAE6", marginBottom: 10, height:'70vh'}} id='Dashboard'>
                {
                    user ? <div>Witaj, prosze wypelnic formularz</div> : <div> Zaloguj się aby wypelnic forularz</div>
                }
            </div>
        )
}

export default HomePage
