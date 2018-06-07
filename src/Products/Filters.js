import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const value = e.target[e.target.type === "checkbox" ? "checked" : "value"]
    const name = e.target.name;

    this.props.onFilter({
      [name]: value
    });
  }
  render() {
    return (

      <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-offset-4 is-4">
                  <form>
                       <div class="control">
                        <input
                          class="input"
                          type="text"
                          placeholder="Search..."
                          value={this.props.filterText}
                          name="filterText"
                          onChange={this.handleChange}
                        />
                        </div>
                        <div class="control">
                         <label class="checkbox">
                            <input
                              type="checkbox"
                              checked={this.props.inStockOnly}
                              name="inStockOnly"
                              onChange={this.handleChange}
                            />
                            &nbsp;
                            Only show products in stock
                         </label>
                       </div>
                  </form>
                 </div>
              </div>
        </div>
      </section>
    );
  }
}

export default Filters;