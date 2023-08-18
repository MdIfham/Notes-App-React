import React, { useEffect, useState } from 'react';
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';

// get the localStorage data back
const getLocalData = () => {
    const savedNotes = localStorage.getItem('notes_app');
    if (savedNotes) {
        return JSON.parse(savedNotes);
    } else {
        return [];
    }
};

const App = () => {
    // const [notes, setNotes] = useState([
    //     {
    //         id: nanoid(),
    //         text: " THis is my first note!",
    //         date: '23/07/2023',
    //     },
    //     {
    //         id: nanoid(),
    //         text: " THis is my second note!",
    //         date: '23/04/2023',
    //     },
    //     {
    //         id: nanoid(),
    //         text: " THis is my third note!",
    //         date: '23/05/2023',
    //     },
    //     {
    //         id: nanoid(),
    //         text: " THis is my fourth note!",
    //         date: '23/06/2023',
    //     }
    // ]);

    const [notes, setNotes] = useState(getLocalData());
    const [searchText, setSearchText] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    // WRONG TO USE HERE AS IT STORES [] in local storage after initialization of notes STATE
    // useEffect(() => {
    //     const savedNotes = JSON.parse(
    //         localStorage.getItem('notes_app')
    //     );

    //     if (savedNotes) {
    //         setNotes(savedNotes);
    //     }
    // }, []);

    useEffect(() => {
        localStorage.setItem(
            'notes_app',
            JSON.stringify(notes)
        );
    }, [notes]);

    const addNote = (text) => {
        // console.log(text);
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString(),
        }
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    }

    const deleteNode = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    }

    return (
        <>
            <div className={`${darkMode && 'dark_mode'}`}>
                <div className="container">
                    <Header handleToggleDarkMode={setDarkMode} />
                    <Search handleSearchNote={setSearchText} />
                    <NotesList
                        notes={notes.filter((note) =>
                            note.text.toLowerCase().includes(searchText)
                        )}
                        handleAddNote={addNote}
                        handleDeleteNote={deleteNode}
                    />
                </div>
            </div >
        </>
    );
};

export default App;