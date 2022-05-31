import Row from './Row'

const Table = ({items}) => {
  
  return (
    <div className='table-container'>
      <table>
        <tbody>
          {items.map((item, itemIndex) => (
            <Row key={`item_${itemIndex}`} item={item}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table