import React, { useState } from "react";
import "./Comic_panel.css";
import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";


function Comic_panel({ box_id,readingMode,setReadingMode }) {
  const [isClicked, setIsClicked] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [error,setError]=useState(false);

  useEffect(() => {}, [isClicked, imageUrl, inputValue]);

  const handle_input_change = (e) => {
    setInputValue(e.target.value);
  };
  const handle_Click_Search = () => {
    
    if(isClicked){
      return ;
    }

    setIsClicked(true);
    const pp = { inputValue };
    async function query(data) {
      const response = await fetch(
        "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
        {
          headers: {
            Accept: "image/png",
            Authorization:
              "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const result = await response.blob();
      return result;
    }

    
    query({ inputs: pp.inputValue })
      .then((response) => {
        const img_URL = URL.createObjectURL(response);
        setImageUrl(img_URL);
        setIsClicked(false);
      })
      .catch((err) => {
        // console.log(err);
        setIsClicked(false);
        setError(true);

      });
  };
  return (<>
    { readingMode ?  (<div>
      <div className="box_no">{box_id}</div>
      { imageUrl=="" ? <img/>: <img src= {imageUrl} className="comic_panel_img" />

      }
    </div>): 
    (<div className="comic_panel_box">
      <div className="box_no">
      {box_id+1}
      </div>
      <div>
        <input type="text" value={inputValue} onChange={handle_input_change} />
      </div>
      <div>
        <button onClick={handle_Click_Search} className="search_button">
          Find...
        </button>
      </div>
      {isClicked ? (
        <div className="comic_panel_img_div">
          
          <Box sx={{ display: "flex" }} className="loading">
            <CircularProgress />
          </Box>
        </div>
      ) : (  error?  <>Error</> :   (
        <div className="comic_panel_img_div" id={box_id}>
          {imageUrl == "" ? (
            <></>
          ) : (
            <img src= {imageUrl} className="comic_panel_img" />
          )}
        </div>
      )) }
    </div>)
          } 
          </>
  );
}

export default Comic_panel;
