import React, { Component } from 'react';
// Uses material-ui to provide mateirla design components
class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            recentNom: [
                {title: 'Test1',
                    id: 1},
                {title: 'Test2',
                    id: 2},
            ],
            recentBill: [],
            recentTreat: []
        };
    }
    render() {
        return (
                <div className="HomeBody">
                    <h1>Welcome to MoC Tracker!</h1>

                    <div className="Intro-rightCol">
                        <p>The purpose of MoC Tracker is to keep track of Members of Congrees
                            and their decisions and actions during their office
                        </p>
                        <p>
                            Hopefully this application will help in making your decisions on reelecting
                            officials into office and will provide you with the details you need.
                        </p>
                    </div>

                    {/* This is where a relevant quote will go*/}
                    <div className="AppQuote">
                        <p>
                            “If men were angels, no government would be necessary.
                            If angels were to govern men, neither external nor internal controls on government would be necessary.
                            In framing a government which is to be administered by men over men, the great difficulty lies in this:
                            you must first enable the government to control the governed; and in the next place oblige it to control itself.”
                        </p>
                        <p>
                            - James Madison, Federalist Papers Nos. 10 and 51
                        </p>
                    </div>

                    {/* Short list of recent events - three columns*/}
                    <div className="recentEvents">
                        {/* Recent Nominations*/}
                        <div className="nominations">
                            <h4>Recent Nominations</h4>
                            <table className="table">
                                <tr>
                                    <th>Name</th>
                                    <th>Committee</th>
                                </tr>
                            {this.state.recentNom.map((nom) =>
                                <tr key={nom.id}>
                                    <td>{nom.title}</td>
                                    <td>{nom.committee}</td>
                                </tr>
                             )}
                            </table>
                        </div>

                        {/* Recent Bills*/}
                        <div className="bills">
                            <h4>Recent Legislation</h4>
                            <table className="table">
                                <tr>
                                    <th>Title</th>
                                    <th>Date</th>
                                </tr>
                                {this.state.recentBill.map((bill) =>
                                    <tr key={bill.id}>
                                        <td>{bill.title}</td>
                                        <td>{bill.date}</td>
                                    </tr>
                                )}
                            </table>
                        </div>

                        {/* Recent treaties*/}
                        <div className="treaties">
                            <h4>Recent Treaties</h4>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th>Topic</th>
                                        <th>Latest Action Date</th>
                                    </tr>
                                    {this.state.recentTreat.map((treaty) =>
                                        <tr key={treaty.id}>
                                            <td>{treaty.topic}</td>
                                            <td>{treaty.date}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        );
    }
}

export default HomePage;
