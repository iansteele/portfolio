import React from 'react';

function Illustration(props) {
  return (
    <div className="px-6 pt-4 space-y-10">
      <h2 className="text-5xl text-white font-display ">Illustrations</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max">
        <img className="rounded-xl" src={process.env.PUBLIC_URL + "/img/illustrations/got.jpg"} alt="Jon Snow Didn't kill the Night King"/>
        <img className="rounded-xl" src={process.env.PUBLIC_URL + "/img/illustrations/hellyeah.jpg"} alt="Hell Yeah Typography"/>
        <img className="rounded-xl" src={process.env.PUBLIC_URL + "/img/illustrations/cruel.jpg"} alt="Redesigned reports page"/>
        <img className="rounded-xl" src={process.env.PUBLIC_URL + "/img/illustrations/chicken.jpg"} alt="Redesigned reports page"/>
        <img className="rounded-xl" src={process.env.PUBLIC_URL + "/img/illustrations/exhausted.jpg"} alt="Redesigned reports page"/>
        <img className="rounded-xl" src={process.env.PUBLIC_URL + "/img/illustrations/poison.png"} alt="Redesigned reports page"/>
        <img className="rounded-xl" src={process.env.PUBLIC_URL + "/img/illustrations/admiral.jpg"} alt="Redesigned reports page"/>
        <img className="rounded-xl" src={process.env.PUBLIC_URL + "/img/illustrations/astronaut.png"} alt="Redesigned reports page"/>
        <img className="rounded-xl" src={process.env.PUBLIC_URL + "/img/illustrations/bbc.jpg"} alt="Redesigned reports page"/>
        <img className="rounded-xl" src={process.env.PUBLIC_URL + "/img/illustrations/atat.jpg"} alt="Redesigned reports page"/>
        <img className="rounded-xl" src={process.env.PUBLIC_URL + "/img/illustrations/witchinghour.jpg"} alt="Redesigned reports page"/>
        <img className="rounded-xl" src={process.env.PUBLIC_URL + "/img/illustrations/spacedout.jpg"} alt="Redesigned reports page"/>
        <img className="rounded-xl" src={process.env.PUBLIC_URL + "/img/illustrations/launch.png"} alt="Redesigned reports page"/>
        <img className="rounded-xl" src={process.env.PUBLIC_URL + "/img/illustrations/sota.png"} alt="Redesigned reports page"/>
        <img className="rounded-xl" src={process.env.PUBLIC_URL + "/img/illustrations/arcade.jpg"} alt="Redesigned reports page"/>
      </div>
    </div>
  )
}

export default Illustration;
