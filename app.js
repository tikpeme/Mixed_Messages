/* eslint-disable no-console */
/* Code planning
 Code will output a single random message to the console everytime the function runs ( Random but somehat grammtically coherent)
 There i need to plan what combination of phrases of word can always go together
*/

const time = ["Today", "Tomorrow", "Tonight", "This week"];

const adjective = [
  "slightly",
  "extremely",
  "very",
  " ",
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
  "you should consider wearing a jacket.",
  "you should don a jacket.",
  "you may want to probably layer up.",
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
    randomWeather === "rainy"
  ) {
    randomExpression =
      expressionsForCold[Math.round(Math.random() * expressionsForCold.length)];
  } else if (
    randomWeather === "sunny" ||
    randomWeather === "swealtering hot" ||
    randomWeather === "humid" ||
    randomWeather === "cloudy"
  ) {
    randomExpression =
      expressionsForWarm[Math.round(Math.random() * expressionsForWarm.length)];
  } else randomExpression = "";
  console.log(
    `${randomTime}'s weather will be ${randomAdjective} ${randomWeather}. ${randomExpression}`
  );
};
makeSentence();
