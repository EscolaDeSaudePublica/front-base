import GenericContent from 'src/components/GenericContent';

const Dashboard: React.FC = () => {
  return (
    <GenericContent
      helmetText="Dashboard"
      title="Dashboard"
      breadcrumbsLinks={[{ label: 'Dashboard' }]}
    />
  );
};

export default Dashboard;
