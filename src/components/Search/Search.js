import {debounce} from 'lodash';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Search.scss';

function Search ({onSearch, clearSearch}) {

    // calls onSearch only after 300ms each time the user types
    const onChange = debounce(value => onSearch(value), 300);

    return <div className="Search">
        <Form>
            <Row>
                <Col xs={3} md={2}><Form.Label column>Search Foods:</Form.Label></Col>
                <Col xs={6} md={8}><Form.Control type="search" placeholder="Nut 'n' berry mix" onChange={(e) => onChange(e.target.value)} /></Col>
                <Col><Button type="button" onClick={() => clearSearch()}>Clear</Button></Col>
            </Row>
        </Form>
   </div>;
}

export default Search;