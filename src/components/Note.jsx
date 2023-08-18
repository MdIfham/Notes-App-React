import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
    return (
        <>
            <div className="note" >
                <span> {text} </span>
                <div className='note_footer'>
                    <small> {date} </small>
                    <MdDeleteForever
                        onClick={() => handleDeleteNote(id)}
                        className='delete_icon'
                        size='1.3em'
                    />
                </div>
            </div>
        </>
    );
};

export default Note;