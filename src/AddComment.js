import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export const AddComment = (props) => {
    // constructor(props){
    //     super(props);
    //     this.state ={
    //         res: null,
    //         fetchError: false,
    //         loading: false,
    //     }
    // }
    const [res, setRes] = useState(null);
    const [fetchError, setFetchError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        comment: '',
        rate: ''
    });
    
    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const url = props.url;
        const headers = props.headers;
        headers["method"] = 'POST';

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          return;
        }

        // const data = {
        //     comment: form.querySelector('#formBasicRecensione').value,
        //     rate: Number(form.querySelector('#formBasicRate').value),
        //     elementId: props.elementId,
        // };
        const data = {
            comment: formValues.comment,
            rate: formValues.rate,
            elementId: props.elementId,
        }
        headers["body"] = JSON.stringify(data);

        fetch(url, headers).then(res=>res.json())
        .then(res=>{
            // this.setState({res: res, loading: false});
            setRes(res);
            setLoading(false);
            // form.querySelector('#formBasicRecensione').value = '';
            // form.querySelector('#formBasicRate').value = '';
            setFormValues({
                comment: '',
                rate: '',
            });
        }, (err)=>{
            //gestione errore
            // this.setState({fetchError: true, loading: false})
            setFetchError(true);
            setLoading(false);
            console.log(err);
        })
    }
    
    const changeRecensione = (e)=>{
        const recensione = e.target.value;
        console.log("recensione ", recensione)
        setFormValues((prevState)=> { 
            return {...prevState, comment: recensione}
        });
    }
    const changeRate = (e)=> {
        const voto = e.target.value;
        console.log("voto ",voto)
        setFormValues((prevState)=>{
            return {...prevState, rate: voto}
        });
    }

    // render() {
        // const state = this.state;
        return (
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicRecensione">
                    <Form.Label>Recensione</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Scrivi recensione" 
                        value={formValues.comment} 
                        onChange={changeRecensione} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRate">
                    <Form.Label>Valuta</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Valutazione" 
                        value={formValues.rate} 
                        onChange={changeRate} 
                        min={1} 
                        max={5}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Aggiungi
                </Button>
                {loading && <p>Loading...</p>}
                {res && <div>{res.status}</div>}
            </Form>
        );
    // }
}
