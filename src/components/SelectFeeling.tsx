import React, { Fragment, Component } from 'react';

class SelectFeeling extends Component<{}> {
  render() {
    return (
      <div>
        <div>
          <span className="fas fa-circle" />
          <button type="button" className="feeling">
            Happiness
          </button>
        </div>
        <div>
          <span className="fas fa-circle" />
          <button type="button" className="feeling">
            Sadness
          </button>
        </div>
        <div>
          <span className="fas fa-circle" />
          <button type="button" className="feeling">
            Disgust
          </button>
        </div>
        <div>
          <span className="fas fa-circle" />
          <button type="button" className="feeling">
            Fear
          </button>
        </div>
        <div>
          <span className="fas fa-circle" />
          <button type="button" className="feeling">
            Anger
          </button>
        </div>
      </div>
    );
  }
}

export default SelectFeeling;
