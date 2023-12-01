import React, { useEffect, useState } from "react";
import { Image } from "semantic-ui-react";
import { useRouter } from "next/router";
export default function DogDetails({ slug }) {
  const router = useRouter();
  console.log(router.query.slug);
  const [dogInfo, setDogInfo] = useState(null);

  function getDogInfo() {
    fetch(`https://api.thedogapi.com/v1/images/${router.query.slug}`)
      .then((r) => r.json())
      .then((r) => setDogInfo(r))
      .catch((e) => console.warn(e));
  }

  useEffect(() => {
    if (router.query.slug) {
      getDogInfo();
    }
  }, [router.query.slug]);
  console.log(dogInfo);
  return (
    <>
      <div className="text-center p-16 h-screen">
        <h1>Dog Details</h1>
        <div className="flex flex-col justify-around h-auto">
          <Image
            src={dogInfo?.url}
            alt="Image of a dog"
            width={300}
            height={300}
            className="rounded-full mx-auto shadow-lg"
          />
          <h2>Breed Information:</h2>
          <p>
            <span className="text-3xl font-bold text-blue-500">{dogInfo?.breeds[0].name}</span> <br></br> (Bred for {dogInfo?.breeds[0].bred_for} )
          </p>
          <h2>Temperament:</h2>
          <p>{dogInfo?.breeds[0].temperament}</p>
          <h2>Life Span:</h2>
          <p>{dogInfo?.breeds[0].life_span}</p>
        </div>
      </div>
    </>
  );
}
