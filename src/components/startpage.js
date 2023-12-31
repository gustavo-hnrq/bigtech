import img1 from '../images/img1.svg'
import img2 from '../images/img2.svg'
import git from '../images/github.svg'
import Card from './card'
import { Fade } from 'react-awesome-reveal';
import { TypeAnimation } from 'react-type-animation';


function Startpage() {
    return(
        <div>
            {/* O efeito de fade faz parte da biblioteca {react-awesome-reveal} que está
           com um atraso de 100, sua direção será para cima e o feito ira acontecer apenas uma vez . É aplicado a todos os elementos filhos. */}
            <Fade delay={100} cascade damping={1} direction="up" triggerOnce={true}>

            <section>
                    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 ">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
                            <div className="lg:py-24">
                                <h2 className='font-bold mb-5 text-lg text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-blue-500'>TECNOLOGIA</h2>
                                <h1 className="text-7xl font-bold mb-7 text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-blue-500 max-sm:text-5xl">O que são Big Techs?</h1>
                                <p className="mt-4 text-gray-600 text-lg">
                                As big techs são grandes empresas de tecnologia que desempenham um papel fundamental na nossa vida digital. 
                                Elas são conhecidas por sua influência global e pelos produtos e serviços inovadores que oferecem. Essas empresas
                                têm uma enorme presença na internet e em muitos aspectos da tecnologia moderna.
                                </p>
                            </div>
                            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-1">
                                <img
                                src={img1}
                                className="absolute w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                <hr className='mx-auto max-w-screen-xl' />
            </section>

            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="lg:py-24 lg:order-2">
                            <h2 className="text-7xl font-bold mt-10 text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-blue-500 mb-7 max-sm:text-5xl">Qual a sua importância?</h2>
                            <p className="mt-4 text-gray-600 text-lg">
                            As big techs são essenciais devido à sua inovação tecnológica, facilitação da conexão global, impacto na economia digital,
                            acesso à informação e influência global. Elas criam produtos que melhoram nossas vidas, conectam pessoas, impulsionam a economia,
                            fornecem acesso à informação e têm influência global. 
                            </p>
                        </div>
                        
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-1">
                            <img
                            src={img2}
                            className="absolute h-full w-full"
                            />
                        </div>
                    </div>
                </div>
                <hr className='mx-auto max-w-screen-xl' />
            </section>

            </Fade>

            <section className='mb-3'>
                <div className='mx-auto max-w-screen-xl text-center mt-10'>
                    <h1 className="text-7xl font-bold text-cyan-950 max-sm:text-3xl">As principais Big Techs</h1>
                    <div>
                        {/* O <TypeAnimation> faz parte da biblioteca {react-type-animation} que foi importada e significa que todos 
                        os textos que estão na propriedade sequence= terão o efeito de texto animado com 3 segundos de delay entre cada texto.
                        As propriedades speed, deletionSpeed e repeat são adicionais dessa biblioteca e já são autoexplicativos.
                        */}
                        <TypeAnimation className='ml-5 mr-5 font-bold text-7xl text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-blue-500'
                        sequence={[
                        "Apple",
                        3000,
                        "Microsoft",
                        3000,
                        "Google",
                        3000, 
                        "Meta", 
                        3000,
                        "Samsung", 
                        3000,
                        "Sony",
                        3000,
                        ]}
                        speed={1}
                        deletionSpeed={1}
                        repeat={Infinity}
                        />
                    </div>
                </div>
                <div className="mx-auto max-w-screen-xl sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                    <Card />
                </div>
            </section>

            <footer className="bg-cyan-950 shadow">
                <div className="mx-auto max-w-screen-xl w-full p-10 py-12">
                <Fade delay={1e2} cascade damping={1e-1} direction='up'>
                    {/* O efeito de fade-in faz parte da biblioteca {react-awesome-reveal} que está
                    com um atraso e sua direção será para cima. É aplicado a todos os elementos filhos. */}
                    <div className="sm:flex sm:items-center sm:justify-between flex-wrap">
                        <a href="https://github.com/gustavo-hnrq/bigtech" className="flex items-center self-center">
                            <img src={git} className="h-8 mr-3"/>
                            <span className="self-center text-1xl font-medium whitespace-nowrap text-white mr-5">BigTech.com</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 sm:mt-2">
                            <li>
                                <a href="https://github.com/gustavo-hnrq" className="mr-4 hover:underline md:mr-6 ">Gustavo Henrique</a>
                            </li>
                            <li>
                                <a href="https://github.com/MarquesGusta" className="mr-4 hover:underline md:mr-6">Gustavo Marques</a>
                            </li>
                            <li>
                                <a href="https://github.com/joaonishikawa" className="mr-4 hover:underline md:mr-6 ">João Nishikawa</a>
                            </li>
                            <li>
                                <a href="https://github.com/Kaique-William" className="mr-4 hover:underline md:mr-6 ">Kaique William</a>
                            </li>
                            <li>
                                <a href="https://github.com/MelissaaGomes" className="hover:underline">Melissa Gomes</a>
                            </li>
                        </ul>
                    </div>
                    </Fade>
                </div>
            </footer>
        </div>
    );
}

export default Startpage
