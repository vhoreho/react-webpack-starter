import React from 'react';
import './Card.scss';

const Card: React.FC = () => {
  return (
    <div className="Card">
      <div className="Card__header">
        <div className="Card-header__text">
          <h3>Jhon Doe</h3>
          <p>Frontend Developer</p>
        </div>
      </div>
      <div className="Card__body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolorum fugit illum
        nobis officiis sapiente soluta voluptates. Accusamus accusantium aliquid dignissimos
        explicabo fuga fugit molestiae perspiciatis quaerat. Amet, laboriosam, unde.
      </div>
      <div className="Card__footer">
        <div className="Card-footer__controls">
          <button type="button" className="Card-footer__btn">
            <i className="far fa-eye" />
          </button>
          <button type="button" className="Card-footer__btn">
            <i className="far fa-heart" />
          </button>
        </div>
        <ul className="Card-footer__socials">
          <li>
            <a href="https://github.com/">
              <i className="fab fa-github" />
            </a>
          </li>
          <li>
            <a href="https://web.telegram.org/z/">
              <i className="fab fa-telegram-plane" />
            </a>
          </li>
          <li>
            <a href="https://ru.linkedin.com/">
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
