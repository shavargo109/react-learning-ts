import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { purple } from '@mui/material/colors';


function ButtonCount() {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     return (`clicked ${count} times!`);
    // });

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    }));



    return (
        <ColorButton variant="contained" onClick={() => setCount(count + 1)}>
            click {count} times
        </ColorButton>

    );
}
export default ButtonCount;