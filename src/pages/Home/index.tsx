import { Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';

const Home: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Sagu</title>
      </Helmet>
      <Typography variant="h1">Home</Typography>
    </div>
  );
};

export default Home;
