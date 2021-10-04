import React from 'react';
import styled from 'styled-components';
import { properties } from '../utils/constants.js';

const FeaturedProperties = () => {
  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>Properties</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center featured'>
        {properties.slice(0, 3).map((property) => {
          const { id, title, img } = property;
          return (
            <article key={id}>
              <h2>{title}</h2>
              <img src={img} alt={title} />
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProperties;
