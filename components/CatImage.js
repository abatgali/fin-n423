import React from "react";
import { Popup, Button, Grid, Image } from "semantic-ui-react";
import Link from "next/link";
export default function CatImage({ src, onClick, id }) {
  return (
    <>
      <Grid.Column>
        <Popup
          trigger={
            <Image src={src} alt="Image of a cat" width={500} height={500} />
          }
          on={"click"}
          content={
            <>
              <div className="flex flex-col justify-between h-64"></div>
              <Button color="green" icon="heart" content="save" onClick={onClick} />
              <Button
                as={Link}
                color="yellow"
                icon="info"
                content="View Details"
                href={`/dog/${id}`}
              />
            </>
          }
          
        ></Popup>
      </Grid.Column>
    </>
  );
}
