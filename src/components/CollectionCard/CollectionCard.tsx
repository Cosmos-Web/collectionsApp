import './collectionCard.scss'
import {useState} from "react";
import DOMPurify from 'dompurify';
import {Link} from "react-router-dom";

export default function CollectionCard({collection}) {
  return (
    <Link className="collection-card">
      <div className="collection-card__header">
        <h2 className="collection-card__title">{collection.title}</h2>
        <button className="collection-card__show-btn trs">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="#6A0BFF" strokeWidth="1.66667" strokeLinecap="round"
                  strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </Link>
  )
}
