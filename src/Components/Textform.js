import React, {useState} from 'react';

export default function Textform(props){
    
    const onuppercase = () =>{
        //console.log("uppercase was clicked");
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showalert("upper case  enabled", "Success");
    }

    const onlowercase = () =>{
        //console.log("uppercase was clicked");
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showalert("lower case  enabled", "Success");
    }

    const handleOnChange = (event)=>{
        console.log("on change");
        settext(event.target.value);
    }

    const cleartext = () =>{
        let newtext = '';
        settext(newtext);
        props.showalert("the text is cleared", "Success");
    }

    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showalert('the text is coppied','success');
    }


    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "));
        props.showalert("Extra spaces removed!", "success");
    }

    // const changecolor = () =>{
    //     let newtext =text; 
    //     settext(newtext);
    // }

    const [text, settext] = useState("enter your text");

    return (  
           <> 
           <div style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 >{props.heading}</h1>
            <p>this is where you need to be</p>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={onuppercase}>convert to uppercase</button>
            <button type="button" className="btn btn-primary mx-3" onClick={onlowercase}>convert to lowercase</button>
            <button type="button" className="btn btn-primary mx-3" onClick={cleartext}>Clear text</button> 
            <button type="button" className="btn btn-primary mx-3" onClick={handleCopy}>Copy text</button>
            <button type="button" className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Space</button>
            {/* <button type="button" className="btn btn-primary mx-3" onClick={text.style={color: "blue"}} >Change color</button>   */}
        
            
       <div class='my-4' style={{color: props.mode==='dark'?'white':'black'}}>
           <h1>text summary</h1>
           <p>{text.split(" ").length} words and {text.length} characters</p>
           <p>{0.008 *text.split(" ").length} minutes to read the text</p>
           <h2>Preview</h2>
           <p>{text.length>0?text:"enter the text to be previewed"}</p>
           </div>
           </div>
       </>

    )
}

