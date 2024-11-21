import * as React from 'react';
import { Stack, Typography, TextField, Link, Divider, CssBaseline } from '@mui/material';
import AppTheme from '../theme/AppTheme';

const

export default function (props: { disableCustomTheme?: boolean }) {
    return(
         <AppTheme {...props}>
            <CssBaseline enableColorScheme />
        </AppTheme>
    );
}