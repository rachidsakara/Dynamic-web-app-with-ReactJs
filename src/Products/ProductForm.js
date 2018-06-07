import React from 'react';

const RESET_VALUES = {id: '', category: '', price: '', stocked: false, name: ''};

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      product: Object.assign({}, RESET_VALUES),
      errors: {}
    };
  }
  handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState((prevState) => {
      prevState.product[name] = value;
      return { product: prevState.product };
    });
  }
  handleSave(e) {
    this.props.onSave(this.state.product);
    this.setState({
      product: Object.assign({}, RESET_VALUES),
      errors: {}
    });
    e.preventDefault();
  }
  render() {
    return (

      <section>
        <div class="container">
            <div class="columns">
                <div class="column is-offset-4 is-4">
                  <div class="box">
                    <form>
                      <h3>Enter a new product</h3>
                      <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                          <input class="input" type="text" name="name" onChange={this.handleChange} value={this.state.product.name} placeholder="Product name"/>
                            <span class="icon is-small is-right">
                              <i class="fas fa-check"></i>
                            </span>
                        </div>
                      </div>

                      <div class="field">
                        <label class="label">Category</label>
                        <div class="control">
                          <input class="input" type="text" name="category" onChange={this.handleChange} value={this.state.product.category} placeholder="Category name"/>
                        </div>
                      </div>

                      <div class="field">
                        <label class="label">Price</label>
                        <div class="control">
                          <input class="input" type="text" name="price" onChange={this.handleChange} value={this.state.product.price} placeholder="Set the price"/>
                        </div>
                      </div>

                      <div class="field">
                        <div class="control">
                          <label class="checkbox">
                            <input type="checkbox" name="stocked" onChange={this.handleChange} checked={this.state.product.stocked}/>
                             &nbsp;In stock?
                          </label>
                        </div>
                      </div>

                      <div class="field is-grouped">
                        <div class="control">
                          <input class="button is-link" type="submit" value="Save" onClick={this.handleSave}/>
                        </div>
                      </div>

                    </form>
                   </div>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}

export default ProductForm;