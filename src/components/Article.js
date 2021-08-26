import React, { useState } from "react";
import axios from "axios";

const Article = ({ article }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState("");
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
    const data = {
      author: article.author,
      content: editedContent ? editedContent : article.content,
      date: article.date,
    };

    axios.put("http://localhost:3003/articles/" + article.id, data);
    setIsEditing(false);
  };

  return (
    <div className="article" style={{ background : isEditing ? "#f3feff" : 'white' }}>
      <div className="card-header">
        <h3>{article.author}</h3>
        <em>Posté le {dateParser(article.date)}</em>
      </div>
      {isEditing ? (
        <textarea
          onChange={(e) => setEditedContent(e.target.value)}
          autoFocus
          defaultValue={editedContent ? editedContent : article.content}
        ></textarea>
      ) : (
        <p>{editedContent ? editedContent : article.content}</p>
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
