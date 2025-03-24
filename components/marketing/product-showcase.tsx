import Image from "next/image";
import appScreen from "@/public/images/app-screen.png";

export const ProductShowcase = () => {
    return(
        <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] lg:py-24">
            <div className="contanier">
                <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">Intuitive interface</h2>
                <div className="max-w-xl mx-auto">
                    <p className="text-xl text-center text-white/70 mt-5">Celebraty the joy of accomplishment with an app dsingned to track your progres</p>
                </div>
                <Image src={appScreen} alt="the product screenshot" className="m-14"/>
            </div>

        </div>
    )
}; 