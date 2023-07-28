import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { hero } from "../constants"
import { faStar } from "@fortawesome/free-solid-svg-icons"

const Hero = ({ toggle, filteredHero }) => {
    return (
        <section className={`w-full max-w-[1400px] h-full flex flex-col items-center justify-center ${toggle ? "bg-[rgba(0,0,0,0.5)]" : ""}`}>
            <div className='sm:w-[85%] w-[95%] flex justify-between items-center my-4'>
                <h2 className='font-bold font-poppins text-lg'>Stays in Finland</h2>
                <p className="font-poppins">{filteredHero.length === 1 ? "1 stay" : filteredHero.length > 9 ? `9+ stays` : `${filteredHero.length} stays`}</p>
            </div>
            
            <div className='sm:w-[85%] w-[95%] flex -z-[1] md:gap-0 gap-3 md:justify-between justify-center flex-wrap'>
                {/* hanya indeks 0-8 yang diambil sebagai tampilan pertama */}
                {filteredHero.slice(0,9).map((her) => (
                    <div key={her.id} className="mb-8">
                        <img src={her.img} alt={her.title} width={380} className="rounded-3xl"/>
                        <div className="mt-4">
                            {/* Superhost sd. rating */}
                            <div className="flex flex-wrap justify-between items-center">
                                {hero.superhost && <span className="py-1 border-black rounded-full font-bold font-poppins text-sm px-2 sm:px-3 tracking-wide border-2">SUPER HOST</span>}
                                <p className="font-poppins py-1 text-sm text-[#B2B2B2]">{her.type}</p>
                                <p className="font-poppins py-1 text-[#B2B2B2] text-sm">{her.beds !== null ? `• ${her.beds} beds` : ""}</p>
                                <span className="flex flex-row py-1 items-center gap-1 mr-2">
                                    <p className="font-poppins">{her.rating}</p>
                                    <FontAwesomeIcon icon={faStar} className="text-[#EB5757] relative -top-[1.2px]"/>
                                </span>
                            </div>
                            <h2 className="font-bold font-poppins tracking-wide mt-1">{her.title}</h2>
                        </div> 
                    </div>
                ))}
            </div>
            <span className="font-poppins -z-[1] mx-auto text-sm mt-10 mb-5 text-[#909090]">created by <span className="font-bold font-poppins text-[#909090]">YRahmadani</span> - devChallenges.io</span>
        </section>
    )
}

export default Hero