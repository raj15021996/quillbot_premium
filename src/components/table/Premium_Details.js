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



const rows = [
    "Unlimited words in the Paraphraser",
    "Standard, Fluency, Expand, Shorten, Formal, Simple, and Creative modes",
    "4 synonym options",
    "Unlimited Freeze words and phrases",
    "6000 words in the Summarizer",
    "Faster processing speed",
    "Advanced grammar rewrites",
    "Compare Modes (Desktop only)",
    "Plagiarism Checker*",
    "Tone detection"
];

export default function Premium_Details() {
    return (
        <TableContainer className='table-container' >
            <Table  sx={{ width: '45rem'}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{
                            fontSize: 20,
                            color: 'white',
                            backgroundColor: '#d59603',
                            fontWeight: 'bold'
                        }}>PREMIUM</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">
                            <button className='btn-pre'>
                               Upgrade to Premium
                            </button>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {rows.map((row, index) => (
                        <TableRow >
                            <TableCell align="left">
                                <div key={index}  className='content'>
                                    <div className='done'>     
                                            <DoneIcon sx={{ color: "#d59603" }} fontSize='large'/>
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