import React from "react";
import VideoCarousel from "../components/VideoCarousel"; // Adjust the path as needed

export default function About() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About <span style={{ fontFamily: 'Dancing Script, cursive' }}>MoodMuse</span>
          </h1>

          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to MoodMuse! Created by Harshey Soi,
              MoodMuse is more than just another platform—it's your sanctuary for sharing thoughts, insights, and fostering a community dedicated to wellbeing.
              Step into a space where mental health, mindfulness, and community engagement converge.
            </p>

            <p>
              Our platform offers a diverse range of articles, tutorials, and discussions
              on topics from mindfulness practices to emotional resilience. 
              Whether you're a wellness enthusiast or just beginning your journey towards mental health, MoodMuse is your ultimate destination for learning, sharing, and enhancing your wellbeing.
            </p>

            <p>
              Join us on this journey towards a healthier, happier you!
            </p>
          </div>
        </div>
      </div>

      {/* Add the VideoCarousel component here */}
      <div className='max-w-4xl mx-auto'>
        <VideoCarousel/>
      </div>
    </div>
  );
}
