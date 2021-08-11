import React from 'react'
import { Card, Tooltip, Typography } from '@material-ui/core'
import './Charac.css'
import Info from './Info'
import { useHistory } from 'react-router-dom'
function Charac({ item }) {
    const history = useHistory()
    const displayInfo = () => {
        console.log("Character Page", item)
        history.push(`/${item.char_id}`)
        //  <p>Name:{item.name}</p>
    }
    return (
        <div className="charac">
            {/* <h3>charac</h3> */}
            <Card className="card">
                <Tooltip title={
                    <>
                        <Typography>Name:{item.name}</Typography>
                        <Typography>Birthaday:{item.birthday}</Typography>
                        <Typography>Occupation:{item.occupation}</Typography>
                        <Typography>Status:{item.status}</Typography>
                        <Typography>NickName:{item.nickname}</Typography>
                        <Typography>Portrayed:{item.portrayed}</Typography>
                    </>
                }>
                    <img className="image" src={item.img} alt="photo" />

                </Tooltip>
                <button className="button" onClick={displayInfo}>click to get info</button>
            </Card>
            
        </div>

    )
}

export default Charac

