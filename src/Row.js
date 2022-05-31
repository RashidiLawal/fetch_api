import React from 'react'
import Cell from './Cell'


const Row = ({item, itemIndex}) => {
    
  return (
    <tr>
        {Object.entries(item, itemIndex).map(([key, value]) => {
            return (
                <Cell key={key} cellData={JSON.stringify(value)}/>
            )
        })}
    </tr>
  )
}

export default Row