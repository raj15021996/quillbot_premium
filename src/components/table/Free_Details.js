import * as React from 'react';
import './tableData.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';


const rows = [
    "125 words in the Paraphraser",
    "Standard and Fluency modes",
    "3 synonym options",
    "1 Freeze word or phrase",
    "1200 words in the Summarizer",
    "Faster processing speed",
    "Advanced grammar rewrites",
    "Advanced grammar rewrites",
    "Plagiarism Checker*",
    "Tone detection"
];

export default function Free_Details() {
    return (
        <TableContainer className='table-container' >
            <Table  sx={{ width: '45rem'}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{
                            fontSize: 20,
                            color: 'white',
                            backgroundColor: '#039634',
                            fontWeight: 'bold'
                        }}>FREE</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">
                        <button className='btn-free'>
                        Sign Up - It's Free
                            </button>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {rows.map((row, index) => (
                        <TableRow >
                            <TableCell align="left">
                                <div className='content'>
                                    <div className='done'>
                                        {index > 4 ?
                                            <CloseIcon sx={{ color: "red" }} fontSize='large' /> :
                                            <DoneIcon sx={{ color: "green" }} fontSize='large'/>
                                        }
                                    </div>
                                    <div className='data'>
                                        {row}
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell sx={{backgroundColor:'rgba(128, 128, 128, 0.19)'}}>
                       <p className='pay'>No Credit Card Required</p> 
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}