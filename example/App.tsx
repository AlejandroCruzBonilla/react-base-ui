import { Button as ButtonDefault } from '../dist';
import { Button as ButtonComponent } from '../dist/components';
import { Button } from '../dist/components/Button';

function App() {
  return (
    <>
      <ButtonDefault label='Default' />
      <ButtonComponent label='Component' />
      <Button
        label='Label'
        byPass={{
          root: {
            className: props => {
              return props.label === 'Label' ? 'SIs' : 'NO';
            },
            style: {
              backgroundColor: 'red',
            },
          },
          label: {
            className: 'label_custom_class',
          },
        }}
      />
    </>
  );
}

export default App;
