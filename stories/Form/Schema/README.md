# JSON Schema Form

```jsx
import { Form } from 'informed';

const schema = {
  properties: {
    name: {
      type: 'string',
      title: 'First name',
      'ui:control': 'input'
    },
    model: {
      type: 'string',
      title: 'Model',
      'ui:control': 'select',
      oneOf: [
        {
          const: '',
          title: '- Select -',
          'ui:disabled': true
        },
        { const: 'ms', title: 'Model S' },
        { const: 'm3', title: 'Model 3' },
        { const: 'mx', title: 'Model X' },
        { const: 'my', title: 'Model Y' }
      ]
    }
  }
};

const Schema = () => (
  <Form schema={schema}>
    <FormState />
  </Form>
);
```

<!-- STORY -->

