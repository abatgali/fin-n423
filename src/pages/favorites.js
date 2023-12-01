import React from "react";
import useAppState from "../../useHooks/useAppState";
import { Button, Grid, Header } from "semantic-ui-react";
import CatImage from "../../components/CatImage";
export default function () {
  const appState = useAppState();
  console.log(appState);

  function changeName() {
    const titles = ["Crystalline", "Shining", "Glistening", "Sparkling"];
    const randomTitle = Math.floor(Math.random() * titles.length);
    appState.updateAppState({ user: titles[randomTitle] });
  }
  return (
    <div className="p-24">
      <Grid columns={1}>
        <Grid.Column>
          <Header as="h1">{appState.user}'s Favorites</Header>
        </Grid.Column>
        <Grid.Column>
          <Button
            color="orange"
            icon="sync"
            content="Change Name"
            onClick={changeName}
          />
        </Grid.Column>
        <Grid.Row columns={3}>
          {appState.favCats.map((catImage) => (
            <CatImage src={catImage.url} key={catImage.id} />
          ))}
      </Grid.Row>
      </Grid>
    </div>
  );
}
