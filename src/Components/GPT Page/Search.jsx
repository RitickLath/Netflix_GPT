import React, { useRef, useState } from "react";

import { openai } from "../../Constants/OpenAI";
// Open AI API Call

const Search = ({ result, setResult }) => {
  const input = useRef();

  async function main(request) {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: request }],
      model: "gpt-3.5-turbo",
    });
    if (chatCompletion?.choices?.[0]?.message?.content) {
      setResult(chatCompletion?.choices?.[0]?.message?.content);
    } else {
      console.log("failed");
      setResult(
        '["The Conjuring", "Dumb and Dumber", "Die Hard", "Inception", "Pulp Fiction", "Iron Man", "Hey Baby"]'
      );
    }
  }

  const searchForInput = () => {
    // Taking user input and storing it in the variable UserRequirement
    const UserRequirement = input.current.value;

    // // Creating the prompt

    const Prompt = `Act as a movie recommendation system and suggest some movies for the query ${UserRequirement}" only give me names of only 15 movies comma seperated like the example result: Don, Gadar, Hero, Sholay, Koi mil gaya, om shanti om, Ek tha tiger`;

    // Pass the prompt to OpenAI to get the best result
    const data = main(Prompt);
  };
  return (
    <div className="w-full flex justify-center mt-4">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mx-4 w-full flex md:flex lg:flex justify-center space-x-3"
        action=""
      >
        <input
          ref={input}
          className="outline-none max-w-[400px] flex-grow px-3 py-3 rounded-sm text-black"
          type="text"
          placeholder="Your idea of Netflix and Chill...."
        />
        <button
          onClick={searchForInput}
          className="bg-[#D9232E] px-4 text-lg font-semibold rounded-sm"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
