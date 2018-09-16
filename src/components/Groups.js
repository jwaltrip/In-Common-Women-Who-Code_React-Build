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
        <h1>Groups Page</h1>

        <div className="container-fluid">

          {<TopicsList topics={topics} />}

        </div>
      </div>
    );
  }
}

const TopicsList = ({ topics }) => {
  return (
    <div>
      {Object.keys(topics).map(key =>
        <Group key={key} topic={topics[key].topic} />
      )}
    </div>
  );
};

export default GroupsPage;