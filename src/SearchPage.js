import React, { Component } from 'react';
import { Form, Text, TextArea, Radio, RadioGroup, Select, Checkbox } from 'react-form';

// Uses material-ui to provide mateirla design components
class LegislationSearchPage extends Component {
    constructor(){
        super();
        this.state = {
            searchQuery: "",
            searchType: "1",
            results: [
                {
                    id: "1",
                    legislation: "Test Legislation",
                    title: "Test Title",
                    amends: "Test Amends Bill",
                    sponsor: "Test Sponsor",
                    cosponser: "Test Cosponser",
                    date: "66/66/66",
                    latestAction: "Test Latest Action"
                }
            ],
        }
    }
    updateQuery = (e) => {
        this.setState({
            searchQuery: e.target.value.trim(),
        })
    }
    updateType = (e) => {
        this.setState({
            searchType: e.target.value.trim(),
        })
    }

    updateResultsTitle = () => {
        if(this.state.searchType === "1"){
            return "Legislation";
        }
        else if(this.state.searchType === "2"){
            return "Members";
        }
    }

    deleteEntry = (entry) => {

    }

    editEntry = (entry) => {

    }

    displayResults = () => {
        if(this.state.searchType === "1"){
            return(
            <table className="table">
                <tbody>
                    <tr>
                        <th>Delete</th>
                        <th>Edit</th>
                        <th>Legislation</th>
                        <th>Title</th>
                        <th>Amends Bill</th>
                        <th>Sponsor(s)</th>
                        <th>Number of Cosponsers</th>
                        <th>Date of Introduction</th>
                        <th>Latest Action</th>
                    </tr>
                    {this.state.results.map((result) =>
                    <tr key={result.id}>
                        <td className="Delete" onClick={this.deleteEntry(result.legislation)}>
                            Delete
                        </td>
                        <td className="Edit" onClick={this.editEntry(result.legislation)}>
                            Edit
                        </td>
                        <td>
                            {result.legislation}
                        </td>
                        <td>
                            {result.title}
                        </td>
                        <td>
                            {result.amends}
                        </td>
                        <td>
                            {result.sponsor}
                        </td>
                        <td>
                            {result.cosponser}
                        </td>
                        <td>
                            {result.date}
                        </td>
                        <td>
                            {result.latestAction}
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>)
        }
        else if(this.state.searchType === "2"){
            return (
            <table className="table">
                <tr>
                    <th>Name</th>
                    <th>State</th>
                    <th>District</th>
                    <th>Party</th>
                    <th>Terms</th>
                    <th>Details</th>
                </tr>
                {this.state.results.map((result) =>
                    <tr key={result.id}>
                        <td>
                            {result.name}
                        </td>
                        <td>
                            {result.state}
                        </td>
                        <td>
                            {result.district}
                        </td>
                        <td>
                            {result.party}
                        </td>
                        <td>
                            {result.term}
                        </td>
                        <td>
                            {result.url}
                        </td>

                    </tr>
                )}
            </table>)
        }
    }

    render() {
        return (
            <div className="SearchBody">
                {/* Search Form */}
                <h1>Search Form</h1>
                <form>
                    {/* Field for Username */}
                    <label className="half-col">
                        Search:
                        <input value={this.state.searchQuery} onChange={this.updateQuery}/>
                    </label>
                    {/*<label className="half-col">
                        Search Type:
                        <div className="radio">
                            Legislation<input type="radio" name="type"
                               value="1" checked={this.state.searchType === "1"} onChange={this.updateType}/>
                        </div>
                        <div className="radio">
                            Members<input type="radio" name="type"
                               value="2" checked={this.state.searchType === "2"} onChange={this.updateType}/>
                        </div>
                    </label>*/}
                </form>

                {/* Results Box */}
                <div className="results">
                    <h1>{this.updateResultsTitle()} Results</h1>
                    <div className="ResultsContainer">
                        {this.displayResults()}
                    </div>
                </div>
            </div>
        );
    }
}

export default LegislationSearchPage;
