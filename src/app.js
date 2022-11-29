import React from "react"
import { Header } from "./components/header/Header"
import { VideoList } from "./components/video/VideoList"

export function App(props) {
    return (
        <div>
            <Header/>
            <VideoList/>
        </div>
    )
}