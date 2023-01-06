import * as React from 'react';
import './tableData.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DoneIcon from '@mui/icons-material/Done';
import DiamondIcon from '@mui/icons-material/Diamond';
import InfoTooltip from './InfoTooltip';

const about = [
    {
        para: "Unlimited words in the Paraphraser",
        title: "Write Faster",
        details: "You’ll complete your work up to 75% faster with QuillBot."
    },
    {
        para: "Standard, Fluency, Expand, Shorten, Formal, Simple, and Creative modes",
        title: "Explore Multiple Styles",
        details: "There's a mode for every occasion, whether formal or casual."
    },
    {
        para: "4 synonym options",
        title: "Add More Synonyms",
        details: "Full use of the Synonym Slider can increase the uniqueness of your text."
    },
    {
        para: "Unlimited Freeze words and phrases",
        title: "Prevent Words From Changing",
        details: " Industry-specific terms (technical, scientific, medical, etc.) won't get changed during paraphrasing."
    },
    {
        para:"6000 words in the Summarizer",
        title: "Find The Key Points",
        details: "Research time is greatly reduced when articles are trimmed to their main points."
    },
    {
        para: "Faster processing speed",
        title:"Enjoy Increased Paraphrasing Speed",
        details:"Fifteen sentences are paraphrased at once instead of only two sentences with a free account."
      },
      {
        para: "Advanced grammar rewrites",
        title: "Get Immediate Recommendations",
        details: "Rewritten sentences are suggested for text that is too complicated or doesn't flow well."
    },
    {
        para: "Compare Modes (Desktop only)",
        title: "Choose The Best Rewrite",  
        details: "You'll be able to compare outputs from multiple modes.",
    },
    {
        para:  "Plagiarism Checker*",
        title: "Detect Plagiarism", 
        details: "You can avoid accidental plagiarism by ensuring all outside sources are properly cited."
    },
    {
        para: "Tone detection",
        title: "Communicative Insights",
        details: " Understand how text can impact every audience"
    },

]

export default function Premium_Details() {
    return (

        <TableContainer className='table-container' >
            <Table sx={{ width: '25vw' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{
                            fontSize: 20,
                            color: 'white',
                            backgroundColor: '#d59603',
                            fontWeight: 'bold',
                            padding: '9px'
                        }}><div className='_head'>
                              <div className='_head-content'>
                                <DiamondIcon fontSize='40' /> 
                                <div className='pre'> PREMIUM</div>
                                </div> 
                            </div>
                            </TableCell>
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
                    {about.map((row, index) => (
                        <TableRow >
                            <TableCell align="left" sx={{ padding: { xs: '4px', sm: "10px", md: '12px' } }}>
                                <div key={index} className='content'>
                                    <div className='done'>
                                        <DoneIcon sx={{ color: "#d59603" }} fontSize='large' />
                                        <div >
                                            {row.para}
                                        </div>
                                    </div>

                                    <div >
                                        <InfoTooltip title={row.title} about={row.details} />
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell sx={{ backgroundColor: 'rgba(128, 128, 128, 0.19)' }}>
                            <p className='pay'>No Credit Card Required</p>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}