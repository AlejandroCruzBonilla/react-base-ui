import { Button } from '../dist';

function App() {
  return (
    <>
      <Button
        label="aaa"
        byPass={{
          root: {
            className: props => {
              console.log(props);
              return 'alex';
            },
            // style: {
            //   backgroundColor: 'red',
            // },
          },
        }}
      />
    </>
  );
}

export default App;
