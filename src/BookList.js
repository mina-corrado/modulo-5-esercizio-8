import React, {useState} from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { SingleBook } from "./SingleBook";
import { CommentArea } from './CommentArea';

export const BookList = (props) => {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         filter: '',
    //         selected: '',
    //     }
    // }
    const [filter, setFilter] = useState('');
    const [selected, setSelected] = useState('');

    const cambiaSelected = (asin) => {
        console.log("book ", asin);
        setSelected(asin);
    }
    // render() {
    const books = props.books;
    const query = props.query;
    // const state = this.state;
        
        return (
            <Container className='h-100'>
                <Row className='h-100' style={{overflow: 'hidden'}}>
                <Col xs={9} className='h-100' style={{overflowY: 'scroll'}}>
                    <React.Fragment>
                        <hr />
                        <label className="d-flex flex-column mb-4 p-4">
                            <strong>Filtra libri:</strong>
                            <input type="text" id="filtra" name="filtra"  value={query} onChange={(e) => setFilter(e.target.value)} placeholder="filtra libri che contengono nel titolo..."/>
                        </label>
                        <Row xs={1} sm={2} md={2} lg={4} className="g-4 ml-0 mr-0">
                        {
                        books.filter((book) => query!=='' ? book.title.toLowerCase().includes(query.toLowerCase()) : true).map((book) => {
                            return (
                                <Col key={book.asin} className="mb-2">
                                    <SingleBook book={book} cambiaSelected={cambiaSelected} selected={selected===book.asin}></SingleBook>
                                </Col>
                            )
                        })
                        }
                        </Row>
                    </React.Fragment>
                </Col>
                <Col className='h-100' style={{overflowY: 'auto'}}>
                    {selected.length > 0 &&
                        <CommentArea asin={selected} />
                    }
                </Col>
                </Row>
            </Container>
        );
    // }
}