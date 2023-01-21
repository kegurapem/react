import React from 'react'
import './App.css'
import { TwiterFollowCard } from './TwitterFollowCard'

export function App () {
    const format = (userName) => `@${userName}`

    return (
        <section className='App'>
            <TwiterFollowCard 
            formatUserName={format} 
            isFollowing 
            userName="midudev" 
            name="Miguel Angel"
            />

            <TwiterFollowCard 
            formatUserName={format} 
            isFollowing 
            userName="midudev" 
            name="Kevin Gutierrez"
            />
        </section>
    ) 
}