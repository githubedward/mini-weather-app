import React, { useState } from "react";
import styled from "styled-components";
import { getWeather } from "./services";

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 200px;
  height: 20px;
`;

const Body = styled.li``;

const Header = styled.header`
  font-weight: bold;
`;

const LineItem = styled.span``;
const LineItemTitle = styled(LineItem)`
  font-weight: bold;
`;

function App() {
  const [weatherData, setWeatherData] = useState();
  console.log(weatherData);

  const data = weatherData.main
  console.log(data)
  // console parsedData = for (let prop in weatherData)

  return (
    <StyledApp>
      <Input
        onBlur={async ev => {
          const data = await getWeather(ev.target.value);
          setWeatherData(data);
        }}
      ></Input>
      <Body>
        <Header>{weatherData.name}</Header>
      </Body>
    </StyledApp>
  );
}

export default App;
