import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

// Set the default serializer for Jest to be enzyme-to-json
// This produces an easier to read serialized format
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

Enzyme.configure({ adapter: new Adapter() });