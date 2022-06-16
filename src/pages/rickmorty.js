/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Home.module.css";

const Rickmorty = ({ results, error }) => {
  return (
    <div className={styles.main}>
      <center><img className={styles.image} src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png"></img></center>
      <div className={styles.container}>
        {results.map((rickmorty, index) => (
          <div key={rickmorty.name}>
            <img
              width={300}
              height={400}
              src={`https://rickandmortyapi.com/api/character/avatar/${
                index + 1
              }.jpeg`}
              alt={rickmorty.name}
            />
            <h4>{rickmorty.name}/{rickmorty.species}</h4>
            <h4>Estado: {rickmorty.status}</h4>
            <h4>Especie: {rickmorty.gender}</h4>
            <h4>Origen: {rickmorty.origin.name}</h4>
            <h4>Locacion: {rickmorty.location.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

Rickmorty.getInitialProps = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    return {
      results: data.results,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export default Rickmorty;