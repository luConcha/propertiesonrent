import React from 'react';
import styled from 'styled-components';
import { experiences } from '../utils/constants.js';

const GuessExperiences = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <article className='header'>
          <h2>Guess Experiences</h2>
          <h3>Authentic Travel with all the comforts of a boutique hotel.</h3>
          <p>
            Real-world experiences should'nt have to skimp on luxuries. Our
            exceptional vacation homes includes superior hotel amenities and
            services, worl-class charm, and plenty of oportunities to immerse
            yourself in local culture.
          </p>
        </article>
        <div className='services-center'>
          {experiences.map((experience) => {
            const { id, title, img, text } = experience;
            return (
              <article key={id} className='service'>
                <img src={img} alt='' />
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-red-dark);
  }
  padding: 5rem 0;

  background: var(--clr-primary-10);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;

export default GuessExperiences;
