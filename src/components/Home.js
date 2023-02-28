import style from './style/home.css';

const Home = () => (
  <div className={style.homeWrap}>
    <h2 className={style.title}>Welcome to my Math Magicians website!</h2>
    <div className={style.description}>
      <p className={style.descriptionP}>
        I would not dare to say that there is a direct relation between
        mathematics and madness; but there is no doubt that great mathematicians
        suffer from maniacal characteristics, delirium and symptoms of
        schizophrenia.
      </p>
      <br />
      <p className={style.descriptionP}>
        Why are numbers beautiful? It is like asking why is Beethoven`s Ninth
        Symphony beautiful If you don`t see why, someone can`t tell you. I know
        numbers are beautiful. If they aren`t beautiful, nothing is.
      </p>
    </div>
  </div>
);

export default Home;
