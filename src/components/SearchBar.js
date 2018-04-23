import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class SearchBar extends Component {
    state = {
        term: ""
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.runSearch(term);
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Input 
                        type="text" 
                        placeholder="Type search term here" 
                        value={this.state.term}
                        onChange={(event) => this.onInputChange(event.target.value)}
                    />
                </FormGroup>
            </Form>            
        )
    }

}

export default SearchBar;