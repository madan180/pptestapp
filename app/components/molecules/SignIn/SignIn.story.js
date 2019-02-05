import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './SignIn.mock';

// Import Styled Component to showcase variations
import SignIn, { SignInVanilla } from '.';

storiesOf('Atoms', module).addWithChapters('SignIn', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <SignInVanilla
              {...defaultConfig}
              className={`hide-default-sample ${defaultConfig.className}`}
            />
          ),
          options: {
            showSource: true,
            allowSourceToggling: true,
            showPropTables: true,
            allowPropTablesToggling: true,
          },
        },
      ],
    },
    {
      title: 'Primary SignIn Variations',
      sections: [
        {
          title: 'Variation Name',
          sectionFn: () => <SignIn {...defaultConfig} />,
        },
      ],
    },
  ],
});
