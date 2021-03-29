import { Helmet } from 'react-helmet-async';
import NotFound from 'app/domains/Common/not-found/NotFound';

const NotFoundPage = () => (
  <>
    <Helmet>
      <title>Oops ! Error</title>
      <meta name="description" content="Not Found Page" />
    </Helmet>
    <NotFound msg="Page not found" />
  </>
);

export default NotFoundPage;
