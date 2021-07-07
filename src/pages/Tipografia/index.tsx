import { Box, Typography } from '@material-ui/core';
import { Variant } from '@material-ui/core/styles/createTypography';
import GenericContent from 'src/components/GenericContent';
import RouterNames from 'src/routes/names';

const Tipografia: React.FC = () => {
  const variants = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'button',
    'overline',
  ];

  const text =
    'Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus. Diuretics paradis num copo é motivis de denguis. Pra lá , depois divoltis porris, paradis. Quem num gosta di mim que vai caçá sua turmis!';

  return (
    <GenericContent
      helmetText="Tipografia"
      title="Tipografia"
      breadcrumbsLinks={[
        { label: 'Home', href: RouterNames.HOME },
        { label: 'Tipografia' },
      ]}
    >
      {variants.map((variant) => (
        <Box key={variant} mb={2} border={1} p={1} borderRadius={8}>
          <Typography variant={variant as Variant}>
            {variant}: {text}
          </Typography>
        </Box>
      ))}
    </GenericContent>
  );
};

export default Tipografia;
