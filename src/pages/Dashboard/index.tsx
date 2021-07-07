import GenericContent from 'src/components/GenericContent';
import RouterNames from 'src/routes/names';

const Dashboard: React.FC = () => {
  return (
    <GenericContent
      helmetText="Dashboard"
      title="Dashboard"
      breadcrumbsLinks={[
        { label: 'Home', href: RouterNames.HOME },
        { label: 'Dashboard' },
      ]}
    />
  );
};

export default Dashboard;
