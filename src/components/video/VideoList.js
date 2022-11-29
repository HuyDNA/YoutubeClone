import React from "react"
import { VideoItem } from "./VideoItem"
import data from "../../data"

export function VideoList(props) {
    return (
        <div style={{display: "flex", gap: "1em", flexWrap: "wrap", justifyContent: "center", margin: "2em"}}>
            {data.map((item) => <VideoItem {...item}/>)}
        </div>
    )   
}