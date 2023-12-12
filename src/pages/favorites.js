import React from "react";
import useAppState from "../../useHooks/useAppState";
import { Button, Grid, Header, Icon } from "semantic-ui-react";
import Banner from "../../components/banner";

export default function () {
  const appState = useAppState();
  // console.log(appState);

  function changeName() {
    const titles = ["Crystalline", "Shining", "Glistening", "Sparkling"];
    const randomTitle = Math.floor(Math.random() * titles.length);
    appState.updateAppState({ user: titles[randomTitle] });
  }
  return (
    <div className="pb-24">
      <Banner
        image="https://images.unsplash.com/photo-1634542984003-e0fb8e200e91?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Track Gas Prices"
        description=""
      />
      <div className="flex flex-col pt-10">
        <div className="h-24 mx-auto bg-blue-200 shadow-lg mb-8 rounded-xl w-2/3 flex justify-around items-center">
          <Header as="h1">Hello, {appState.user}!</Header>

          <Button
            color="orange"
            icon="sync"
            content="Change User"
            onClick={changeName}
          />
        </div>
        <div className="flex flex-col gap-5 px-8">
          {appState.trackedGasPrices.map((gasPrice) => (
            <>
              <div className="text-center p-4" key={gasPrice.name}>
                <div className="flex justify-around w-96 items-center bg-gray-400">
                  <h1 className="mb-4 pb-8 text-white">
                    {gasPrice?.name.toUpperCase()}
                  </h1>
                </div>
                <div className="flex flex-col justify-around h-auto">
                  <div className="ui stackable five column grid">
                    <div className="column ui red">
                      Gasoline: ${gasPrice?.gasoline}
                    </div>
                    <div className="column ui blue">
                      MidGrade: ${gasPrice?.midGrade}
                    </div>
                    <div className="column ui green">
                      Premium: ${gasPrice?.premium}
                    </div>
                    <div className="column ui yellow">
                      Diesel: ${gasPrice?.diesel}
                    </div>
                    <Icon
                      name="trash red"
                      onClick={() => appState.removeTrackedGasPrice(gasPrice)}
                    />
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
