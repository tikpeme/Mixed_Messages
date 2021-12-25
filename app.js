/** ***********************************************************
 * Author: Tete Ikpeme
 * Purpose: Generate random weather messages (With outfit recommendations)
 ************************************************************ */

const time = ["Today", "Tomorrow", "Tonight", "This week"];

const adjective = [
  "slightly",
  "extremely",
  "very",
  "partially",
  "sporadically",
  "a little",
];

const weather = [
  "sunny",
  "chilly",
  "windy",
  "frosty",
  "snowy",
  "cloudy",
  "rainy",
  "haily",
  "hot",
  "humid",
];

const expressionsForCold = [
  "You should consider wearing a jacket.",
  "You could don a jacket.",
  "You may want to probably layer up.",
];

const expressionsForWarm = [
  "Wear something light.",
  "Consider swapping out the sweater for a t-shirt.",
  "Think of putting on bright reflective colors.",
];

const makeSentence = () => {
  const randomTime = time[Math.floor(Math.random() * time.length)];
  const randomAdjective =
    adjective[Math.floor(Math.random() * adjective.length)];
  const randomWeather = weather[Math.floor(Math.random() * weather.length)];
  let randomExpression;
  // Selection of sentence structure based on weather
  if (
    randomWeather === "chilly" ||
    randomWeather === "frosty" ||
    randomWeather === "snowy" ||
    randomWeather === "rainy" ||
    randomWeather === "haily"
  ) {
    randomExpression =
      expressionsForCold[Math.floor(Math.random() * expressionsForCold.length)];
  } else if (
    randomWeather === "sunny" ||
    randomWeather === "hot" ||
    randomWeather === "humid" ||
    randomWeather === "cloudy"
  ) {
    randomExpression =
      expressionsForWarm[Math.floor(Math.random() * expressionsForWarm.length)];
  } else randomExpression = "";
  console.log(
    `${randomTime}'s weather will be ${randomAdjective} ${randomWeather}. ${randomExpression}`
  );
};
makeSentence();
