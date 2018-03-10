"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";

import {
  ViroARScene,
  ViroText,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight
} from "react-viro";

export default class Game extends Component {
  constructor() {
    super();

    this.state = {
      chickens: []
    };

    this._onInitialized = this._onInitialized.bind(this);
    this._onTouch = this._onTouch.bind(this);
  }

  render() {
    const { chickens } = this.state;
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
      position={[3, 4, -4]}
      scale={[3, 3, 3]}
      rotation={[45, 45, 0]}
      type="OBJ"
      transformBehaviors={["billboard"]}
      onTouch={this._onTouch}
      />


      </ViroARScene>
    );
  }

  _onInitialized() {
    // this.setState({
    //   text: "HEYYYYY"
    // });
    const randomPos = Math.round(Math.random() * 10 + 1, 1);
    const randomPosNeg = Math.round(Math.random() * 10 + 1, 1) * -1;

    for (let i = 0; i < 5; i++) {
      this.state.chickens.push({
        positionX: randomPos,
        positionY: randomPos,
        positionZ: randomPosNeg
      });
    }
  }

  _onTouch() {
    console.log('TOUCHEDDDDD////////')
    return (<ViroText text="ERASED!" />);
  }
}

module.exports = Game;

// {this.state.chickens && this.state.chickens.map((chicken, i) => {return (
//   <Viro3DObject
//   key = {i}
//   source={require("./res/CHAHIN_DRUMSTICK_CHICKEN.obj")}
//   resources={[
//     require("./res/CHAHIN_DRUMSTICK_CHICKEN.mtl"),
//     require("./res/CHAHIN_DRUMSTICK_CHICKEN_TEXTURE.jpg")
//   ]}
//   highAccuracyGaze={true}
//   position={[chicken.positionX, chicken.positionY, chicken.positionZ]}
//   scale={[3, 3, 3]}
//   rotation={[45, 45, 0]}
//   type="OBJ"
//   transformBehaviors={["billboard"]}
//   onTouch = {this._onTouch}
// />

// )})}

// <Viro3DObject
// source={require("./res/CHAHIN_DRUMSTICK_CHICKEN.obj")}
// resources={[
//   require("./res/CHAHIN_DRUMSTICK_CHICKEN.mtl"),
//   require("./res/CHAHIN_DRUMSTICK_CHICKEN_TEXTURE.jpg")
// ]}
// highAccuracyGaze={true}
// position={[chicken.positionX, chicken.positionY, chicken.positionZ]}
// scale={[3, 3, 3]}
// rotation={[45, 45, 0]}
// type="OBJ"
// transformBehaviors={["billboard"]}
// onTouch={this._onTouch}
// />
