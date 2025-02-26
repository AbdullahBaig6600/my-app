import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success");
    }

    const handleInverseClick = ()=>{
        let newText = "";

        for (let i=0; i<text.length; i++)
        {
            if(i%2===0)
            {
                newText = newText + text[i].toUpperCase();
            }
            else{
                newText = newText + text[i].toLowerCase();
            }
        }

        setText(newText);
        props.showAlert("Converted to inversecase", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
                    color: props.mode==='dark'?'white':'black'
                }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleInverseClick}>Convert to Inversecase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
            </div>
            <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.trim() ? text.trim().split(/\s+/).length : 0} words and {text.length} characters</p>
                <p>{0.008 * (text.trim() ? text.trim().split(/\s+/).length : 0)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text:'Enter something in the text box above to preview it here'}</p>
            </div>
        </> 
    )
}
