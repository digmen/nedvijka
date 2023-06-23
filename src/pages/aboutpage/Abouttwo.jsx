import React, { useEffect } from 'react';
import aboutstyle from './about.module.css';
import { SimpleGrid } from '@chakra-ui/react';
import footer from './ftbg1.svg';
import { useProductContext } from '../../contexts/ProductContext';

function Abouttwo() {
  const { review, getReview } = useProductContext();

  useEffect(() => {
    getReview();
  }, []);

  return (
    <>
      <div className={aboutstyle.container}>
        <div className={aboutstyle.reviews}>
          <h1>Все отзывы наших клиентов</h1>
          <SimpleGrid columns={3} spacing={10}>
            {review.map((item) => (
              <div
                style={{
                  boxShadow: '0px 0px 38px 0px rgba(0, 0, 0, 0.2)',
                  borderRadius: '5px',
                  padding: '20px',
                }}
                className={aboutstyle.reviews_slider}
              >
                <span>{item.fullname}</span>
                <div>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <span
                      key={value}
                      style={{
                        cursor: 'pointer',
                        color: value <= item.stars ? 'gold' : 'gray',
                      }}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
                <span className={aboutstyle.description}>
                  {item.review_text}
                </span>
              </div>
            ))}
          </SimpleGrid>
        </div>
      </div>
      <footer>
        <img style={{ width: '100%', marginTop: '147px' }} src={footer} />
      </footer>
    </>
  );
}

export default Abouttwo;
