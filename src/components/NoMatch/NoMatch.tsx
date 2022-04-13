import { useNavigate } from 'react-router-dom';

export default function NoMatch() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '1rem' }}>
      <p>There&apos;s nothing here!</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}
