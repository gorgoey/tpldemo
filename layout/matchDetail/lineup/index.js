import HomeLineup from './home.js'
import AwayLineup from './away.js'
import Pitch from './pitch'
import React, { useState } from 'react'
import Link from "next/link"
import { withRouter } from "next/router"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Lineup = ({ router }) => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <Tabs className="block lg:hidden" selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                <TabList className="text-center mt-5">
                    <Tab className="tab-lineup border-2 border-red-600 inline-block px-4 py-2 font-halftime">
                        Home
                    </Tab>
                    <Tab className="tab-lineup border-2 border-red-600 inline-block focus:bg-red-700 focus:text-white px-4 py-2 font-halftime">
                        Pitch
                    </Tab>
                    <Tab className="tab-lineup border-2 border-red-600 inline-block px-4 py-2 font-halftime">
                        Away
                    </Tab>
                </TabList>
                <TabPanel>
                    <HomeLineup></HomeLineup>
                </TabPanel>
                <TabPanel className="relative">
                    <Pitch></Pitch>
                </TabPanel>
                <TabPanel>
                    <AwayLineup></AwayLineup>
                </TabPanel>
            </Tabs>

            <div className="hidden lg:grid lg:grid-cols-3 gap-4">
                <HomeLineup></HomeLineup>
                <Pitch></Pitch>
                <AwayLineup></AwayLineup>
            </div>
        </div>
    )
}

export default withRouter(Lineup)