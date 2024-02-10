import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Article from './Components/Article/Article'
import SideCart from './Components/SideCart/SideCart'

function App() {
  const [count, setCount] = useState(0);
  const [readingTime, setReadingTime] = useState("");
  const [bookMark, setBookMark] = useState("");
  const [bookMarkDescription, setBookMarkDescription] = useState("");
  const handleReadTime = (time) => {
    const previousReadingTime = JSON.parse(localStorage.getItem('readingTime'));
    console.log(previousReadingTime);
    if (previousReadingTime) {
      const sum = previousReadingTime + time;
      localStorage.setItem('readingTime', sum);
      setReadingTime(sum);
    }

    else {
      localStorage.setItem('readingTime', time);
      setReadingTime(time);
    }
  }


  const handleBookMark = () => {
    const previousBookMark = parseInt(localStorage.getItem('bookmark'));
    const newBookMark = previousBookMark ? previousBookMark + 1 : 1;
    localStorage.setItem('bookmark', newBookMark);
    setBookMark(newBookMark);


  }
  // const handleBookMarkDescription = (description) => {
  //   const previousDescription = JSON.parse(localStorage.getItem('description'));
  //   if (previousDescription) {
  //     const count = previousDescription + description;
  //     localStorage.setItem('description', count);
  //     setBookMarkDescription(count);
  //   }
  //   else {
  //     localStorage.setItem('description', description);
  //     setBookMarkDescription(description);
  //   }
  // }
  const handleBookMarkDescription = (description) => {
    let previousDescription = JSON.parse(localStorage.getItem('description')) || [];

    // Push the new description to the array
    previousDescription.push(description);

    // Update the local storage and state with the updated array
    localStorage.setItem('description', JSON.stringify(previousDescription));
    setBookMarkDescription(previousDescription);
}

  return (
    <>

      <Header></Header>
      <div className="main grid grid-cols-4 gap-4">
        <div className="main-container col-span-3">
          <Article handleReadTime={handleReadTime}
            handleBookMark={handleBookMark}
            handleBookMarkDescription={handleBookMarkDescription}
          />
        </div>
        <div className="side-container col-span-1">
          <SideCart readingTime={readingTime}
            bookMark={bookMark}
            bookMarkDescription={bookMarkDescription}
          />
        </div>
      </div>


    </>
  )

}

export default App
