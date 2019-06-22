import React, {PureComponent} from "react";

const withSelectableItem = (initialSelectedId, onSelect) => (Component) => {
  class WithSelectableItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        selectedId: initialSelectedId
      };

      this._handleSelect = this._handleSelect.bind(this);
    }

    _handleSelect(id) {
      this.setState({
        selectedId: id
      });

      if (typeof onSelect === `function`) {
        onSelect();
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          selectedId={this.state.selectedId}
          onItemSelect={this._handleSelect}
        />
      );
    }
  }

  return WithSelectableItem;
};

export default withSelectableItem;
