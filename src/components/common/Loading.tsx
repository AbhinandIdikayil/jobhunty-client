import { Backdrop, CircularProgress } from '@mui/material'

function Loading({loading}:{loading:boolean}) {
    return (
        <Backdrop
            open={loading}
            sx={{ color: 'white', backgroundColor: 'rgba( 9,9,9,0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default Loading