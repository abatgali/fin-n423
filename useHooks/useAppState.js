import React from "react";

const AppContext = React.createContext();

export function AppProvider({ children }) {
  const [appState, setAppState] = React.useState({
    user: "Anant",
    gasPrices: [],
    trackedGasPrices: [],
  });

  function updateAppState(newStateValues) {
    setAppState({
      ...appState,
      ...newStateValues,
    });
  }

  function removeTrackedGasPrice(gasPrice) {
    const newTrackedGasPrices = appState.trackedGasPrices.filter(
      (g) => g.name !== gasPrice.name
    );

    updateAppState({ trackedGasPrices: newTrackedGasPrices });
  }

  const providerValue = {
    ...appState,
    lastLoad: Date.now(),
    updateAppState,
    removeTrackedGasPrice,
  };

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
}

export default function useAppState() {
  return React.useContext(AppContext);
}
