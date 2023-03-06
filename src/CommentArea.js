import React, { useEffect, useState } from 'react';
import { AddComment } from './AddComment';
import { CommentList } from './CommentList';

export const CommentArea = (props) => {

    // constructor(props){
    //     super(props);
    //     this.state ={
    //         recensioni: [],
    //         fetchError: false,
    //         loading: true,
    //     }

    //     this.headers = {
    //         headers: {
    //         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YyOGVhNzgzODFmYzAwMTNmZmZhYzUiLCJpYXQiOjE2NzgxMDkzMzEsImV4cCI6MTY3OTMxODkzMX0.VdAUjMJipC9V55nXxOpdTmR4xGRVB7EbV5hTy4A90H8",
    //         "Content-Type": "application/json"
    //         }
    //     }
    // }
    const [recensioni, setRecensioni] = useState([]);
    const [fetchError, setFetchError] = useState(false);
    const [loading, setLoading] = useState(true);

    const headers = {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YyOGVhNzgzODFmYzAwMTNmZmZhYzUiLCJpYXQiOjE2NzgxMDkzMzEsImV4cCI6MTY3OTMxODkzMX0.VdAUjMJipC9V55nXxOpdTmR4xGRVB7EbV5hTy4A90H8",
            "Content-Type": "application/json"
        }
    }

    const getCommenti = () => {
        // pulisci headers
        headers["method"] = 'GET';
        delete headers["body"];
        
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${props.asin}`, headers).then(res=>res.json())
        .then(res=>{
            //gestione success
            //caricamento
            // this.setState({recensioni: res, loading: false})
            setRecensioni(res);
            setLoading(false);
        }, (err)=>{
            //gestione errore
            // this.setState({fetchError: true, loading: false})
            setFetchError(true);
            setLoading(false);
            console.log(err);
        })
    }
    // componentDidMount() {
    //     //dopo che il component è stato renderizzato
    //     this.getCommenti();
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.asin !== this.props.asin) {
    //         this.getCommenti();
    //     }
    // }
    useEffect(()=>{
        getCommenti();
    }, [props.asin]);

    // render() {
        // const state = this.state;

        return (
            <>
                <CommentList recensioni={recensioni} />
                <AddComment headers={headers} url={`https://striveschool-api.herokuapp.com/api/comments/`} elementId={props.asin}></AddComment>
            </>
        );
    // }
}
