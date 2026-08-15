
import purple from './assets/purple.jpeg'
import Blue from './assets/Blue.jpeg'
import ManWorking from './assets/ManWorking.jpeg'
import Green from './assets/Green.jpeg'
import girlStand from './assets/girlStand.jpeg'
import Man from './assets/Man.jpeg'

import './App.css'

function Profile({title, text, image, reverse}){
  return (
    <div className={`comment-grid ${reverse?"reverse":""}`}>
      <div className="comment">
        <h3 className="title">{title}</h3>
        <p className="title-comment">{text}</p>
        <p className="talkb">Let's talk</p>
      </div>
      <div className="comment-img">
    <img className='img-comment' src={image} alt="image" />
      </div>
    </div>
  )
}


function Profile2({image, name, comment}){
  return (
    
        <div className={"picture-1"}>
          <img className='pic-1' src={image} alt="image" />
          <h3 >{name}</h3>
          <p>{comment}</p>
        </div>
    

  )
}

function App() {
  return (
    <>
      <Profile 
        title = "Effective Website Design and Development"
        text="By connecting solutions all over the world to the best instructions, healthcare marketing and vision is reach their goals and pursue their dreams"
        image={girlStand}
      />

      <Profile
      reverse
      title="We Give proven Digital Marketing Strategies to <br> Our clients"
      text="By connecting solutions all over the world to the best instructions, healthcare marketing and vision is reach their goals and pursue their dreams"
    image={girlStand}
      />
      <Profile 
        title = "People Will Always Judge <br> the Book by its Cover"
        text="By connecting solutions all over the world to the best instructions, healthcare marketing and vision is reach their goals and pursue their dreams"
        image={ManWorking}
      />

    <div className='pictures'>
        <Profile2
        image={Green}
        name={"Amora Amanda"}
        comment={'Intervention set in green square 2 hours get to do work get to do work while eating'}
      />

      <Profile2
        image={Blue}
        name={"Lucas Podolski"}
        comment={'Intervention set in green square 2 hours get to do work get to do work while eating'}
      />

      <Profile2
        image={purple}
        name={"Lanvy Marisaa Nasa"}
        comment={'Intervention set in green square 2 hours get to do work get to do work while eating'}
      />
    </div>
      
    </>
  )
}






export default App
