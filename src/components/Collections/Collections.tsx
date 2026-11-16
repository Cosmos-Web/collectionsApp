import './collections.scss'
import CollectionCard from "../CollectionCard/CollectionCard.tsx";


const collections = [
  {
    id: 1,
    title: 'Что такое Virtual DOM, и как он работает? Митап True Tech Go',
    imageSrc: "https://picsum.photos/200",
    isFree: false,
    keywords: ['Javascript', 'Javascript', 'Javascript', 'Javascript'],
    specializations: [
      {
        "id": 1,
        "title": "Java",
        "description": "Java разработчик",
        "imageSrc": null,
        "createdAt": "2024-05-30T19:52:23.118Z",
        "updatedAt": "2024-05-30T19:52:23.118Z"
      },
      {
        "id": 5,
        "title": "Blockchain",
        "description": "Blockchain разработчик",
        "imageSrc": null,
        "createdAt": "2024-05-30T19:52:23.118Z",
        "updatedAt": "2024-05-30T19:52:23.118Z"
      }
    ],
    questionsCount: 30
  },
  {
    id: 2,
    title: 'Что такое Virtual DOM, и как он работает? Митап True Tech Go',
    imageSrc: 'https://picsum.photos/300',
    isFree: true,
    keywords: ['Javascript', 'React', 'Python Backend Developer', 'Software tester', 'Python Backend Developer', 'Python Backend Developer', 'Python Backend Developer'],
    specializations: [
      {
        "id": 1,
        "title": "Java",
        "description": "Java разработчик",
        "imageSrc": null,
        "createdAt": "2024-05-30T19:52:23.118Z",
        "updatedAt": "2024-05-30T19:52:23.118Z"
      },
      {
        "id": 5,
        "title": "Blockchain",
        "description": "Blockchain разработчик",
        "imageSrc": null,
        "createdAt": "2024-05-30T19:52:23.118Z",
        "updatedAt": "2024-05-30T19:52:23.118Z"
      }
    ],
    questionsCount: 2
  },
  {
    id: 3,
    title: 'Что такое Virtual DOM, и как он работает? Митап True Tech Go',
    isFree: true,
    keywords: ['Fullstack', 'Fullstack', 'Python Backend Developer', 'Software tester'],
    specializations: [
      {
        "id": 1,
        "title": "Java",
        "description": "Java разработчик",
        "imageSrc": null,
        "createdAt": "2024-05-30T19:52:23.118Z",
        "updatedAt": "2024-05-30T19:52:23.118Z"
      },
      {
        "id": 5,
        "title": "Blockchain",
        "description": "Blockchain разработчик",
        "imageSrc": null,
        "createdAt": "2024-05-30T19:52:23.118Z",
        "updatedAt": "2024-05-30T19:52:23.118Z"
      }
    ],
    questionsCount: 1
  }
];
export default function Collections() {

  return (
    <div className="collections">
      <h1 className="collections__title">Коллекции</h1>
      {
        collections.length > 0 ?
          <ul className="collections__list">
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
