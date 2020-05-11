import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';

import { Form } from '../../../src';

const schema = {
  properties: {
    name: {
      type: 'string',
      title: 'First name',
      'ui:control': 'input'
    },
    color: {
      type: 'string',
      title: 'Color',
      'ui:control': 'select',
      oneOf: [
        {
          const: '',
          title: '- Select -',
          'ui:disabled': true
        },
        { const: 'red', title: 'Red' },
        { const: 'black', title: 'Black' },
        { const: 'white', title: 'White' }
      ]
    },
    model: {
      type: 'string',
      title: 'Model',
      oneOf: [
        { const: 'ms', title: 'Model S' },
        { const: 'm3', title: 'Model 3' },
        { const: 'mx', title: 'Model X' },
        { const: 'my', title: 'Model Y' }
      ],
      'ui:control': 'radio',
      default: null
    }
  }
};

const Schema = () => (
  <Form schema={schema}>
    <FormState />
  </Form>
);

export default withDocs(readme, Schema);
