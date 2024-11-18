import Image from "next/image";

export const Header = () => {
  return (
    <>
        <section className=" bg-slate-300" >
            <div className="container mx-auto px-4 py-4 ">
                <div className="flex justify-between items-center">
                    <div className="">
                        <Image src="/images/logo.png" width={200} height={50} alt="" />
                    </div>
                    <div className="">
                        <button className="rounded-lg text-lg border-2 border-sky-400 text-sky-400 px-6 py-2 hover:bg-sky-400 hover:text-white font-semibold " >Visit Website</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
