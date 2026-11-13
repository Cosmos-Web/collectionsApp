import './collections.scss'
import CollectionCard from "../CollectionCard/CollectionCard.tsx";


const collections = [
  {
    id: 1,
    title: 'test-1'
  }
];
export default function Collections() {

  return (
    <div className="collections">
      <h1 className="questions__title">Коллекции</h1>
      {
        collections.length > 0 ?
          <ul className="collections">
            {
              collections.map(collection => <li key={collection.id}><CollectionCard collection={collection}/></li>)
            }
          </ul>
          :
          <p>Ничего не найдено</p>
      }
    </div>
  )
}
