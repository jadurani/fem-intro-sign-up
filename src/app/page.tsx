import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-screen flex items-center justify-center bg-red">
      <section className="flex flex-col desktop:flex-row m-8">
        <section className="text-white">
          <h1 className="font-bold text-[28px] desktop:text-[50] text-center desktop:text-left">
            Learn to code by watching others
          </h1>
          <p className="py-8">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.{" "}
          </p>
        </section>

        <section>
          {/* banner */}
          <div className="text-white p-4 text-center w-full bg-purple rounded-md">
            <span className="font-bold text-[15px]">Try it free 7 days</span>{" "}
            then $20/mo. thereafter
          </div>
          {/* form */}
        </section>
      </section>
    </main>
  );
}
