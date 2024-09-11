

export function About(){

    return(
        <section className="w-full h-80 flex flex-col justify-center items-center">
            <div className="w-full max-w-screen-xl flex flex-col justify-center items-center">
                <h1 className="text-3xl mb-6">About</h1>
                <div className="flex justify-around items-center w-full ">
                    <img className=" size-72" src="/img/Who.png" alt="who" />
                    <p>
                    I'm a Computer Engineering student, nerd and passionate about art. <br />
                    I started my adventure in the world of digital arts in 2017 after completing <br />
                    my course at Npix. Since then, I've dedicated myself to improving my work, <br />
                    always looking for opportunities to learn more and show what I know.</p>
                </div>
            </div>
            
        </section>
    )
}