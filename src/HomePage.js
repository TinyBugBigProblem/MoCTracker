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
                    <h1>Welcome to Legislation Tracker!</h1>

                    <div className="Intro-rightCol">
                        <p>The purpose of "Le" Tracker is to keep track of recent legislations that have been
                            proposed or passed in Congress and the sponsors who have made the decision
                            to endorse those bills.
                        </p>
                        <p>
                            The way my website was supposed to work was that it would be like an community driven
                            database and search engine where registered users would be able to look up legislations
                            and edit or delete relevant information, as well as use it as a resource to find recent
                            legislations and the relevant members who endorsed them - to help make decisions on whether
                            they were acting in a way that was beneficial to their constituents or the United States.
                        </p>
                        <p>
                            This site is run off of React and a major library that I used in deploying this website is 
                            gh-pages because I could not get React to work off the itpwebdev.com site, which also caused
                            some issues because Github doesn't allow for running php scripts off their website. I managed
                            to get the registration page to work, however because itpwebdev.com does not allow for cor 
                            requests I wasn't able to get the search page completely functional.
                        </p>
                        <p>
                            The data is coming from https://www.congress.gov, and I used made a php file to parse the
                            results from the files retrieved from the searches made on that website. This file not only 
                            parses the date retrieved but makes sql calls to my database and saves the results there.
                            I was also planning on writing a web crawlers to retrieve more specific information on Senate
                            and House of Representative members but because of other finals I did not have the time to complete them.
                        </p>
                        <p>
                            Here is the database that I used. While I could have normalized the tables more, the way that the
                            data was parsed much of the data was already organized in such a way that didn't need to be normalized. 
                            However, data that could have been normalized better would be the Congress(congress_ID) in place for 
                            each bill and the sponsors for each bill (legislation_sponsors). 
                            <img src="database.png" alt="Database"/>
                        </p>
                        <p>
                            The extras that I used was primarily the data parser for the search queries off of congress.gov, named
                            "csvFileParser.php" - in the public folder of the root directory. This uses an API call to a file which then
                            parses the returned information into a json format. Which then goes through every result individually and 
                            takes the relevant information and sends it to the database through a series of sql calls. 
                            I was also going to make a webcrawler that would occassionally be called by the website to go through the
                            congress.gov website and update my website with recent results. However this could not be completed in time,
                            but I'll include it in the public folder as well, it's named "crawler.php". 
                            I also made a couple animated images that rotate on the website banner, using purely css. They just spin 
                            360 degress but I thought it would be a fun addition to the website.                            
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

                    <div className="recentEvents">
                        {/* Recent Nominations*/}
                        {/*<div className="nominations">
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
                        </div>*/}

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

                         {/*Recent treaties
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
                        </div>*/}
                    </div>
                </div>
        );
    }
}

export default HomePage;
