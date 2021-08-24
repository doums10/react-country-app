import React from "react";

const Article = ({article}) => {

	//fonction pour convertir l'heure timestamp en affichage normal 
	const dateParser = (date) => {
		let newDate = new Date(date).toLocaleDateString("fr-FR", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
		;
		return newDate;
	}
  return (
    <div className="article">
      <div className="card-header">
        <h3>{article.author}</h3>
        <em>Posté le {dateParser(article.date)}</em>
      </div>
      <p>{article.content}</p>
						<div className="btn-container">
							<button>Edit</button>
							<button>Delete</button>
						</div>
    </div>
  );
};

export default Article;
