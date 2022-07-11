import { useState } from "react"
import axios from 'axios';


const TestFile = () => {
    const [selectedFile, setSelectedFile] = useState()
    const onChangeHandler = (e) => {
        setSelectedFile(e.target.files[0])
    }
    const onClickHandler = () => {
        const data = new FormData() 
        data.append('file', selectedFile)
        try {
        axios.post("http://localhost:8000/v1/user/add-product", data, { // receive two parameter endpoint url ,form data 
    })
    .then(res => { // then print response status
    }) } catch (err) {
        console.log(err)
    }
    }
    return (
        <>
         <input type="file" name="file" onChange={(e) => onChangeHandler(e)}/>
        <button className="btn btn-success btn-block" onClick={onClickHandler}>Upload</button> 
        <img src="http://localhost:8000/vinh.jpg" />
        </>
    )
}

export default TestFile