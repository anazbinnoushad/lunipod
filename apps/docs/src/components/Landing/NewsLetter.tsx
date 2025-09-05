import {Button} from "../ui/button";
import {Input} from "../ui/input";

const NewsLetter = () => {
  return (
    <section className="w-full py-16 md:py-30 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-balance">
          Stay Updated.
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Design, Delivered.
        </h2>
        <p className="text-gray-400 text-base sm:text-lg font-light text-center leading-relaxed px-4 text-pretty">
          Join our newsletter for handpicked insights, release updates, and
          design inspiration direct to your inbox. Never spammy.
        </p>
        <div className="w-full flex justify-center items-center px-4">
          <form className="w-full max-w-sm flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1"
            />
            <Button type="submit" className="w-full sm:w-auto">
              Subscribe
            </Button>
          </form>
        </div>
        <p className="text-xs text-gray-500 mt-2">No clutter. Just quality.</p>
      </div>
    </section>
  );
};

export default NewsLetter;
