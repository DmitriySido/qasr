import Title from '../../UI/title/Title'
import './share.scss'
import ShareBlock from '../../UI/shareBlock/ShareBlock'

const Share = () => {

  return(
    <section className="share container">
      <Title
        titleText="SHARE OUR NATION’S JOURNEY"
        subtitle="Qasr Al Watan is more than a palace, it is a unique testament to the spirit of the United Arab Emirates' people and its leaders. The Palace invites the world to share our culture, knowledge and inspiring journey. Qasr Al Watan is more than just a palace, it is an enriching interactive journey in a contemporary setting that reveals and reflects on governance, knowledge and craftsmanship."
      />

      <ShareBlock
        side='left'
        shareSubject='Download the Qasr Al Watan Map'
        shareSubtitle='Enjoy a contactless experience at the Palace. Navigate your way through all exhibitions, shopping and dining options available at Qasr Al Watan.'
      />
      
    </section>
  )
}

export default Share