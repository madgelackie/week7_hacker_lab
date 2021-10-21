import React, {useState} from 'react';

const UserFilterRequest = ({onFormSubmit}) => {

    const [searchTerm, setSearchTerm] = useState("")

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        const termToSubmit = searchTerm.trim();
        if (!termToSubmit){
            return
        }

    onFormSubmit({
        searchTerm: termToSubmit
    });
}

    return (
        <form onSubmit={handleFormSubmit}>
            <input 
                type="text" 
                placeholder="Enter search term" 
                value={searchTerm}
                onChange={handleSearchChange}></input>
            <input 
                type="submit"
                placeholder="Submit">
                </input>
        </form>
        
    )
}

export default UserFilterRequest;
