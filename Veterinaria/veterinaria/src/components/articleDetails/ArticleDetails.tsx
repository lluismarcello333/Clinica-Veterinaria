import React from "react";
import { useParams } from "react-router-dom";
import articlesData from "../../data/articlesData";
import { Link } from "react-router-dom";
import "./ArticleDetails.css"; 

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  if (!id) {
    return <div>Artigo não encontrado.</div>;
  }

  const article = articlesData.find(
    (article) => article.id === parseInt(id)
  );

  if (!article) {
    return <div>Artigo não encontrado.</div>;
  }

  return (
    <div className="article-detail-container">
      <h1>{article.mainTitle}</h1>
      <h2>{article.mainSubtitle}</h2>
      <p>{article.introduction}</p>
      <hr />

          <h2 className="titleBenefitSectionTitle">{article.benefitSectionTitle}</h2>
      <div className="image-text-block">
        <div className="text-side">
          <h3>{article.benefitSubtitle1}</h3>
          <p>{article.benefitDescription1}</p>
          <p>{article.benefitDescription2}</p>
        </div>
        <div className="image-side">
          <img src={article.images[0]} alt={article.mainTitle} />
        </div>
      </div>

      <div className="image-text-block reverse">
        <div className="image-side">
          <img src={article.images[1]} alt={article.mainTitle} />
        </div>
        <div className="text-side">
          <h3>{article.benefitSubtitle2}</h3>
          <p>{article.behaviorDescription}</p>
        </div>
      </div>
      <hr />

      <div className="timing-section">
        <h3>{article.timingSectionTitle}</h3>
        <p>{article.timingDescription1}</p>
        <p>{article.timingDescription2}</p>
      </div>
      <hr />

      <h3>Exemplos de Casos</h3>
      <ol>
        {article.caseDescriptions.map((example: string, index: number) => (
          <li key={index}>
            <h4>{article.caseTitles[index]}</h4>
            {example}
          </li>
        ))}
      </ol>
      <hr />

      <h3>{article.userInteractionTitle}</h3>
      <p>{article.userPromptDescription}</p>
      <h4>{article.userQuestion}</h4>

      <div className="video-container">
        <h3>{article.videoTitle}</h3>
        <p>{article.videoDescription}</p>
        <iframe
          width="560"
          height="315"
          src={article.videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {article.relatedArticles && article.relatedArticles.length > 0 && (
        <div className="related-articles-container">
        <h3>{article.relatedArticlesTitle}</h3>
        <ul>
          {article.relatedArticles.map((relatedArticle, index) => (
            <li key={index}>
              <Link to={`/artigos/${relatedArticle.id}`}>{relatedArticle.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      
      )}
    </div>
  );
};

export default ArticleDetail;