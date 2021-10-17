import { Header, Footer, Scoreboard, MyInfo, StatisticalChart } from "../components"

const HomePage = (props) => {
    return <>
        <div className="container-xl">
            <Header />
            <div className="row mt-4">
                <div className="col-md-6">
                    <MyInfo/>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                    <StatisticalChart/>
                </div>
            </div>
            <Scoreboard className="mt-5"/>
        </div>
        <Footer />
    </>
}

export default HomePage