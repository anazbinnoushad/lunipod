import {Button} from "../ui/button";
import {Input} from "../ui/input";

const NewsLetter = () => {
  return (
    <section className="w-full py-30 flex flex-col items-center justify-center">
      <div className="max-w-md w-full text-center space-y-6">
        <h2 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Stay Updated.
          <br />
          Design, Delivered.
        </h2>
        <p className="text-gray-400 text-lg font-light text-center leading-relaxed -mx-10">
          Join our newsletter for handpicked insights, release updates, and
          design inspiration direct to your inbox. Never spammy.
        </p>
        <div className="w-full flex justify-center items-center">
          <form className="w-3/4 flex flex-col sm:flex-row gap-3">
            <Input type="email" required placeholder="Your email address" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
        <p className="text-xs text-gray-500 mt-2">No clutter. Just quality.</p>
      </div>
    </section>
  );
};

export default NewsLetter;
