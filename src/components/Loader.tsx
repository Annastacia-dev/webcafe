const loadingPhrases = [
  'Hold on tight! The hamsters are warming up.',
  'Just counting the pixels, one by one.',
  'Loading... because impatience is a virtue.',
  "Tickling the interweb's funny bone.",
  "While you wait, here's a joke: Why did the computer catch a cold? It had too many windows open!",
  'Loading... as slow as a sloth on a Sunday stroll.',
  'Brace yourself, unicorns are aligning the bits.',
  'Just a moment, our hamster is doing squats.',
  "Loading... because the internet's got dad jokes too.",
  "Hold your horses; we're just wrangling some wild code.",
  'Loading... faster than a snail in a salt race.',
  "In the meantime, why don't you practice your air guitar skills?",
  'Loading... because good things come to those who wait.',
  "Our website's getting dressed for success, one pixel at a time.",
  "Just chill, we're making cyber magic happen.",
  'Our internet gerbils are spinning their wheels for you.',
  'Loading... because even cyberspace needs a coffee break.',
  'While you wait, imagine penguins in tuxedos tap dancing.',
];

const randomPhrase =
  loadingPhrases[Math.floor(Math.random() * loadingPhrases.length)];

const Loader = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-12">
      <div className="flex justify-center items-center gap-4">
        <div className="animate-spin rounded-full h-4 w-4 border-black border-2"></div>
        <div className="animate-spin rounded-full h-4 w-4 border-black border-2"></div>
        <div className="animate-spin rounded-full h-4 w-4 border-black border-2"></div>
      </div>
      <p>{randomPhrase}</p>
    </div>
  );
};

export default Loader;
