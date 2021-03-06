import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Description, Price, Footer } from './CardStyles';
const Card = ({ product: { name, description, inventoryDate, price, id } }) => {
  return (
    <Container>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Price>
        <span>{price}$</span>
      </Price>
      <Footer>
        <div className="date">{inventoryDate}</div>
        <div className="actions">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="ellipsis-h"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="svg-inline--fa fa-ellipsis-h fa-w-16 fa-2x"
          >
            <path
              fill="currentColor"
              d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
              className=""
            ></path>
          </svg>
        </div>
      </Footer>
    </Container>
  );
};
Card.propTypes = {
  product: PropTypes.object,
};
export default Card;
