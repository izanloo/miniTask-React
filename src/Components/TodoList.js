import React, { useEffect, useState, useRef } from 'react'
import { toast } from "react-toastify";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NeonStyle, BoxStyle } from '../Assest/Style/StyleComponent'

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    maxWidth: 500,
    textAlign: 'center',
    marginTop: '8px',
    marginBottom: '8px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0px',
    minHeight: '310px',


}));

export default function TodoList() {
    let [newItem, setNewItem] = useState([])
    let [valueInput, setValueInput] = useState('')
    let [idCurrent, setCurrentId] = useState()
    const inputRef = useRef(null)
    let date = new Date()

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    function hanleChange(e) {
        let values = e.target.value
        setValueInput(values)
    }

    function handleAdd() {
        if (valueInput.length < 1) {
            toast.error("لطفا تسک مورد نظر را وارد کنید")
        }
        else {
            setNewItem([...newItem, valueInput])
            inputRef.current.value = ''
            setValueInput('')
        }
    }

    function handleEnter(e) {
        if (e.key === 'Enter') {
            handleAdd()
        }
    }

    function handleDelete(id) {
        const listNewItem = newItem.filter((item, i) => i != id)
        setNewItem(listNewItem)
    }

    function handleEdit(id) {
        document.getElementById(id).setAttribute('contenteditable', 'true')
        setCurrentId(id)


    }

    function myFunction() {
        document.getElementById(idCurrent).setAttribute('contenteditable', 'false')
        toast.success("تغییرات ذخیره شد")

    }

    return (
        <>
            <BoxStyle>
                <StyledPaper >
                    <NeonStyle> <Typography variant="h6" sx={{ fontSize: { sm: '36px' } }}>Todo List</Typography></NeonStyle>
                    <TextField mt={3} color="secondary" onChange={hanleChange} onKeyDown={handleEnter} inputRef={inputRef} sx={{ width: { xs: '74%', sm: '84%' } }} />
                    <Box sx={{ display: 'contents' }} onClick={handleAdd}  ><AddCircleIcon className='iconAdd' sx={{ fontSize: { xs: '45px !important', sm: '50px' } }} /></Box>
                    <Grid container wrap="nowrap" spacing={2} className='w100'>
                        {newItem == null ? "null" :
                            <Box className='items'>
                                {newItem.slice(0).map((item, id) =>
                                    <Box key={id} className='item'>
                                        <Grid item xs sx={{ width: '80%', marginLeft: '16px' }} className='task' >
                                            <Typography id={id} onBlur={myFunction} sx={{overflow:'hidden'}} > {item}</Typography>
                                        </Grid>
                                        <Grid item sx={{ width: '20%' }}>
                                            <DeleteIcon onClick={(e) => handleDelete(id)} />
                                            <ModeEditIcon onClick={() => handleEdit(id)} />
                                        </Grid>
                                    </Box>
                                ).reverse()}
                            </Box>
                        }
                    </Grid>
                </StyledPaper>
            </BoxStyle>
        </>
    )
}
