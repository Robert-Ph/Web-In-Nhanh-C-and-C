// ui-admin/src/pages/home/Home.tsx
import "./home.scss"
import TopBox from "../../components/topbox/TopBox.tsx";
import ChartBox from "../../components/chartBox/ChartBox.tsx";
import {
    barChartBoxRevenue,
    barChartBoxVisit,
    chartBoxConversion,
    chartBoxProduct,
    chartBoxRevenue,
    chartBoxUser
} from "../../data.ts";
import BarChartBox from "../../components/barChartBox/BarChartBox.tsx";
import PieChartBox from "../../components/pieCartBox/PieChartBox.tsx";
import BigChartBox from "../../components/bigChartBox/BigChartBox.tsx";

const Home = () =>{
    return (
        <div className="home">
            <div className="box box1">
                <TopBox/>
            </div>
            <div className="box box2">
                <ChartBox {...chartBoxUser}/>
            </div>
            <div className="box box3">
                <ChartBox {...chartBoxProduct}/>
            </div>
            <div className="box box4">
                <PieChartBox {...PieChartBox}/>
            </div>
            <div className="box box5">
                <ChartBox {...chartBoxConversion}/>
            </div>
            <div className="box box6">
                <ChartBox {...chartBoxRevenue}/>
            </div>
            <div className="box box7">
                <BigChartBox {...BigChartBox}/>
            </div>
            <div className="box box8">
                <BarChartBox {...barChartBoxVisit}/>
            </div>
            <div className="box box9">
                <BarChartBox {...barChartBoxRevenue}/>
            </div>
        </div>
    )
}

export default  Home