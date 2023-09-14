export function TwitterFollowCard () {
  return (
    <article className="tw-followCard">

      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='El avatar de midu'
          src="https://unavatar.io/midudev"
        />
        <div className='tw-followCard-info'>
          <strong>Miguel Ángel Durán</strong>
          <span className='tw-followCard-infoUserName'>@midudev</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">Follow</button>
      </aside>

    </article>
  )
}
