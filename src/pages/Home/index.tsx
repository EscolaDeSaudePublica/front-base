import GenericContent from 'src/components/GenericContent';

const Home: React.FC = () => {
  return (
    <GenericContent
      helmetText="Home"
      title="Home"
      breadcrumbsLinks={[{ label: 'Home' }]}
    />
  );
};

export default Home;
