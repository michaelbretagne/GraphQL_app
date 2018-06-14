import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";

import LyricList from "./LyricList";
import LyricCreate from "./LyricCreate";
import getSongDetail from "../queries/getSongDetail";

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if (!song) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h4>{song.title}</h4>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={this.props.params.id} />
      </div>
    );
  }
}

export default graphql(getSongDetail, {
  options: props => {
    return { variables: { id: props.params.id } };
  },
})(SongDetail);
