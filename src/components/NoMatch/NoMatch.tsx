import { useNavigate } from 'react-router-dom';
import './NoMatch.css';

export default function NoMatch() {
  const navigate = useNavigate();

  return (
    <div className="c-not-found">
      <div className="c-not-found__wrapper">
        <p className="c-not-found__text">There&apos;s nothing here!</p>
        <button className="c-not-found__btn" onClick={() => navigate('/')}>
          Go to home
        </button>
      </div>
    </div>
  );
}
