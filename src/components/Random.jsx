function Random({ min, max }) {
  const randomNum= Math.round( Math.random() * (max - min) + min);
  return (<p>
      Random value between {min} and {max} is {randomNum}
    </p>);
  
}
export default Random;
