import Search from "../Search/Search.tsx";
import './filters.scss'
import Filter from "../Filter/Filter.tsx";
import {accessData} from "../../constants/collectionFilters.ts";

const specializations = [
  {
    "id": 26,
    "title": "iOS Mobile Developer",
    "slug": "ios-mobile-developer",
    "description": "iOS-разработчик — это программист, который создаёт и поддерживает различные приложения для операционной системы iOS.",
    "imageSrc": null,
    "createdAt": "2024-12-13T15:33:33.443Z",
    "updatedAt": "2026-09-23T14:09:12.023Z",
    "createdBy": null
  },
  {
    "id": 11,
    "title": "React Frontend Developer",
    "slug": "react-frontend-developer",
    "description": "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
    "imageSrc": null,
    "createdAt": "2024-10-03T09:08:10.605Z",
    "updatedAt": "2026-09-30T22:20:07.366Z",
    "createdBy": null
  },
  {
    "id": 27,
    "title": "Android Mobile Developer",
    "slug": "android-mobile-developer",
    "description": "Android-developer или андроид-разработчик — программист, который создает программное обеспечение (ПО) для операционной системы Android.",
    "imageSrc": null,
    "createdAt": "2024-12-13T15:34:12.455Z",
    "updatedAt": "2024-12-13T15:34:12.455Z",
    "createdBy": null
  },
  {
    "id": 28,
    "title": "Rust Backend Developer",
    "slug": "rust-backend-developer",
    "description": "Rust-разработчик — это специалист, который занимается разработкой софта с использованием языка Rust. Его часто всего применяют в backend-разработке",
    "imageSrc": null,
    "createdAt": "2024-12-13T15:35:50.181Z",
    "updatedAt": "2024-12-13T15:35:50.181Z",
    "createdBy": null
  },
  {
    "id": 32,
    "title": "C/C++ Backend Developer",
    "slug": "ccplusplus-backend-developer",
    "description": "C/C++ бэкэнд разработчик – специалист, который разрабатывает высокопроизводительные серверные приложения, системы реального времени и низкоуровневое ПО.",
    "imageSrc": null,
    "createdAt": "2025-02-06T18:40:26.115Z",
    "updatedAt": "2025-02-06T18:40:26.115Z",
    "createdBy": null
  },
  {
    "id": 33,
    "title": "C# Backend Developer",
    "slug": "c-backend-developer",
    "description": "C# бэкэнд разработчик – специалист, который создаёт серверные приложения на .NET, включая веб-API, бизнес-логику и работу с базами данных.",
    "imageSrc": null,
    "createdAt": "2025-02-06T18:40:41.619Z",
    "updatedAt": "2025-02-06T18:40:41.619Z",
    "createdBy": null
  },
  {
    "id": 34,
    "title": "Data Scientist",
    "slug": "data-scientist",
    "description": "Дата-сайентист – специалист, который анализирует данные, строит модели машинного обучения и прогнозирует тренды для автоматизации решений.",
    "imageSrc": null,
    "createdAt": "2025-02-06T18:40:57.986Z",
    "updatedAt": "2025-02-06T18:40:57.986Z",
    "createdBy": null
  },
  {
    "id": 35,
    "title": "Game Developer",
    "slug": "game-developer",
    "description": "Гейм-девелопер – разработчик, создающий игровые механики, графику и логику видеоигр с использованием игровых движков и программирования.",
    "imageSrc": null,
    "createdAt": "2025-02-06T18:41:12.173Z",
    "updatedAt": "2025-02-06T18:41:12.173Z",
    "createdBy": null
  },
  {
    "id": 20,
    "title": "Java Backend Developer",
    "slug": "java-backend-developer",
    "description": "Это специалист, который разрабатывает серверные приложения на языке Java с использованием фреймворков, таких как Spring Framework",
    "imageSrc": null,
    "createdAt": "2024-12-07T18:53:51.891Z",
    "updatedAt": "2025-03-08T16:11:55.762Z",
    "createdBy": null
  },
  {
    "id": 21,
    "title": "Node.js Backend Developer",
    "slug": "nodejs-backend-developer",
    "description": "Это специалист, который разрабатывает серверные приложения и сервисы с использованием платформы Node.js.",
    "imageSrc": null,
    "createdAt": "2024-12-07T19:06:16.704Z",
    "updatedAt": "2025-03-08T16:37:48.063Z",
    "createdBy": null
  },
  {
    "id": 23,
    "title": "Golang Backend Developer",
    "slug": "golang-backend-developer",
    "description": "Бэкенд-разработчик на Golang специализируется на создании серверной части приложений, используя язык программирования Go, известный своей эффективностью и простотой синтаксиса.",
    "imageSrc": null,
    "createdAt": "2024-12-12T08:19:06.225Z",
    "updatedAt": "2026-01-14T10:50:44.345Z",
    "createdBy": null
  },
  {
    "id": 29,
    "title": "QA Engineer",
    "slug": "qa-engineer",
    "description": "QA-тестировщик или инженер по тестированию (QA-engineer) — это специалист, который создаёт сценарии тестирования, прогнозирует сбои и находит ошибки в продуктах.",
    "imageSrc": null,
    "createdAt": "2024-12-13T15:37:18.095Z",
    "updatedAt": "2025-11-30T16:35:42.035Z",
    "createdBy": null
  },
  {
    "id": 24,
    "title": "PHP Backend Developer",
    "slug": "php-backend-developer",
    "description": "PHP-разработчик – это специалист, который пишет код на языке программирования, предназначенном для разработки сайтов и веб-приложений.",
    "imageSrc": null,
    "createdAt": "2024-12-13T15:31:35.357Z",
    "updatedAt": "2026-02-15T18:53:06.620Z",
    "createdBy": null
  },
  {
    "id": 19,
    "title": "Python Backend Developer",
    "slug": "python-backend-developer",
    "description": "это специалист, который занимается созданием и поддержкой серверной части веб-приложений и программного обеспечения на языке Python.",
    "imageSrc": null,
    "createdAt": "2024-12-07T18:52:21.327Z",
    "updatedAt": "2026-06-18T17:28:22.358Z",
    "createdBy": null
  },
  {
    "id": 25,
    "title": "Ruby Backend Developer",
    "slug": "ruby-backend-developer",
    "description": "Программисты Ruby (Ruby Developers) создают сервисную часть сайтов, корпоративные приложения, высоконагруженное программное обеспечение на языке общего назначения Ruby",
    "imageSrc": null,
    "createdAt": "2024-12-13T15:32:58.103Z",
    "updatedAt": "2026-05-21T17:22:46.234Z",
    "createdBy": null
  }
]

const selectedSpecialization='26'
const selectedAccess = '1'

export default function Filters() {
  return (
    <>
      <div className="filters">
        <div className="filters__close _tablet _mob">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.35891 7.47601C8.11483 7.23194 7.7191 7.23194 7.47502 7.47601C7.23095 7.72009 7.23095 8.11582 7.47502 8.3599L9.11643 10.0013L7.47504 11.6427C7.23096 11.8868 7.23096 12.2825 7.47504 12.5266C7.71912 12.7706 8.11485 12.7706 8.35893 12.5266L10.0003 10.8852L11.6417 12.5265C11.8858 12.7706 12.2815 12.7706 12.5256 12.5265C12.7696 12.2825 12.7696 11.8867 12.5256 11.6427L10.8842 10.0013L12.5256 8.35991C12.7697 8.11584 12.7697 7.72011 12.5256 7.47603C12.2815 7.23195 11.8858 7.23195 11.6417 7.47603L10.0003 9.11741L8.35891 7.47601Z" fill="#F3164E"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.0003 1.04297C5.05277 1.04297 1.04199 5.05375 1.04199 10.0013C1.04199 14.9489 5.05277 18.9596 10.0003 18.9596C14.9479 18.9596 18.9587 14.9489 18.9587 10.0013C18.9587 5.05375 14.9479 1.04297 10.0003 1.04297ZM2.29199 10.0013C2.29199 5.74411 5.74313 2.29297 10.0003 2.29297C14.2575 2.29297 17.7087 5.74411 17.7087 10.0013C17.7087 14.2585 14.2575 17.7096 10.0003 17.7096C5.74313 17.7096 2.29199 14.2585 2.29199 10.0013Z" fill="#F3164E"/>
            <path d="M8.35891 7.47601C8.11483 7.23194 7.7191 7.23194 7.47502 7.47601C7.23095 7.72009 7.23095 8.11582 7.47502 8.3599L9.11643 10.0013L7.47504 11.6427C7.23096 11.8868 7.23096 12.2825 7.47504 12.5266C7.71912 12.7706 8.11485 12.7706 8.35893 12.5266L10.0003 10.8852L11.6417 12.5265C11.8858 12.7706 12.2815 12.7706 12.5256 12.5265C12.7696 12.2825 12.7696 11.8867 12.5256 11.6427L10.8842 10.0013L12.5256 8.35991C12.7697 8.11584 12.7697 7.72011 12.5256 7.47603C12.2815 7.23195 11.8858 7.23195 11.6417 7.47603L10.0003 9.11741L8.35891 7.47601Z" stroke="#F3164E"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.0003 1.04297C5.05277 1.04297 1.04199 5.05375 1.04199 10.0013C1.04199 14.9489 5.05277 18.9596 10.0003 18.9596C14.9479 18.9596 18.9587 14.9489 18.9587 10.0013C18.9587 5.05375 14.9479 1.04297 10.0003 1.04297ZM2.29199 10.0013C2.29199 5.74411 5.74313 2.29297 10.0003 2.29297C14.2575 2.29297 17.7087 5.74411 17.7087 10.0013C17.7087 14.2585 14.2575 17.7096 10.0003 17.7096C5.74313 17.7096 2.29199 14.2585 2.29199 10.0013Z" stroke="#F3164E"/>
          </svg>
        </div>
        <div className="filters__item">
          <Search />
        </div>
        <div className="filters__item">
          <Filter filterName={'Специализация'} filterItems={specializations} selectedItem={selectedSpecialization} multiple={false}/>
        </div>
        <div className="filters__item">
          <Filter filterName={'Доступ'} filterItems={accessData} selectedItem={selectedAccess} multiple={false} hasIcon/>
        </div>
      </div>
    </>
  )
}
