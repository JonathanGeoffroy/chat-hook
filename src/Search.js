import React, {useState} from 'react'

const Search = ({onChange}) => {
    const [search, setSearch] = useState("");

    const onInputChange = e => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
        onChange(search);
        setSearch('');
    };

    return <form>
        <input type="text" value={search} onChange={onInputChange}/>
        <button onClick={onSubmit}>Change room</button>
    </form>;
};

export {Search};
