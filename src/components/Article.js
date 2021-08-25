import React, { useState } from "react";
import axios from "axios";

const Article = ({ article }) => {
  const [isEditing, setIsEditing] = useState(false);
  //fonction pour convertir l'heure timestamp en affichage normal
  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
    return newDate;
  };

  //fonction pour validation du bouton après l'édition

  const handleEdit = () => {
    axios.put("http://localhost:3003/articles" + article.id, );
    setIsEditing(false);
  };
  return (
    <div className="article">
      <div className="card-header">
        <h3>{article.author}</h3>
        <em>Posté le {dateParser(article.date)}</em>
      </div>
      {isEditing ? (
        <textarea autoFocus defaultValue={article.content}></textarea>
      ) : (
        <p>{article.content}</p>
      )}
      <div className="btn-container">
        {isEditing ? (
          <button onClick={handleEdit}>Valider</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Article;
