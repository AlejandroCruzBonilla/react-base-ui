import { Button as ButtonDefault } from '../dist';
import { Button as ButtonComponent } from '../dist/components';
import { Button } from '../dist/components/Button';
import '../dist/react-base-ui.min.css';

function App() {
	return (
		<>
			<ButtonDefault label="Dist" onClick={() => console.log('Dist')} />
			<ButtonComponent
				label="Components"
				onClick={() => console.log('Components')}
			/>
			<Button
				label="Button"
				onClick={() => console.log('Button')}
				byPass={{
					root: {
						className: (props) => {
							return props.label ? 'has_label' : 'non-label';
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
