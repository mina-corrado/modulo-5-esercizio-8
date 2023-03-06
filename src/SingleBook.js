import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { CommentArea } from './CommentArea';

export const SingleBook = (props) => {
    // constructor(props){
    //     super(props);
    //     this.state ={
    //         selected: false,
    //     };
    //     this.clickCard = this.clickCard.bind(this);
    // }
    const selected = props.selected;
    const isDetail = props.isDetail || false;
    const clickCard = (event) => {
        const cambiaSelected = props.cambiaSelected;
        if (cambiaSelected){
            cambiaSelected(props.book.asin);
        }
    }
    const book = props.book;

    console.log("book => ", book);
    
    const myStyle = selected===true ? { borderWidth: 4, borderColor: 'red', borderStyle: 'solid' } : null;
    // render() {

        return (
            <>
            <Card style={myStyle} onClick={clickCard}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                        Asin {book.asin} - Prezzo {book.price}€
                    </Card.Text>
                </Card.Body>
                {!isDetail && 
                <Card.Footer>
                    <Button href={`/books/${book.asin}`} variant='primary'>Dettaglio</Button>
                </Card.Footer>
                }
            </Card>
            {/* {this.props.selected && <CommentArea asin={book.asin} />} */}
            </>

        );
    // }
}
