import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-screen flex items-center justify-center bg-red">
      <section className="flex flex-col desktop:flex-row m-8 container max-w-6xl gap-4">
        <section className="text-white desktop:basis-1/2">
          <h1 className="font-bold text-[28px] desktop:text-[50px] text-center desktop:text-left desktop:leading-tight">
            Learn to code by watching others
          </h1>
          <p className="py-8">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.{" "}
          </p>
        </section>

        <section className="desktop:basis-1/2">
          {/* banner */}
          <div className="text-white p-4 text-center w-full bg-purple rounded-md my-6">
            <span className="font-bold text-[15px]">Try it free 7 days</span>{" "}
            then $20/mo. thereafter
          </div>
          {/* form */}
          <div className="rounded-md bg-white p-4">
            <form></form>

            <button className="bg-green w-full rounded-md text-center py-4 uppercase text-white text-[15px] font-semibold tracking-wider">
              claim your free trial
            </button>
            <div className="text-[11px] font-medium text-gray text-center py-2">
              By clicking the button, you are agreeing to our{" "}
              <a className="text-red font-bold">Terms and Services</a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
