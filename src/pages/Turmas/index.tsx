import GenericContent from 'src/components/GenericContent';
import RouterNames from 'src/routes/names';

const Turmas: React.FC = () => {
  return (
    <GenericContent
      helmetText="Turmas"
      title="Turmas"
      breadcrumbsLinks={[
        { label: 'Home', href: RouterNames.HOME },
        { label: 'Turmas' },
      ]}
    />
  );
};

export default Turmas;
