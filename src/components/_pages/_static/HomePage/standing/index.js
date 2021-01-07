import { StandingData } from './data'

export default function Standing() {
  return (
    <div className="w-full">
      <nav className="fixedSlider pt-10 z-10 relative md:mx-5 lg:mx-20 shadow-xl">
        <div className="fixturesAbridgedHeader bg-white rounded-t p-5">
          <header>
            <div className="competition">
              <div className="w-full my-1">
                <img
                  className="w-1/2 mx-auto"
                  src="/static/images/TPLlogo.svg"></img>
              </div>
            </div>
          </header>
        </div>
        <div className="fixturesAbridgedContainer bg-white">
          <div className="embeddableMatchSummary clubSidebarWidget">
            <div className="fixturesAbridged matchListContainer">
              <div className="day font-halftime text-md mb-2 px-2">
                <div>Standing</div>
              </div>
              <div className="table w-full">
                <table className="w-full">
                  <thead className="bg-white text-sm font-halftime">
                    <tr>
                      <th className="w-4">
                        <span>Pos</span>
                      </th>
                      <th className="pl-10 w-4 team">
                        <span>Club</span>
                      </th>
                      <th className="w-4">
                        <span>Pl</span>
                      </th>
                      <th className="w-4">
                        <span>GD</span>
                      </th>
                      <th className="w-4">
                        <span>Pts</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {StandingData.map(
                      ({ s, p, name, pl, gd, pts, imageXS }) => (
                        <tr
                          key={s}
                          className="tableDark font-halftime h-10 border-b-2 border-grey-400 text-md">
                          <td className="pos text-center">
                            <span className="value">{p}</span>
                            <span className="movement none"></span>
                          </td>
                          <td className="team" scope="row">
                            <a className="flex items-center">
                              <span
                                className="badge mr-2"
                                data-widget="club-badge-image"
                                data-size="20">
                                <img className="" src={imageXS} />
                              </span>
                              <span className="font-halftime text-sm">
                                {name}
                              </span>
                            </a>
                          </td>
                          <td className="text-md">{pl}</td>
                          <td className="text-md">{gd}</td>
                          <td className="text-md points">{pts}</td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center px-5 py-2 bg-white rounded-b">
          <a className="btn widget-button font-halftime" href="/fixtures">
            View All<span className="icn arrow-right"></span>
          </a>
        </div>
      </nav>
    </div>
  )
}
