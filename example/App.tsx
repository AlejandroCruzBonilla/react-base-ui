import { Button } from '../dist';

function App() {
  return (
    <>
      <Button
        label="Labels"
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
