import {  toast } from 'react-toastify';
let About = () =>{
    let onctaError = () =>{
        toast.error('🦄 Data Has been Added to the record!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });

    }
    let onctaSuccess = () =>{

        toast.success('🦄 Wow you are success!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    return(
        <div>
            <h1>This is a About Component</h1>
            <button type="button" className='btn btn-danger' onClick={onctaError}>Error</button>
            <button type='button' className='btn btn-primary' onClick={onctaSuccess}>Success</button>

        </div>
    )
}
export default About;