import React,{useState} from 'react'           //abhi onclick ka koi matlab hi nahi hai
                                //here use state is a type of hooks.

export default function TextHtmlForm(props) {

    let textBoxStyle={
             width:'80vw',
             height: '30vh',
             margin: '10px',
             backgroundColor:`${props.mode==='dark'?'grey':'white'}`,
             textColor:`${props.mode==='dark'?'white':'dark'}`
    }
        const handleUpClick = () =>{
            console.log("UpperCase ws clicked");
            let newText=text.toUpperCase();          //here we change it in upper
            props.showAlert("converted to upper case","success");
            
            setText(newText);
        }

        const handleDownClick = () =>{
            console.log("Lower case  ws clicked");
            let newText=text.toLowerCase();          //here we change it in upper
            props.showAlert("converted to Lower case","success");
            setText(newText);
        }

        const handleCopy= () =>{
            console.log("copy elment");
            var text = document.getElementById("floatingTextarea");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("text copied to clipboard","success");
        }

       const handleExtraSpaces = () =>{
              let newText = text.split(/[ ]+/);
              setText(newText.join(" "));
              props.showAlert("Extra spaces are removed","success");
       }

        const handleOnChange = (event) =>{
            console.log("On change");
            setText(event.target.value);                 //here we update the value entered in the textbox as soon as we write any thing to it. as it update the value of setText variable above.
        }
         const [text,setText] = useState('');      //here we use setText to change the value of text dynamically
  return (
    <>
<div className="container1">
    <div className="htmlForm-floating">
  <textarea className="htmlForm-control" style={textBoxStyle} placeholder="Leave a comment here" id="floatingTextarea" onChange={handleOnChange }value ={text}></textarea>
  
</div>
     <button type="button"  className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to UpperCase</button>
     <button type="button"  className="btn btn-primary mx-2"  onClick={handleDownClick}>Convert to UpperCase</button>
     <button type="button"  className="btn btn-primary mx-2"  onClick={handleCopy}>Copy Text</button>
     <button type="button"  className="btn btn-primary mx-2"  onClick={handleExtraSpaces}>Remove Extra Spaces</button>
     </div>
    <div className="container2">
        <h1>Your text summary is here</h1>
        <p>{text.split(" ").length} words and  {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>      
     </>
     
  )
}



