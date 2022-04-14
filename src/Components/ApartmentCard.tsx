import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {PropertiesType} from "../react-app-env";
import {unicodeToChar} from "../Logic/Utiles";


export default function ApartmentCard(props: { apartment: PropertiesType }) {

    const swipeToHB = (text: string) => {
        switch (text) {
            case "single":
                return "אחת"
            case "without":
                return "אין"
            case 'double':
                return "כפולה"
            default:
                return "אין מידע"
        }
    }

    return (
        <Box>
            <Card variant="outlined"style={{width: '270px', height: '270px'}} >

                <React.Fragment>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {unicodeToChar(props.apartment.address)}
                        </Typography>


                        <Typography sx={{mb: 1.5, mt: 1.5}} variant="body2">
                            {`מספר חדרים: ${props.apartment.num_rooms}`}
                            <br/>
                            {`שטח: ${props.apartment.sqm}  מ"ר`}
                        </Typography>

                        <Typography sx={{mb: 1.5, mt: 1.5}} variant="body2">
                            {`קומה: ${props.apartment.floor} מתוך ${props.apartment.num_floors}`}
                            <br/>
                            {`מספר מעליות: ${props.apartment.elevator}`}
                            <br/>
                            {`חנייה: ${swipeToHB(props.apartment.parking)}`}
                        </Typography>

                        <Typography>
                            {`מחיר: ${props.apartment.price} ש"ח`}
                        </Typography>

                    </CardContent>
                </React.Fragment>

            </Card>
        </Box>
    );
}
