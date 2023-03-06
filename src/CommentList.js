import React from 'react';
import { SingleComment } from './SingleComment';

export const CommentList = (props) => {

    // render() {
        const recensioni = props.recensioni;

        return (
            <div style={{backgroundColor: '#f0f2f5'}}>
                {recensioni.map((recensione) => { 
                    return (
                        <div key={recensione._id} className='p-2'>
                            <SingleComment recensione={recensione} />
                        </div>
                    )
                })    
                }
            </div>
        );
    // }
}
