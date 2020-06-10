import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// import Adapter from 'enzyme-adapter-react-16'

// global.MutationObserver = class {
//     constructor(callback) { }
//     disconnect() { }
//     observe(element, initObject) { }
//     takeRecords() { return [] }
// };
// global.document.getSelection = function () { }

// configure({ adapter: new Adapter() })

configure({ adapter: new Adapter() });
