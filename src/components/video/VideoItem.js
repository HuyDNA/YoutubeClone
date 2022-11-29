import React from "react"

export function VideoItem(props) {
    return (
        <div style={{display: "flex", flexFlow: "column", width: "22%", gap: "1em"}}>
            <img src={props.song_thumbnail} style={{width: "100%"}}/>
            <div style={{display: "flex"}}>
                <div style={{width: "3em"}}>
                    <img src={props.author_avatar} style={{borderRadius: "50%", width: "2em", height: "2em"}}/>
                </div>
                <div style={{flex: 5}}>
                    <p style={{fontWeight: "bold"}}>{props.title}</p>
                    <p style={{color: "gray"}}>{props.channel}</p>
                    <p style={{color: "gray"}}>{props.view} - {props.publishedTime}</p>
                </div>
            </div>
        </div>
    )    
}