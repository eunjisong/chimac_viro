"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";

import { ViroARScene, ViroText, Viro3DObject, ViroAmbientLight } from "react-viro";

export default class Game extends Component {
  constructor() {
    super();

    this.state = {
      text: "Game starting..."
    };

    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingInitialized={this._onInitialized}>
        <ViroAmbientLight color="#ffffff" />
        <Viro3DObject
          source={require("./res/CHAHIN_DRUMSTICK_CHICKEN.obj")}
          resources={[
            require("./res/CHAHIN_DRUMSTICK_CHICKEN.mtl"),
            require("./res/CHAHIN_DRUMSTICK_CHICKEN_TEXTURE.jpg")
          ]}
          highAccuracyGaze={true}
          position={[1, 3, -5]}
          scale={[3, 3, 3]}
          rotation={[45, 45, 0]}
          type="OBJ"
          transformBehaviors={["billboard"]}
        />
      </ViroARScene>
    );
  }

  _onInitialized() {
    this.setState({
      text: "HEYYYYY"
    });
  }
}

module.exports = Game;
