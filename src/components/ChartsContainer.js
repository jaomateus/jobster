import React, { useState } from "react";
import styled from "styled-components";

import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import { useSelector } from "react-redux";

const ChartsContainer = () => {
	const [barChart, setBarChart] = useState(true);
	const { monthlyApplications: data } = useSelector((store) => store.allJobs);
	return (
		<Wrapper>
			<h1>Monthly Applications</h1>
			<button type='button' onClick={() => setBarChart(!barChart)}>
				{barChart ? "Area Chart" : "Bar CHart"}
			</button>
			{barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
		</Wrapper>
	);
};

const Wrapper = styled.section`
  margin-top: 4rem;
  text-align: center;
  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--primary-500);
    font-size: 1.25rem;
    cursor: pointer;
  }
  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
  }
`;

export default ChartsContainer;
