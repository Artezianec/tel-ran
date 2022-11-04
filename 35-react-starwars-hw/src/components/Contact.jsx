import React from 'react'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: []
    };
  }

  render() {
    return (
      <div>
        <form>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Contact