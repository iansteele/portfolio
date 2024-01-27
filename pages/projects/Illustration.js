import React from "react";
import Image from "next/image";

import {
  PageWrapper,
  ProjectWrapper,
  ProjectHeading,
  Project,
} from "../../components/ComponentIndex";

function Illustration(props) {
  const project = Project.find((p) => p.title === "Illustrations");

  return (
    <PageWrapper>
      <ProjectWrapper>
        <ProjectHeading project={project} />
        <div className="grid gap-4 mt-10 sm:grid-cols-2 place-items-center lg:grid-cols-3 auto-rows-max">
          <Image
            className="rounded-xl"
            src={"/img/illustrations/bullet-bill.jpeg"}
            width="800"
            height="800"
            alt="A 3D low-poly rendering of Bullet Bill flying past Mario pipes created by Ian Steele"
          />
          <Image
            className="rounded-xl"
            src={"/img/illustrations/marsattacks.jpeg"}
            width="800"
            height="800"
            alt="A procreate illustration of the lead Alien from Mars Attacks created by Ian Steele"
          />
          <Image
            className="rounded-xl"
            src={"/img/illustrations/Kitchen-Lighting.jpg"}
            width="800"
            height="800"
            alt="A 3D rendering of an isometric kitchen scene created by Ian Steele"
          />
          <Image
            className="rounded-xl"
            src={"/img/illustrations/got.jpg"}
            width="800"
            height="800"
            alt="Jon Snow Didn't kill the Night King created by Ian Steele"
          />
          <Image
            className="rounded-xl"
            src={"/img/illustrations/hellyeah.jpg"}
            width="800"
            height="800"
            alt="A typography design that reads Hell Yeah. Made in procreate by Ian Steele"
          />
          <Image
            className="rounded-xl"
            src={"/img/illustrations/river.jpg"}
            width="800"
            height="800"
            alt="A 3D rendering of an isometric river road created by Ian Steele"
          />
          <Image
            className="rounded-xl"
            src={"/img/illustrations/cruel.jpg"}
            width="800"
            height="800"
            alt="Inktober 2019 Illustration. Cruel: The Iron Bull. Created by Ian Steele"
          />
          <Image
            className="rounded-xl"
            src={"/img/illustrations/chicken.jpg"}
            width="800"
            height="800"
            alt="Inktober 2019 Illustration: Sacrificial chicken created by Ian Steele"
          />
          <Image
            className="rounded-xl"
            src={"/img/illustrations/exhausted.jpg"}
            width="800"
            height="800"
            alt="Illustration of a clock with a dagger through it created by Ian Steele"
          />
          <Image
            className="rounded-xl"
            src={"/img/illustrations/poison.png"}
            width="800"
            height="800"
            alt="Illustration of a bottle of poison created by Ian Steele"
          />
          <Image
            className="rounded-xl"
            src={"/img/illustrations/admiral.jpg"}
            width="800"
            height="800"
            alt="Illustration of Admiral Ackbar. It's a trap! created by Ian Steele"
          />
          <Image
            className="rounded-xl"
            src={"/img/illustrations/astronaut.png"}
            width="800"
            height="800"
            alt="Beer label illustration of an astronaut attached to a broken piece of their ship created by Ian Steele"
          />
          <Image
            className="rounded-xl"
            src={"/img/illustrations/bbc.jpg"}
            width="800"
            height="800"
            alt="Big Bird Crew logo: Big Bird wearing a beer helmet created by Ian Steele"
          />
          <Image
            className="rounded-xl"
            src={"/img/illustrations/atat.jpg"}
            width="800"
            height="800"
            alt="Star Wars ATAT illustration with a sun in the background created by Ian Steele"
          />
          <Image
            className="rounded-xl"
            src={"/img/illustrations/witchinghour.jpg"}
            width="800"
            height="800"
            alt="Illustration of an evil night stand. Clock reads 3:00am... the witching hour created by Ian Steele"
          />
          <Image
            className="rounded-xl"
            src={"/img/illustrations/spacedout.jpg"}
            width="800"
            height="800"
            alt="Illustration of an astronaut making it all the way to outer space and only caring about their phone"
          />
          <Image
            className="rounded-xl"
            src={"/img/illustrations/launch.png"}
            width="800"
            height="800"
            alt="A happy looking rocket created by Ian Steele"
          />
          <Image
            className="rounded-xl"
            src={"/img/illustrations/Arcade.jpg"}
            width="800"
            height="800"
            alt="Redesigned reports page created by Ian Steele"
          />
          <Image
            className="rounded-xl"
            src={"/img/illustrations/wu.jpg"}
            width="800"
            height="800"
            alt="A vector illustration of a mask created by Ian Steele"
          />

          <Image
            className="rounded-xl"
            src={"/img/illustrations/sota.jpg"}
            width="800"
            height="800"
            alt="A vector illustration of a glowing radio in the night sky created by Ian Steele"
          />
          <Image
            className="rounded-xl"
            src={"/img/illustrations/LZ_characters.jpg"}
            width="800"
            height="800"
            alt="Fun illustrated characters depicitng a Desk-dog, pencil, and Pearl eraser created by Ian Steele"
          />
        </div>
      </ProjectWrapper>
    </PageWrapper>
  );
}

export default Illustration;
