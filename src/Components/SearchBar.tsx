import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(props: { search: string, setSearch: any }) {

    const handleSearch = (text: string) => {
        props.setSearch(text)
    }

    return (
        <Paper
            component="form"
            sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
            style={{border: 'black solid 1px'}}
        >
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="חפש על פי כתובת"
                inputProps={{'aria-label': 'search google maps'}}
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={props.search}
            />
            <IconButton type="submit" sx={{p: '10px'}} aria-label="search">
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
}
