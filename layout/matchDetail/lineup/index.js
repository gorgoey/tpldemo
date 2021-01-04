import HomeLineup from './home.js'
import AwayLineup from './away.js'
import Pitch from './pitch'

export default function Lineup() {
    return (
        <div className="grid lg:grid-cols-3 gap-4">
            <HomeLineup></HomeLineup>
            <Pitch></Pitch>
            <AwayLineup></AwayLineup>
        </div>
    )
}