import React, { Component } from 'react';
import Group from "./Group";
import { db } from '../firebase';

class GroupsPage extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   topics: [
    //     "Topic 1",
    //     "Topic 2",
    //     "Topic 3",
    //     "Topic 4",
    //     "Topic 5",
    //     "Topic 6",
    //     "Topic 7",
    //     "Topic 8",
    //     "Topic 9"
    //   ]
    // };
    this.state = {
      topics: [],
    };

    this.pollInterval = null;

    this.getTopics = this.getTopics.bind(this);
  }

  componentDidMount() {
    this.getTopics();
    // poll backend server for comments every 2 seconds
    if (!this.pollInterval) {
      this.pollInterval = setInterval(this.getTopics, 1000);
    }
  }

  componentWillUnmount() {
    if (this.pollInterval) clearInterval(this.pollInterval);
    this.pollInterval = null;
  }

  getTopics() {
    db.onceGetTopics().then(snapshot =>
      this.setState({ topics: snapshot.val() })
    );
  }

  render() {
    const { topics } = this.state;

    return (
      <div>
        <div className="container-fluid">

          {/*{<TopicsList topics={topics} />}*/}

        </div>
        <div className="container mt-5">
          {/*<div className="table-responsive-sm mt-5">*/}
            <table className="table table-striped table-hover">
              <thead className="thead-dark text-center">
              <tr>
                <th scope="col">Groups</th>
              </tr>
              </thead>
              <TopicsList topics={topics} />
            </table>
          {/*</div>*/}
        </div>
      </div>
    );
  }
}

const TopicsList = ({ topics }) => {
  return (
    <tbody>
      {Object.keys(topics).map(key =>
        <Group key={key} topic={topics[key].topic} />
      )}
    </tbody>
  );
};

export default GroupsPage;