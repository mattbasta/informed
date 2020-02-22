import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { Text, useForm } from '../../../src';
import FormState from '../../utils/FormState';

const validate = value => {
  if (!value || value.length < 5) return 'Field must be at least five characters';
};

const onSubmit = values => window.alert(`Form successfully submitted with ${JSON.stringify(values)}`);

const UseForm = () => {

  const { formController, formState, render } = useForm({
    onSubmit
  });

  return render(
    <div>
      <form onSubmit={formController.submitForm}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, marginRight: '2rem' }}>
            <label>
              First name:
              <Text field="name" validate={validate} />
              <small style={{ color: 'red' }}>{formState.errors.name}</small>
            </label>
            <button type="submit">Submit</button>
          </div>
          <div
            style={{
              flex: 2,
              flexDirection: 'column',
              display: 'flex',
              minWidth: '300px'
            }}>
            <pre>
              <code>
                {JSON.stringify(formState, null, 2)}
              </code>
            </pre>
          </div>
        </div>
      </form>
    </div>
  );
};

export default withDocs(readme, UseForm);
