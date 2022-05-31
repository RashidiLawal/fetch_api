import React from 'react'
import ListItem from './ListItem'

const List = ({items}) => {
  return (
    <ul>
        {items.map((item, itemIndex) => (
          <ListItem  key={`item_${itemIndex}`} item={item}/>
        ))}
    </ul>
  )
}

export default List