import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Banner from "../../../components/banner";
export default function StateGasResults({ slug }) {
  const router = useRouter();
  console.log(router.query.slug);
  const [stateGasInfo, setstateGasInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  function getStateGasPrices() {
    try {
      fetch(
        `https://api.collectapi.com/gasPrice/stateUsaPrice?state=${router.query.slug}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization:
              "apikey 1Qvb8PnIy0RIhYOqVh4wzC:0tcVUwNjyHUBI3lACZ7pQ4",
          },
        }
      )
        .then((r) => r.json())
        .then((r) => {
          setstateGasInfo(r.result.state);
          setLoading(false);
        })
        .catch((e) => console.warn(e));
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (router.query.slug) {
      getStateGasPrices();
    }
  }, [router.query.slug]);
  // console.log(stateGasInfo);
  return (
    <>
      <Banner
        image="https://images.unsplash.com/photo-1634542984003-e0fb8e200e91?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Search Results"
        description=""
      />
      <div className="text-center p-16 h-screen">
        <h1 className="mb-12">
          State Gas Prices for {router.query.slug?.toUpperCase()}
        </h1>
        <div className="flex flex-col justify-around h-auto">
          {loading ? (
            <div class="ui segment">
              <p></p>
              <div class="ui active dimmer">
                <div class="ui loader"></div>
              </div>
            </div>
          ) : (
            <div className="ui stackable four column grid">
              <div className="column ui red">
                Gasoline: ${stateGasInfo?.gasoline}
              </div>
              <div className="column ui blue">
                MidGrade: ${stateGasInfo?.midGrade}
              </div>
              <div className="column ui green">
                Premium: ${stateGasInfo?.premium}
              </div>
              <div className="column ui yellow">
                Diesel: ${stateGasInfo?.diesel}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
