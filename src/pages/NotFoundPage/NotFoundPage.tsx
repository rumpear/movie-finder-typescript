import { Link } from 'react-router-dom';
import { GoBackButton } from '../../components/ui/';

export const NotFoundPage = () => {
  return (
    <>
      <GoBackButton />
      <p>
        Page not found. {<Link to={'/'}>You can return to the main</Link>}
      </p>
    </>
  );
};
