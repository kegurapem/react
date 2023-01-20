export function TwiterFollowCard ({username, name, isFollowing}) {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                alt="Avatar de midudev" 
                src={`https://unavatar.io/${username}`} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span 
                    className='tw-followCard-infoUsername'>@{username}
                    </span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
         </article>
    )
}