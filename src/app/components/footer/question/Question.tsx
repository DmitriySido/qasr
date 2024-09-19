import Image from 'next/image'
import Title from '../../UI/title/Title'
import QuestionFoto from '../../../../../public/images/question-foto.jpg'
import './question.scss'

const Question = () => {

  return(
    <div className='question'>
      <div className='question-inner container'>
        <Title moreClass='left' titleText='DO YOU HAVE A QUESTION?' subtitle='For assistance, you can call our Contact Centre. The opening hours for the Contact Centre are: Mondays from 10am to 6pm, Tuesdays to Thursdays from 9am to 7pm, and Fridays to Sundays from 9am to 8pm GST (Gulf Standard Time).'/>

        <Image
          className='question-image1'
          src={QuestionFoto}
          width={600}
          height={400}
          alt='Do you hava a question ?'
        />

      <Image
          className='question-image'
          src={QuestionFoto}
          width={600}
          height={400}
          alt='Do you hava a question ?'
        />
        </div>
    </div>
  )
}

export default Question