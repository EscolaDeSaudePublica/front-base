import GenericContent from 'src/components/GenericContent';
import RouterNames from 'src/routes/names';

const Settings: React.FC = () => {
  return (
    <GenericContent
      helmetText="Settings"
      title="Settings"
      breadcrumbsLinks={[
        { label: 'Home', href: RouterNames.HOME },
        { label: 'Settings' },
      ]}
    />
  );
};

export default Settings;
