import React, { useState } from 'react'

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    };
    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    };

    return (
        <>
            <div className="note_new">
                <textarea
                    name="" id=""
                    rows="8"
                    cols="10"
                    value={noteText}
                    placeholder='Type in to add a new note...'
                    onChange={handleChange}
                ></textarea>
                <div className="note_footer">
                    <small>{characterLimit - noteText.length} characters remaining</small>
                    <button className='save' onClick={handleSaveClick}>Save</button>
                </div>
            </div>
        </>
    )
}

export default AddNote;
