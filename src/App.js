import React , { useState } from 'react';

function App() {
  const Folder = (props) => {
    
    const [isOpen,setIsOpen] = useState(true);

    const {name,children} = props;

    const direction = isOpen ? 'down' : 'right';
    const handleClick = () => {
      setIsOpen(!isOpen);
    };

    
    return (
      <div>
         <span onClick={handleClick}>
            <i className="blue folder icon"></i>
            <i className={`caret ${direction} icon`}></i>
         </span>
        {name}
        <div style={{marginLeft:'17px'}}>{isOpen ? children : null}</div>
      </div>
    );
  };

  const File = (props) => {

    const { name } = props;
    const fileExtension = name.split('.')[1];
    const fileIcons = {
      mp4:'headphones',
      jpeg:'file image',
      png:'file image outline'
    }
    console.log(fileExtension);
    return (
      <div>
        <i className={`${fileIcons[fileExtension]} icon`}></i>
        {name}
      </div>
    );  
};
  
  return (
    <div>
      <Folder name="My Desktop">
        <Folder name="Movies" >
          <File name="your name.mp4" /> 
          <File name="shape of your voice.mp4" />
        </Folder>
        <File name="dogs.jpeg" /> 
        <File name="cats.jpeg" />
      </Folder>   
      <Folder name="My Images">
        <File name="MyPhoto.png" /> 
        <File name="Facebook.png" />
      </Folder>
    </div>
  );  

}

export default App;
