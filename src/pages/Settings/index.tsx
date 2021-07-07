import GenericContent from 'src/components/GenericContent';

const Settings: React.FC = () => {
  return (
    <GenericContent
      helmetText="Settings"
      title="Settings"
      breadcrumbsLinks={[{ label: 'Settings' }]}
    />
  );
};

export default Settings;
