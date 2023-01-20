import React from 'react'
import './App.css'
import { TwiterFollowCard } from './TwitterFollowCard'
export function App () {
    return (
        <div className='App'>
            <TwiterFollowCard isFollowing username = "midudev" name = "Miguel Angel"/>
            <TwiterFollowCard isFollowing username = "midudev" name = "Kevin Gutierrez"/>
        </div>
    ) 
}