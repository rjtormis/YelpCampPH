import landing from "@/assets/landing-1.jpg";
import landing2 from "@/assets/landing-2.jpg";
import landing3 from "@/assets/landing-3.jpg";
import guide1 from "@/assets/guide1.jpg";
import guide2 from "@/assets/guide2.jpg";
import guide3 from "@/assets/guide3.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Landing() {
  return (
    <>
      <div className="my-8 h-[700px] relative">
        <img
          src={landing}
          alt="Landing"
          className="w-full max-w-full max-h-full object-cover rounded-xl "
        />
        <p className="absolute bottom-[40%] left-[25%] text-white font-bold text-2xl">
          Discover the great outdoors with YelpCampPH - Your ultimate guide to adventure under the
          stars!
        </p>
      </div>

      <div className=" my-32 flex">
        <div className="w-[60%]">
          <p className="">
            Explore breathtaking natural wonders that soothe the soul and ignite the senses. Then,
            treat your taste buds to a culinary adventure, savoring the flavors of the region amidst
            a tranquil and inviting atmosphere. Whether you seek relaxation, exploration, or simply
            a moment of culinary bliss, our destination offers an unforgettable escape where every
            moment is infused with magic.
          </p>
        </div>

        <div className="my-auto">
          <p className="font-bold text-4xl text-center">
            Indulge in Heritage, Nature, and Flavor, Wrapped in Serenity
          </p>
        </div>
      </div>

      <div className="flex my-32">
        <div>
          <h1 className=" text-4xl font-bold">Our Places With The Best Nature</h1>
          <p className=" my-4">
            We have many places that become the base for our camping activities, with beautiful and
            unique natural scenery and various types of activities carried out
          </p>
        </div>

        <Carousel className="w-full h-[600px] mx-8 ">
          <CarouselContent>
            <CarouselItem>
              <img src={landing2} alt="" className="w-full h-[600px] rounded-xl" />
            </CarouselItem>
            <CarouselItem>
              <img src={landing3} alt="" className="w-full h-[600px] rounded-xl" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="my-32">
        <h1 className="text-4xl font-bold m-auto text-center">How Was Their Experience</h1>
        <p className="text-center my-4">
          How do they feel after doing camping activities to fill their time from life and problems
          in the city.
        </p>

        <div className="flex gap-8 my-16">
          <Card>
            <CardContent>
              <CardDescription>
                <div className="p-8 m-auto">
                  <p className="  text-lg text-center">
                    My boredom from working in the office can be paid off with natural views and
                    more things
                  </p>
                  <Avatar className="w-[140px] h-[140px] mx-auto my-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="text-xl text-center">Victor Bladimir</p>
                  <p className="text-center">Designer</p>
                </div>
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <CardDescription>
                <div className="p-8 m-auto">
                  <p className="  text-lg text-center">
                    My boredom from working in the office can be paid off with natural views and
                    more things
                  </p>
                  <Avatar className="w-[140px] h-[140px] mx-auto my-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="text-xl text-center">Victor Bladimir</p>
                  <p className="text-center">Designer</p>
                </div>
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <CardDescription>
                <div className="p-8 m-auto">
                  <p className="  text-lg text-center">
                    My boredom from working in the office can be paid off with natural views and
                    more things
                  </p>
                  <Avatar className="w-[140px] h-[140px] mx-auto my-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="text-xl text-center">Victor Bladimir</p>
                  <p className="text-center">Designer</p>
                </div>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="">
        <h1 className="text-4xl font-bold">Knowledge Articles About Camping</h1>
        <p className="my-4">
          Not only preparing equipment and other materials, camping also needs to Knowledge
        </p>

        <div className="flex gap-8 my-8">
          <div>
            {/* https://www.rei.com/learn/expert-advice/camping-for-beginners.html */}
            <img src={guide1} alt="" className="w-full h-[360px] rounded-xl" />
            <p className="my-4 font-bold text-xl">Camping for Beginners</p>
            <p>
              The ultimate essential for beginner campers is an experienced outdoorsy person to help
              you.{" "}
            </p>
          </div>

          {/* https://www.nytimes.com/2023/08/29/travel/tips-for-beginning-campers.html */}
          <div>
            <img src={guide2} alt="" className="w-full h-[360px] rounded-xl" />

            <p className="my-4 font-bold text-xl">How to Go Camping: A Beginner’s Guide</p>
            <p>
              For first-time campers, spending the night outside presents a planning wilderness,
              including figuring out what to bring. The following are tips from experts in getting
              started.
            </p>
          </div>

          {/* https://www.washingtonpost.com/travel/tips/camping-tips-gear-cooking-solo/ */}
          <div>
            <img src={guide3} alt="" className="w-full h-[360px] rounded-xl" />
            <p className="my-4 font-bold text-xl">Your guide to planning a camping trip</p>
            <p>
              If you’ve never camped before, start with the basics: Pick a campsite based on your
              needs, borrow some gear and test setting up your tent before you leave.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
