import Image from "next/image";
import { Inter } from "next/font/google";
import { Grid, Header, Button, Popup } from "semantic-ui-react";
import { useState } from "react";
import useAppState from "../../useHooks/useAppState";
import GasCard from "../../components/GasCard";
import Banner from "../../components/banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const appState = useAppState();
  console.log(appState);

  function getGasPrices() {
    fetch("https://api.collectapi.com/gasPrice/allUsaPrice", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: "apikey 1Qvb8PnIy0RIhYOqVh4wzC:0tcVUwNjyHUBI3lACZ7pQ4",
      },
    })
      .then((response) => response.json())
      .then((r) => appState.updateAppState({ gasPrices: r.result }))
      .catch((err) => console.log("Error:", err));

    console.log(appState.gasPrices);
  }

  function TrackGasPrice(selectedState) {
    appState.updateAppState({
      trackedGasPrices: appState.trackedGasPrices.concat(selectedState),
    });
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center  ${inter.className}`}
    >
      <Banner
        image="https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="USA Gas Prices"
        description=""
      />
      <h1 className="text-5xl font-bold"></h1>
      <Grid columns={1}>
        <Grid.Column>
          <Button
            onClick={getGasPrices}
            icon="sync"
            color="blue"
            content="Fetch Gas Prices"
          />
        </Grid.Column>
      </Grid>
      <div className="ui cards p-5 w-fit mx-auto">
        {appState.gasPrices.map((gasPrice) => (
          <GasCard
            key={gasPrice.name}
            name={gasPrice.name}
            gasoline={gasPrice.gasoline}
            midGrade={gasPrice.midGrade}
            premium={gasPrice.premium}
            diesel={gasPrice.diesel}
            onClick={() => TrackGasPrice(gasPrice)}
          />
        ))}
      </div>
    </main>
  );
}
