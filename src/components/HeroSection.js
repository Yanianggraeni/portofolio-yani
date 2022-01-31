import Navbar from "./Navbar";

function HeroSection() {
    return (
        <div className="bg-indigo-600">
            <div clasName="container mx-auto">
                <Navbar/>
                <div className="">
                    <h1>Saya seorang front-engineer, back-end egineer, dan juga UI designer</h1>
                    <p>Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI designer</p>
                    <Button/>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
