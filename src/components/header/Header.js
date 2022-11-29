import React from "react"
import FormatAlignJustifyRoundedIcon from '@mui/icons-material/FormatAlignJustifyRounded';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import EmergencyRecordingOutlinedIcon from '@mui/icons-material/EmergencyRecordingOutlined';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import YoutubeIcon from "../../assets/youtube.png"
import Avatar from "../../assets/ava.jpg"

export function Logo(props) {
    return (
        <div style={{display: "flex", alignItems: "center", gap: "0.5em"}}><img src={YoutubeIcon} style={{height: "3em", width: "3em"}}/> <span style={{fontWeight: "bold", fontSize: "1.5em"}}> Youtube </span></div>
    )
}

export function Header(props) {
    return (
        <header style={{display: "flex", alignItems: "center", height: "7vh"}}>
            <div style={{display: "flex", alignItems: "center", gap: "1.5em", flex: 1, margin: "0.5em", justifyContent: "left"}}>
                <FormatAlignJustifyRoundedIcon/>
                <Logo style={{flex: 2}}/>
            </div>

            <div style={{flex: 4, display: "flex", alignItems: "center", justifyContent: "center"}}>
                <TextField
                    label="Search"
                    variant="outlined"
                    style={{width: "25vw"}}
                />
                <SearchIcon
                    style={{backgroundColor: "#f8f8f8", border: "#c6c6c6 solid 1px", borderRadius: "0 10px 10px 0", height: "2.4em", width: "1.5em"}}
                />
                <KeyboardVoiceIcon style={{marginLeft: "0.5em"}}/>

            </div>

            <div style={{flex: 1, display: "flex", alignItems: "center", justifyContent: "right", gap: "1.5em"}}>
                <EmergencyRecordingOutlinedIcon/>
                <NotificationsNoneOutlinedIcon/>
                <img src={Avatar} style={{width: "3em", height: "3em", borderRadius: "50%"}}/>
            </div>
        </header>
    );
}