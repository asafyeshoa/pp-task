import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';

export default function RoomFilter(props: { roomsKinds: (string | number)[] | undefined, roomsFilter: string, setRoomsFilter: any }) {

    useEffect(() => {
    }, [props])

    const handleChange = (event: SelectChangeEvent) => {
        props.setRoomsFilter(event.target.value as string);
    };

    return (
        <Box sx={{minWidth: 150}} style={{background: `whitesmoke`}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">מספר חדרים</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.roomsFilter}
                    label="מספר חדרים"
                    onChange={handleChange}
                >
                    <MenuItem value={""}>הכל</MenuItem>
                    {props?.roomsKinds?.sort().map((num: (number | string)) => {
                        return <MenuItem key={num} value={num}>{num}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}
