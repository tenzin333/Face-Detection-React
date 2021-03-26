import React from 'react';

const ImageLinkForm = ({onInputChange,onSubmitHandler}) =>{
    return (
        <div className="imageForm">
            <div className="main" >
                 <p className="rank " >This magic brain will detect faces.</p> 

            <div class="input-container">
                <input  type="text" placeholder="Image Link.."  onChange={onInputChange}  />
                <button type="submit" onClick={onSubmitHandler} >Detect</button>
            </div>
            </div>
           

        </div>
    

    );

}

export default ImageLinkForm;