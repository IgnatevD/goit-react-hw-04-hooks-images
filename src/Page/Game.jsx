import React, { useEffect, useState, memo } from "react";
import ReactGA from "react-ga";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Container from "../Components/Container";
import Summer from "../image/pictures/summer.png";
import Jack from "../image/pictures/jack.png";
import Corona from "../image/pictures/corona.png";
import Champan from "../image/pictures/champan.png";
import Balis from "../image/pictures/balis.png";
import Chivas from "../image/pictures/chivas.png";
import Jagamester from "../image/pictures/jagamester.png";
import LogoPHP from "../image/pictures/php_logo.png";
import styles from './Game.module.scss';


const ItemType = {
  CONTAINER: "container",
};

const DraggableContainer = ({ id, image }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType.CONTAINER,
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });


  return (
    <div ref={drag} className={styles.draggableContainer}>
      <img src={image} alt={`Container ${id}`} className={styles.image} />
    </div>
  );
};

const DropZone = ({ onDrop, id, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemType.CONTAINER,
    drop: (item) => onDrop(item.id, id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={styles.dropZone}>
      {children}
    </div>
  );
};

const ContainerList = ({ containers }) => {
  return (
    <div  className={styles.containerList}>
      {containers.map((container) => (
        <DraggableContainer key={container.id} id={container.id} image={container.image} />
      ))}
    </div>
  );
};

const DropZoneList = ({ dropZones, containers, onDrop }) => {
  return (
    <div className={styles.dropZoneList}>
      {dropZones.map((dropZone) => {
        const container = containers.find(c => c.dropZoneId === dropZone.id);
        return (
          <DropZone key={dropZone.id} id={dropZone.id} onDrop={onDrop}>
            {container && <DraggableContainer id={container.id} image={container.image} />}
          </DropZone>
        );
      })}
    </div>
  );
};

const shuffleArray = (array) => {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

const Game = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const initialContainers = shuffleArray([
    { id: 0, image: Corona, dropZoneId: null },
    { id: 1, image: Jack, dropZoneId: null },
    { id: 2, image: Balis, dropZoneId: null },
    { id: 3, image: Champan, dropZoneId: null },
    { id: 4, image: Jagamester, dropZoneId: null },
    { id: 5, image: Chivas, dropZoneId: null },
  ]);

  const [containers, setContainers] = useState(initialContainers);
  const [attempts, setAttempts] = useState(0);
  const [matches, setMatches] = useState(0);
  const [message, setMessage] = useState("");
  const [allPlaced, setAllPlaced] = useState(false);
  const [animateAttempts, setAnimateAttempts] = useState(false);
  const [animateMatches, setAnimateMatches] = useState(false);
  const [animateTypewriter, setAnimateTypewriter] = useState(false);


  const dropZones = [
    { id: 2 },
    { id: 1 },
    { id: 4 },
    { id: 0 },
    { id: 5 },
    { id: 3 },
  ];

  const checkMatches = (containers) => {
    let matchCount = 0;
    containers.forEach((container) => {
      const dropZone = dropZones.find((zone) => zone.id === container.id);
      if (dropZone && container.dropZoneId === dropZone.id) {
        matchCount++;
      }
    });
    return matchCount;
  };

  const handleDrop = (containerId, dropZoneId) => {
    setContainers(prevContainers => {
      const updatedContainers = prevContainers.map(container =>
        container.id === containerId ? { ...container, dropZoneId } : container
      );

      const allPlaced = updatedContainers.every(container => container.dropZoneId !== null);
      setAllPlaced(allPlaced);

      return updatedContainers;
    });
  };

  const handleCheck = () => {
    const matchCount = checkMatches(containers);
    setMatches(matchCount);
    setAttempts(prevAttempts => prevAttempts + 1);

    setAnimateAttempts(true);
    setAnimateMatches(true);
    setAnimateTypewriter(true);

    if (matchCount === dropZones.length) {
      setMessage('🎉 Congratulations! You did it! 🎯');
    } else {
      switch (matchCount) {
        case 0:
          setMessage('😅 Oops! Try again, you got this!');
          break;
        case 1:
          setMessage('👍 The start has been made!');
          break;
        case 2:
          setMessage('👏 You’re on the right track!');
          break;
        case 3:
          setMessage('😎 This is the path to success!');
          break;
        case 4:
          setMessage('🚀 Almost there, you’re a pro!');
          break;
        case 5:
          setMessage('🔥 So close! Just one more!');
          break;
        default:
          setMessage('🎯 Keep it up! You’re doing great!');
      }

      setTimeout(() => {
        setContainers(prevContainers => prevContainers.map(container => ({
          ...container,
          dropZoneId: null
        })));
        setAllPlaced(false);
      }, 3000);
    }

  };

  const handleRestart = () => {
    setContainers(initialContainers);
    setAttempts(0);
    setMatches(0);
    setMessage("");
    setAllPlaced(false);
  };

  useEffect(() => {
    if (animateAttempts) {
      const timer = setTimeout(() => setAnimateAttempts(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [animateAttempts]);

  useEffect(() => {
    if (animateMatches) {
      const timer = setTimeout(() => setAnimateMatches(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [animateMatches]);

  useEffect(() => {
    if (animateTypewriter) {
      const timer = setTimeout(() => setAnimateTypewriter(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [animateTypewriter]);


  const FallingFruits = memo(({ count }) => {
    const fruits = ['🍎', '🍌', '🍊', '🍈', '🥭', '🍇', '🥥', '🍓', '🍍', '🍋', '🍐'];

    const getRandomFruit = () => fruits[Math.floor(Math.random() * fruits.length)];

    const getRandomSize = () => Math.floor(Math.random() * 30) + 30;

    const fruitsArray = new Array(count).fill(null);
    console.log('Rendering FallingFruits');

    return (
      <div className={styles.stars}>
        {fruitsArray.map((_, index) => {
          const size = getRandomSize();
          const fruit = getRandomFruit();
          return (
            <div
              key={index}
              className={styles.fruit}
              style={{
                fontSize: `${size}px`,
                position: 'absolute',
                top: `${Math.random() * -100}px`,
                left: `${Math.random() * 100}%`,
                animationDelay: `0s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              {fruit}
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <div className={styles.mainContainer}>
      <Container>
        <div className={styles.summerImage}>
          <img src={Summer} alt="Summer" className={styles.image}/>
        </div>
        <DndProvider backend={HTML5Backend}>
          {message === '🎉 Congratulations! You did it! 🎯' ?
            <div className={styles.containerList}>
              <p className={styles.winner}>🏆 WINNERS 💪</p>
              <FallingFruits count={60} />
            </div>
            : <ContainerList containers={containers.filter(c => c.dropZoneId === null)}/>}
          <DropZoneList dropZones={dropZones} containers={containers} onDrop={handleDrop}/>
          <div className={styles.statsContainer}>
            <div  className={styles.statBox}>
              <div className={styles.statLabel}>Attempts</div>
              <div className={`${styles.statNumber} ${animateAttempts ? styles.fadeIn : ''}`}>{attempts}</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statLabel}>Matches</div>
              <div className={`${styles.statNumber} ${animateMatches ? styles.fadeIn : ''}`}>{matches}</div>
            </div>
          </div>
          <div className={styles.messageContainer}>
          <div className={styles.message}>
            <p className={animateTypewriter ? styles.typewriter : ""}>{message}</p></div>
            <button onClick={handleCheck} disabled={!allPlaced} className={`${styles.gameButton} ${!allPlaced ? styles.gameButtonDisabled : ''}`}>
              Check
            </button>
            <button onClick={handleRestart} className={styles.gameButton}>
              Restart
            </button>
          </div>
        </DndProvider>
      </Container>
      <div className={styles.phpLogo}>
        <img src={LogoPHP} alt="Logo" className={styles.image}/>
      </div>
    </div>
  );
};

export default Game;
