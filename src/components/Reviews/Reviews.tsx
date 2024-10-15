import React from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Reviews.css';

const reviews = [
  { id: 1, name: 'Juan Pérez', comment: 'reviews.juanComment', rating: 5 },
  { id: 2, name: 'María García', comment: 'reviews.mariaComment', rating: 5 },
  { id: 3, name: 'Carlos Rodríguez', comment: 'reviews.carlosComment', rating: 4 },
  { id: 4, name: 'Ana Martínez', comment: 'reviews.anaComment', rating: 5 },
];

const Reviews: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="reviews-section">
      <div className="reviews-container">
        <h2 className="reviews-title">{t('reviews.title')}</h2>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <p className="review-comment">{t(review.comment)}</p>
              <div className="review-footer">
                <p className="review-author">{review.name}</p>
                <div className="review-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;