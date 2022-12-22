export function MainFrame() {
    return (
        //Background
        <div className="bg-[#262526] h-[89vh] w-[98vw] m-5 mt-24 rounded-b-[50px] static">
            {/* Title */}
            <div className="bg-[#262526] w-[50%] h-[100px] mx-[25%] rounded-[50px] absolute -mt-[90px]">
                <h1 className="text-center text-7xl text-white font-['Bokor'] pt-4">
                    Heroyi's NoteBook
                </h1>
            </div>
            {/* Menu */}
            <div className="bg-[#262526] rounded-full absolute -mt-10 px-6 hover:cursor-pointer">
                <h1 className="text-white text-7xl font-['Bokor'] text-center"> = </h1>
            </div>
            {/* Logo */}
            <div className="bg-[#262526] rounded-full absolute -mt-12 px-7 py-3 right-[18px]">
                <h1 className="text-white text-6xl font-['Bokor'] text-center"> S </h1>
            </div>
        </div>
    );
}
