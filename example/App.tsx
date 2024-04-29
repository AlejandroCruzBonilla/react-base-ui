import { Button as ButtonDefault } from '../dist';
import { Button } from '../dist/components/Button';
import { Accordion } from '../dist/components/Accordion';

function App() {
	console.log('Loaded');
  return (
    <>
			<Accordion/>
			<ButtonDefault label='Default'/>
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
