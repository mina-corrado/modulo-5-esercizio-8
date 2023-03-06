import React, {useEffect, useState} from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { CommentArea } from './CommentArea';
import { SingleBook } from './SingleBook';
import scifiBooks from './scifi.json';

export const BookDetails = () => {
    const { asinId } = useParams();
    const [book, setBook] = useState({});

    useEffect(()=>{
        const book = scifiBooks.filter((book) => book.asin===asinId);
        setBook(book[0]);
    },[]);

    return(
        <Container fluid>
            <Row>
                <Col className="mb-2">>
                    <SingleBook book={book} isDetail={true} />
                </Col>
                
                <Col className="mb-2">>
                    <CommentArea asin={asinId} />
                </Col>
            </Row>
        </Container>
    );
}