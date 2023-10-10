import {debounce} from 'lodash';

import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Search ({onSearch, clearSearch}) {

    // calls onSearch only after 300ms each time the user types
    const onChange = debounce(value => onSearch(value), 300);

    return <div className="Search">
        <Form>
            <Form.Group as={Row}>
                <Col><FloatingLabel
                    label="Search Foods:"
                >
                    <Form.Control type="search" placeholder="Nut 'n' berry mix" onChange={(e) => onChange(e.target.value)} />
                </FloatingLabel></Col>
                
                <Col><Button onClick={() => clearSearch()}>Clear</Button></Col>
                
            </Form.Group>
        </Form>
   </div>;
}

export default Search;