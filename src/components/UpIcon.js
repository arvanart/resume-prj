import React, {Component} from 'react';

const UpIcon = (props) =>{
    return(
        <div 
            style = {{
            display:"flex",
            flexDirection: "row",
            alignItems:"center",
            justifyContent:"center",
            position: "absolute",
            right: "0",
            left: "0",
            bottom: "70px"
            // marginBottom:"-35px",
            // transform:"translateY(-80px)"
            }}
        >
            <div
                style={{
                maxWidth: '30px',
                }}  
            >
                <img src={props.icon} 
                    style={{
                    maxWidth: '30px',
                    transform: 'rotate(180deg)'
                    }} 
                />
            </div>
        </div>
    );  
}

export default UpIcon;