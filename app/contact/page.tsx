import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <section className="text-white px-4 py-8 max-w-7xl mx-auto justify-between flex flex-col md:flex-row">
      <div className="w-1/2">
        <div className="max-w-sm grid gap-y-4">
          <p>
            For inquiries about sessions and pricing fill out the form and
            someone will get back to you.
          </p>
          <a href="mailto:">john@email.com</a>
        </div>
      </div>
      <div className="w-1/2">
        <form className="grid gap-y-8 w-full max-w-lg">
          <div className="grid gap-y-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="bg-transparent text-white border-b border-b-white"
              placeholder="John Doe"
            />
          </div>
          <div className="grid gap-y-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="bg-transparent text-white border-b border-b-white"
              placeholder="john@doe.com"
            />
          </div>
          <div className="grid gap-y-2">
            <label htmlFor="">Message</label>
            <textarea
              name=""
              id=""
              cols={30}
              rows={5}
              className="bg-transparent text-white border-b border-b-white resize-none"
              placeholder="Hi!"
            ></textarea>
          </div>
          <Button
            type="submit"
            className="bg-white text-black rounded-none hover:bg-gray-400"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
