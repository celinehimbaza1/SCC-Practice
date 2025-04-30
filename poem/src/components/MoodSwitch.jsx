import React, {useEffect, useState} from "react";

export default function MoodSwitch(){
    useEffect(()=>{
alert('hello user');
    },[]);
    const [mood,setMood]= useState('')
    const renederEmoji= (mood) => {
        switch(mood){
            case 'happy':
                return '😊';
            case 'sad':
                return '😢';
            case 'angry':
            return '😒';
            case 'surprised':
                return '😁';
            default:
                return '😍'

        }
    };
    return(
        <div className="flex flex-col items-center mt-10 text-3xl">
            <div> {renederEmoji(mood)}</div>
            <div className="flex flex-wrap gap-4 p-4">
                <button className="bg-gradient-to-b from-slate-400 to-slate-800" onClick={() => setMood('happy')}>Happy</button>
                <button className="bg-slate-300" onClick={() => setMood('sad')}>Saddy</button>
                <button className="bg-slate-500" onClick={() => setMood('angry')}>Angry</button>
                <button className="bg-purple-400" onClick={() => setMood('surprised')}>Surprised</button>
              
            </div>
        </div>
    );
}