import React from "react";
import { ContentWrapper, ProjectHeading } from "components/Index";

function Illustration(props) {
  return (
    <ContentWrapper>
      <ProjectHeading
        title="Illustration"
        description="I am a huge fan of illustration. Sometimes I find opportunities to incorporate it into product work, other times it is pure fun. Enjoy!"
        roles={["Vector", "Digital Art", "3D"]}
      />
      <div className="grid gap-4 mt-10 sm:grid-cols-2 place-items-center lg:grid-cols-3 auto-rows-max">
        <img
          className="rounded-xl"
          src={
            process.env.PUBLIC_URL + "/img/illustrations/Kitchen-Lighting.jpg"
          }
          alt="A 3D rendering of an isometric kitchen scene"
        />
        <img
          className="rounded-xl"
          src={process.env.PUBLIC_URL + "/img/illustrations/got.jpg"}
          alt="Jon Snow Didn't kill the Night King"
        />
        <img
          className="rounded-xl"
          src={process.env.PUBLIC_URL + "/img/illustrations/hellyeah.jpg"}
          alt="Hell Yeah Typography"
        />
        <img
          className="rounded-xl"
          src={process.env.PUBLIC_URL + "/img/illustrations/cruel.jpg"}
          alt="Inktober 2019 Illustration. Cruel: The Iron Bull"
        />
        <img
          className="rounded-xl"
          src={process.env.PUBLIC_URL + "/img/illustrations/chicken.jpg"}
          alt="Inktober 2019 Illustration: Sacrificial chicken"
        />
        <img
          className="rounded-xl"
          src={process.env.PUBLIC_URL + "/img/illustrations/exhausted.jpg"}
          alt="Illustration of a clock with a dagger through it"
        />
        <img
          className="rounded-xl"
          src={process.env.PUBLIC_URL + "/img/illustrations/poison.png"}
          alt="Illustration of a bottle of poison"
        />
        <img
          className="rounded-xl"
          src={process.env.PUBLIC_URL + "/img/illustrations/admiral.jpg"}
          alt="Illustration of Admiral Ackbar. It's a trap!"
        />
        <img
          className="rounded-xl"
          src={process.env.PUBLIC_URL + "/img/illustrations/astronaut.png"}
          alt="Beer label illustration of an astronaut attached to a broken piece of their ship"
        />
        <img
          className="rounded-xl"
          src={process.env.PUBLIC_URL + "/img/illustrations/bbc.jpg"}
          alt="Big Bird Crew logo: Big Bird wearing a beer helmet"
        />
        <img
          className="rounded-xl"
          src={process.env.PUBLIC_URL + "/img/illustrations/atat.jpg"}
          alt="Star Wars ATAT illustration with a sun in the background"
        />
        <img
          className="rounded-xl"
          src={process.env.PUBLIC_URL + "/img/illustrations/witchinghour.jpg"}
          alt="Illustration of an evil night stand. Clock reads 3:00am... the witching hour"
        />
        <img
          className="rounded-xl"
          src={process.env.PUBLIC_URL + "/img/illustrations/spacedout.jpg"}
          alt="Illustration of an astronaut making it all the way to outer space and only caring about their phone"
        />
        <img
          className="rounded-xl"
          src={process.env.PUBLIC_URL + "/img/illustrations/launch.png"}
          alt="A happy looking rocket"
        />
        <img
          className="rounded-xl"
          src={process.env.PUBLIC_URL + "/img/illustrations/LZ_characters.jpg"}
          alt="Redesigned reports page"
        />
        <img
          className="rounded-xl"
          src={process.env.PUBLIC_URL + "/img/illustrations/Arcade.jpg"}
          alt="Redesigned reports page"
        />
      </div>
    </ContentWrapper>
  );
}

export default Illustration;
