import Image from "next/image";
import { Inter } from "next/font/google";
import { Grid, Header, Button, Popup } from "semantic-ui-react";
import { useState } from "react";
import CatImage from "../../components/CatImage";
import useAppState from "../../useHooks/useAppState";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [catImages, setCatImages] = useState([]); // [] is the initial value
  const appState = useAppState();
  console.log(appState);



  function getCatImages() {
    fetch(
      "https://api.thedogapi.com/v1/images/search?mimee_types=jpg,png&limit=10&format=json&order=RANDOM&size=small&has_breeds=true"
    )
      .then((r) => r.json())
      .then((r) => appState.updateAppState({catImages: r }))
      .catch((e) => console.warn(e));
  }


  function saveCatImage(selectedCat) {
    appState.updateAppState({
      favCats: appState.favCats.concat(selectedCat),
    });
  }
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between py-24 px-5 ${inter.className}`}
    >
      <Grid columns={1}>
        <Grid.Column>
          <Header as="h1">Insta-dogs</Header>
        </Grid.Column>
        <Grid.Column>
          <Button
            onClick={getCatImages}
            icon="sync"
            color="blue"
            content="Reload Dogs"
          />
        </Grid.Column>
        <Grid.Row columns={3}>
          {appState.catImages.map((catImage) => (
            <CatImage src={catImage.url} key={catImage.id} onClick={()=>saveCatImage(catImage)} id={catImage.id}/>
          ))}
        </Grid.Row>
      </Grid>
    </main>
  );
}
